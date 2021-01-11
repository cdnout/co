<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

$listfiles = $listfiles_arr;
//$myfiles = "true";
//$myfiles_smaller = "true";

$title = "Font Awesome";
$prname = "@fortawesome/fontawesome-free"; // npm command
$fileNameSpecial = "font-awesome"; 
$keyfiles = array("all.min.css");
$github = "https://github.com/FortAwesome/Font-Awesome";
$gitrg = "https://github.com/FortAwesome/Font-Awesome/archive/"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A customizable, modular, responsive, The iconic SVG, font, and CSS toolkit"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-25"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "css, font, icons, fontawesome, webfont, svg-icons, svg-sprites";
$cat = explode(',', $cat_s);
$type_s = "s2";

//$additional_dir = "svgs";

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

