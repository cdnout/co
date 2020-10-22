<?php 
$file_cnn = "https:///jquery.modal.js
https:///jquery.modal.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;  
$title = "jQuery Chaos Modal";
$prname = "jquery-chaos-modal"; // npm command
$keyfiles = array("jquery.modal.min.js");
$github = "https://github.com/msigley/jquery-chaos-modal";
$gitrg = "https://github.com/msigley/jquery-chaos-modal/archive/"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A Simple yet extendable jQuery modal script built for use with inline HTML, images, videos, and galleries. "); 

$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "modal, Popup, Gallery, video modal";
$cat = explode(',', $cat_s);
$type_s = "js";
$get_v_ar = array("1.14.0");
?>

