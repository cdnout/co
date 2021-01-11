<?php 
$file_cnn = "https://cdnjs.cloudflare.com/photoviewer.css
https://cdnjs.cloudflare.com/ajax/libs/photoviewer.js
https://cdnjs.cloudflare.com/ajax/libs/photoviewer.min.js
https://cdnjs.cloudflare.com/ajax/libs/photoviewer.min.css";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Photo Viewer";
$prname = "photoviewer"; // npm command
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";
$keyfiles = array("photoviewer.min.js", "photoviewer.min.css");
$github = "https://github.com/nzbin/photoviewer";
$gitrg = "https://github.com/nzbin/photoviewer/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A JS plugin to view images just like in Windows."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "photoviewer, lightbox, image-gallery, responsive modal, rich photo viewer";
$cat = explode(',', $cat_s);
$type_s = "jquery";
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

