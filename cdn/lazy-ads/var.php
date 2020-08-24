<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/lazyad-loader/1.1.11/lazyad-loader.min.js
https://cdnjs.cloudflare.com/ajax/libs/lazyad-loader/1.1.11/lazyad-loader.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Lazy Ads Loader";
$prname = "lazy-ads"; // npm command
$keyfiles = array("lazyad-loader.min.js");
$github = "https://github.com/madgex/lazy-ads";
$gitrg = ""; // .tar.gz
$keywords = array("lazy ads loading", "$prname", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Deliver synchronous ads asynchronously with RWD support without modifying the ad code."); 
$type_c = "js";
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-3"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
//$additional_dir = "src"; 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$cat = array("preloader", "lazy ads loader");
$type_s = "js";
?>

