<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/angular-loader/1.8.0/angular-loader.min.js
https://cdnjs.cloudflare.com/ajax/libs/angular-loader/1.8.0/angular-loader.js
https://cdnjs.cloudflare.com/ajax/libs/angular-loader/1.8.0/angular-loader.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Angular Loader";
$prname = "angular-loader"; // npm command
$keyfiles = array("angular-loader.min.js");
$github = "https://github.com/angular/angular.js";
$gitrg = ""; // .tar.gz
$keywords = array("Angular Loader", "Angular js", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Module loader for AngularJS modules. If you are loading multiple script files containing AngularJS modules, you can load them asynchronously and in any order as long as you load this file first."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
//$additional_dir = "cjs";
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
//$additional_dir; for all versions 
?>

