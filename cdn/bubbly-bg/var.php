<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/bubbly-bg/1.0.0/bubbly-bg.js
https://cdnjs.cloudflare.com/ajax/libs/bubbly-bg/1.0.0/src/bubbly-bg.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Bubbly bg";
$prname = "bubbly-bg"; // npm command
$keyfiles = array("bubbly-bg.min.js");
$github = "https://github.com/tipsy/bubbly-bg";
$gitrg = "";
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Lightweight and beautiful bubbly backgrounds."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-6"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "animated-backgrounds", "javascript", "canvas", "animate");
$type_s = "js";
?>

