<?php 
$file_cnn = "https://cdnjs.cloudflare.com/photoviewer.css
https://cdnjs.cloudflare.com/ajax/libs/photoviewer.js
https://cdnjs.cloudflare.com/ajax/libs/photoviewer.min.js
https://cdnjs.cloudflare.com/ajax/libs/photoviewer.min.css";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Photo Viewer";
$prname = "photoviewer"; // npm command
$keyfiles = array("photoviewer.min.js", "photoviewer.min.css");
$github = "https://github.com/nzbin/photoviewer";
$gitrg = "https://github.com/nzbin/photoviewer/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A JS plugin to view images just like in Windows."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "photoviewer, lightbox, image-gallery, responsive modal, rich photo viewer";
$cat = explode(',', $cat_s);
$type_s = "js";
?>

