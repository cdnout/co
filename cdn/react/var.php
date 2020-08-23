<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/cjs/react.development.js
https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/cjs/react.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.development.js
https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.profiling.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "React";
$prname = "react"; // npm command
$keyfiles = array("react.production.min.js");
$github = "https://github.com/facebook/react";
$gitrg = "https://github.com/facebook/react/archive/v"; // .tar.gz
$keywords = array("react", "react js", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-15"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$additional_dir = "cjs";
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
//$additional_dir; for all versions 
?>

