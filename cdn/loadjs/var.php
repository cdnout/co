<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/loadjs/4.2.0/loadjs.min.js
https://cdnjs.cloudflare.com/ajax/libs/loadjs/4.2.0/loadjs.js
https://cdnjs.cloudflare.com/ajax/libs/loadjs/4.2.0/loadjs.umd.js
https://cdnjs.cloudflare.com/ajax/libs/loadjs/4.2.0/loadjs.umd.min.js
https://cdnjs.cloudflare.com/ajax/libs/loadjs/4.2.0/loadjs.umd.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Load JS";
$prname = "loadjs"; // npm command
$keyfiles = array("loadjs.min.js");
$github = "https://github.com/muicss/loadjs";
$gitrg = ""; // .tar.gz
$keywords = array("async loader js", "js", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Tiny async loader for modern browsers"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
//$additional_dir = "src"; 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
?>

