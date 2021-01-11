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
$title = "Loaders CSS";
$prname = "loaders.css"; // npm command 
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";
$keyfiles = array("loaders.min.css");
$github = "https://github.com/ConnorAtherton/loaders.css";
$gitrg = ""; // .tar.gz
$keywords = array("CSS Animation loader", "css", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Loading animations in pure css"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$additional_dir = "src"; 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
//$additional_dir; for all versions 
$cat = array("css animations", "pre-made animations");
$type_s = "css";
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

