<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}


$listfiles = $listfiles_arr;
$title = "Smooth Scroll";
$prname = "smooth-scroll"; // npm command
//$fileNameSpecial = "";
//$myfiles = "true";
//$myfiles_smaller = "true";
$keyfiles = array("smooth-scroll.min.js");
$github = "https://github.com/cferdinandi/smooth-scroll";
$gitrg = " "; // .tar.gz
$keywords = array("carousel", "responsive carousel", "$title cdn", "$title cdnout", "$title npm", "How to install $title", "$title github", "Animate scrolling to anchor links "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat = array("carousel", "slider");
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