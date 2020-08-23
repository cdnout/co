<?php 
  
  $title = "Create React Class";
  $prname = "create-react-class"; // npm command
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/create-react-class/15.6.3/create-react-class.min.js
https://cdnjs.cloudflare.com/ajax/libs/create-react-class/15.6.3/create-react-class.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}
$listfiles = $listfiles_arr;

$keyfiles = array("create-react-class.min.js");
$github = "https://github.com/facebook/react";
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$gitrg = ""; // .tar.gz
$keywords = array("Legacy API for creating react components", "react", "$title cdn", "$title cdnout", "$title npm", "How to install $title", "$title github"); 
$listfolders = "";
$version_limit = "-8"; 
//$version_lock = "locked";
$zip_remake = "true"; // will create zips for all version
?>