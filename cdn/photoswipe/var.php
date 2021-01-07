<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.js
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.css
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.js
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css.map
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.css
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css.map
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.png
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.svg
https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/preloader.gif";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Photoswipe Gallery";
$prname = "photoswipe"; // npm command
$keyfiles = array("photoswipe.min.js","photoswipe.min.css");
$github = "https://github.com/dimsemenov/PhotoSwipe";
$gitrg = "https://github.com/dimsemenov/PhotoSwipe/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "JavaScript image gallery for mobile and desktop, modular, framework independent."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "UNlocked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "image, gallery, lightbox, photo, touch, swipe, zoom";
$cat = explode(',', $cat_s);
$type_s = "jquery";

//$additional_dir = "cjs";
?>

