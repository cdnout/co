/*
 * Concrete v3.0.5
 * A lightweight Html5 Canvas framework that enables hit detection, layering, multi buffering, 
 * pixel ratio management, exports, and image downloads
 * Release Date: 4-22-2019
 * https://github.com/ericdrowell/concrete
 * Licensed under the MIT or GPL Version 2 licenses.
 *
 * Copyright (C) 2019 Eric Rowell @ericdrowell
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Concrete={},idCounter=0;Concrete.PIXEL_RATIO=window&&window.devicePixelRatio||1,Concrete.viewports=[],Concrete.Viewport=function(t){t||(t={}),this.container=t.container,this.layers=[],this.id=idCounter++,this.scene=new Concrete.Scene,this.setSize(t.width||0,t.height||0),t.container.innerHTML="",t.container.appendChild(this.scene.canvas),Concrete.viewports.push(this)},Concrete.Viewport.prototype={add:function(t){return this.layers.push(t),t.setSize(t.width||this.width,t.height||this.height),t.viewport=this},setSize:function(e,i){return this.width=e,this.height=i,this.scene.setSize(e,i),this.layers.forEach(function(t){t.setSize(e,i)}),this},getIntersection:function(t,e){var i,n,s=this.layers;for(i=s.length-1;0<=i;i--)if(0<=(n=s[i].hit.getIntersection(t,e)))return n;return-1},getIndex:function(){var t,e=Concrete.viewports,i=e.length,n=0;for(n=0;n<i;n++)if(t=e[n],this.id===t.id)return n;return null},destroy:function(){this.layers.forEach(function(t){t.destroy()}),this.container.innerHTML="",Concrete.viewports.splice(this.getIndex(),1)},render:function(){var e=this.scene;e.clear(),this.layers.forEach(function(t){t.visible&&e.context.drawImage(t.scene.canvas,0,0,t.width,t.height)})}},Concrete.Layer=function(t){t||(t={}),this.x=0,this.y=0,this.width=0,this.height=0,this.visible=!0,this.id=idCounter++,this.hit=new Concrete.Hit({contextType:t.contextType}),this.scene=new Concrete.Scene({contextType:t.contextType}),t.x&&t.y&&this.setPosition(t.x,t.y),t.width&&t.height&&this.setSize(t.width,t.height)},Concrete.Layer.prototype={setPosition:function(t,e){return this.x=t,this.y=e,this},setSize:function(t,e){return this.width=t,this.height=e,this.scene.setSize(t,e),this.hit.setSize(t,e),this},moveUp:function(){var t=this.getIndex(),e=this.viewport.layers;return t<e.length-1&&(e[t]=e[t+1],e[t+1]=this),this},moveDown:function(){var t=this.getIndex(),e=this.viewport.layers;return 0<t&&(e[t]=e[t-1],e[t-1]=this),this},moveToTop:function(){var t=this.getIndex(),e=this.viewport.layers;e.splice(t,1),e.push(this)},moveToBottom:function(){var t=this.getIndex(),e=this.viewport.layers;return e.splice(t,1),e.unshift(this),this},getIndex:function(){var t,e=this.viewport.layers,i=e.length,n=0;for(n=0;n<i;n++)if(t=e[n],this.id===t.id)return n;return null},destroy:function(){this.viewport.layers.splice(this.getIndex(),1)}},Concrete.Scene=function(t){t||(t={}),this.width=0,this.height=0,this.contextType=t.contextType||"2d",this.id=idCounter++,this.canvas=document.createElement("canvas"),this.canvas.className="concrete-scene-canvas",this.canvas.style.display="inline-block",this.context=this.canvas.getContext(this.contextType),t.width&&t.height&&this.setSize(t.width,t.height)},Concrete.Scene.prototype={setSize:function(t,e){return this.width=t,this.height=e,this.id=idCounter++,this.canvas.width=t*Concrete.PIXEL_RATIO,this.canvas.style.width=t+"px",this.canvas.height=e*Concrete.PIXEL_RATIO,this.canvas.style.height=e+"px","2d"===this.contextType&&1!==Concrete.PIXEL_RATIO&&this.context.scale(Concrete.PIXEL_RATIO,Concrete.PIXEL_RATIO),this},clear:function(){var t=this.context;return"2d"===this.contextType?t.clearRect(0,0,this.width*Concrete.PIXEL_RATIO,this.height*Concrete.PIXEL_RATIO):t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this},toImage:function(t){var e=this,i=new Image,n=this.canvas.toDataURL("image/png");i.onload=function(){i.width=e.width,i.height=e.height,t(i)},i.src=n},download:function(h){this.canvas.toBlob(function(t){var e,i=document.createElement("a"),n=URL.createObjectURL(t),s=h.fileName||"canvas.png";i.setAttribute("href",n),i.setAttribute("target","_blank"),i.setAttribute("download",s),document.createEvent?((e=document.createEvent("MouseEvents")).initEvent("click",!0,!0),i.dispatchEvent(e)):i.click&&i.click()})}},Concrete.Hit=function(t){t||(t={}),this.width=0,this.height=0,this.contextType=t.contextType||"2d",this.canvas=document.createElement("canvas"),this.canvas.className="concrete-hit-canvas",this.canvas.style.display="none",this.canvas.style.position="relative",this.context=this.canvas.getContext(this.contextType,{preserveDrawingBuffer:!0,antialias:!1}),t.width&&t.height&&this.setSize(t.width,t.height)},Concrete.Hit.prototype={setSize:function(t,e){return this.width=t,this.height=e,this.canvas.width=t*Concrete.PIXEL_RATIO,this.canvas.style.width=t+"px",this.canvas.height=e*Concrete.PIXEL_RATIO,this.canvas.style.height=e+"px",this},clear:function(){var t=this.context;return"2d"===this.contextType?t.clearRect(0,0,this.width*Concrete.PIXEL_RATIO,this.height*Concrete.PIXEL_RATIO):t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this},getIntersection:function(t,e){var i,n=this.context;if(t=Math.round(t),e=Math.round(e),t<0||e<0||t>this.width||e>this.height)return-1;if("2d"===this.contextType){if(0===(i=n.getImageData(t,e,1,1).data)[3])return-1}else if(i=new Uint8Array(4),n.readPixels(t*Concrete.PIXEL_RATIO,(this.height-e-1)*Concrete.PIXEL_RATIO,1,1,n.RGBA,n.UNSIGNED_BYTE,i),255===i[0]&&255===i[1]&&255===i[2])return-1;return this.rgbToInt(i)},getColorFromIndex:function(t){var e=this.intToRGB(t);return"rgb("+e[0]+", "+e[1]+", "+e[2]+")"},rgbToInt:function(t){return(t[0]<<16)+(t[1]<<8)+t[2]},intToRGB:function(t){return[(16711680&t)>>16,(65280&t)>>8,255&t]}},function(t){"use strict";"function"==typeof define&&define.amd?define(function(){return Concrete}):"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=Concrete),exports.Concrete=Concrete):t.Concrete=Concrete}(this);