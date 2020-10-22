<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.min.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.css
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.esm.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.jquery.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.jquery.min.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.legacy.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.legacy.min.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.min.css
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.modules.js
https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.5.0/simple-lightbox.modules.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Simple Touch Lightbox";
$prname = "simplelightbox"; // npm command
$keyfiles = array("simple-lightbox.min.js", "simple-lightbox.min.css");
$github = "https://github.com/andreknieriem/simplelightbox";
$gitrg = "https://github.com/andreknieriem/simplelightbox/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Touch-friendly image lightbox for mobile and desktop with jQuery"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat = array("lightbox", "modal", "gallery", "jquery-plugin", "touchfriendly", "responsive", "popup", "dialog");
$type_s = "js";
?>

