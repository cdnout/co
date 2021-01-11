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
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$gitrg = ""; // .tar.gz
$keywords = array("Legacy API for creating react components", "react", "$title cdn", "$title cdnout", "$title npm", "How to install $title", "$title github"); 
$listfolders = "";
$version_limit = "-10"; 
//$version_lock = "locked";
$zip_remake = "true"; // will create zips for all version
$cat = array("react api", "react components creator");
$type_s = "react";
$prname_ = $prname;
if(strpos($prname, "/") !== false){
  $prname_special = strstr($prname, '/');
  $prname_special = substr($prname, strpos($prname, "/") + 1);    
  //$prname_special = substr($prname, 0, strpos($prname, '/'));
  $prname_special = str_replace('/', '', $prname_special);
  $prname_special = str_replace('@', '', $prname_special);
  $prname = $prname_special;
  $npmrg = "https://registry.npmjs.org/$prname_/-/$prname-";
} else {
  $prname = $prname; 
}
?>