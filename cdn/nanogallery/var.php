<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.10.3/jquery.nanogallery.min.js";
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
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true"; 
$keyfiles = array("jquery.nanogallery.min.js", "nanogallery.min.css");
$github = "https://github.com/Kris-B/nanoGALLERY";
$gitrg = "https://github.com/Kris-B/nanoGALLERY/archive/v"; // .tar.gz
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Image gallery simplified - jQuery plugin. Touch enabled, responsive, justified/cascading/grid layout and it supports pulling in Flickr, Google Photos and self hosted images."); 

$version_limit = "-9"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
//$cat_s = "image, javascript, gallery, portfolio, photo, photoset, slideshow, flickr, picasa, smugmug, effects, responsive";
//$cat = explode(',', $cat_s);
$type_s = "jquery";
?>

