{"version":3,"sources":["./Imager.js"],"names":["window","document","addEvent","addEventListener","el","eventName","fn","attachEvent","defaultWidths","getKeys","Object","keys","object","key","push","applyEach","collection","callbackEach","i","length","new_collection","returnFn","value","noop","trueFn","debounce","wait","timeout","context","this","args","arguments","later","apply","clearTimeout","setTimeout","Imager","elements","opts","self","doc","undefined","selector","viewportHeight","documentElement","clientHeight","className","gif","createElement","src","alt","lazyloadOffset","scrollDelay","onResize","hasOwnProperty","lazyload","scrolled","availablePixelRatios","availableWidths","onImagesReplaced","widthsMap","refreshPixelRatio","widthInterpolator","removeAttribute","createWidthsMap","devicePixelRatio","sort","a","b","divs","add","ready","onReady","init","prototype","elementsOrSelector","querySelectorAll","additional","changeDivsToEmptyImages","concat","scrollCheck","offscreenImageCount","element","isPlaceholder","isThisElementOnScreen","clearInterval","interval","initialized","filterFn","registerScrollEvent","checkImagesNeedReplacing","registerResizeEvent","createGif","match","RegExp","elementClassName","getAttribute","elementWidth","cloneNode","width","setAttribute","parentNode","replaceChild","elementOffsetTop","offset","getPageOffset","offsetParent","offsetTop","images","isResizing","image","replaceImagesBasedOnScreenDimensions","computedWidth","naturalWidth","getNaturalWidth","determineAppropriateResolution","changeImageSrcToUseNewImageDimensions","getClosestValue","clientWidth","getPixelRatio","selectedWidth","replace","transforms","pixelRatio","widths","interpolator","map","baseValue","candidates","parseFloat","setInterval","getPageOffsetGenerator","testCase","pageYOffset","scrollTop","Image","imageCopy","call","module","exports","define","amd"],"mappings":"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","file":"./Imager.min.js"}