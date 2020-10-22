<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/jquery.nanogallery.min.js
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/loading.gif
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/nano_logo.png
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/nanogallery.min.css
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/nanogallery.woff.min.css
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/font/nano_icon_font3.eot
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/font/nano_icon_font3.svg
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/font/nano_icon_font3.ttf
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/font/nano_icon_font3.woff
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/clean/loading.gif
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/clean/nano_logo.png
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/clean/nanogallery_clean.min.css
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/clean/nanogallery_clean.woff.min.css
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/light/loading.gif
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/light/nano_logo.png
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/light/nanogallery_light.min.css
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/light/nanogallery_light.woff.min.css
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/clean/font/nano_icon_font3.eot
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/clean/font/nano_icon_font3.svg
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/clean/font/nano_icon_font3.ttf
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/clean/font/nano_icon_font3.woff
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/light/font/nano_icon_font3.eot
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/light/font/nano_icon_font3.svg
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/light/font/nano_icon_font3.ttf
https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/css/themes/light/font/nano_icon_font3.woff";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Nano Gallery";
$prname = "nanogallery"; // npm command
$keyfiles = array("jquery.nanogallery.min.js", "nanogallery.min.css");
$github = "https://github.com/Kris-B/nanoGALLERY";
$gitrg = "https://github.com/Kris-B/nanoGALLERY/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "mage gallery simplified - jQuery plugin. Touch enabled, responsive, justified/cascading/grid layout and it supports pulling in Flickr, Google Photos and self hosted images."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "image, javascript, gallery, portfolio, photo, photoset, slideshow, flickr, picasa, smugmug, effects, responsive";
$cat = explode(',', $cat_s);
$type_s = "js";
?>

