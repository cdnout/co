<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/loadCSS/3.1.0/loadCSS.min.js
https://cdnjs.cloudflare.com/ajax/libs/loadCSS/3.1.0/loadCSS.js
https://cdnjs.cloudflare.com/ajax/libs/loadCSS/3.1.0/loadCSS.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/loadCSS/3.1.0/onloadCSS.js
https://cdnjs.cloudflare.com/ajax/libs/loadCSS/3.1.0/onloadCSS.min.js
https://cdnjs.cloudflare.com/ajax/libs/loadCSS/3.1.0/onloadCSS.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Load CSS Asynchronously";
$prname = "loadCSS"; // npm command
$keyfiles = array("loadCSS.min.js");
$github = "https://github.com/filamentgroup/loadCSS";
$gitrg = ""; // .tar.gz
$keywords = array("Load CSS Asynchronously", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A function for loading CSS asynchronously"); 
//$npmrg = "";
$version_limit = "-2"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
//$additional_dir = "cjs";
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
//$additional_dir; for all versions 
$cat = array("css loader", "preloader", "css preloader");
$type_s = "js";
?>

