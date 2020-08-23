<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/loaders.css/0.1.2/loaders.min.css
https://cdnjs.cloudflare.com/ajax/libs/loaders.css/0.1.2/loaders.css
https://cdnjs.cloudflare.com/ajax/libs/loaders.css/0.1.2/loaders.css.js
https://cdnjs.cloudflare.com/ajax/libs/loaders.css/0.1.2/loaders.css.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Loader CSS (Animations)";
$prname = "loaders.css"; // npm command
$keyfiles = array("loaders.min.css", "loaders.css.js");
$github = "https://github.com/ConnorAtherton/loaders.css";
$gitrg = ""; // .tar.gz
$keywords = array("CSS Animation loader", "css", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Loading animations in pure css"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
$additional_dir = "src"; 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
//$additional_dir; for all versions 
?>

