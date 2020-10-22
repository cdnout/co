<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/js/lightgallery.min.js
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/css/lg-fb-comment-box.css
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/css/lg-fb-comment-box.min.css
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/css/lg-transitions.css
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/css/lg-transitions.min.css
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/css/lightgallery.css
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/css/lightgallery.min.css
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/fonts/lg.svg
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/fonts/lg.ttf
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/fonts/lg.woff
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/img/loading.gif
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/img/video-play.png
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/img/video-play.png.gz
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/img/vimeo-play.png
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/img/vimeo-play.png.gz
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/img/youtube-play.png
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/img/youtube-play.png.gz
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/js/lightgallery-all.js
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/js/lightgallery-all.min.js
https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.9.0/js/lightgallery.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Light Gallery";
$prname = "lightgallery"; // npm command
$keyfiles = array("lightgallery.min.js", "lightgallery.min.css");
$github = "https://github.com/sachinchoolur/lightGallery";
$gitrg = "https://github.com/sachinchoolur/lightGallery/archive/"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A customizable, modular, responsive, lightbox gallery plugin. "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "gallery, lightbox, image, video, jquery, plugin, responsive gallery, touch gallery";
$cat = explode(',', $cat_s);
$type_s = "js";
?>

