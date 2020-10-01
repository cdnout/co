<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/animateplus/2.1.1/animateplus.min.js
https://cdnjs.cloudflare.com/ajax/libs/animateplus/2.1.1/animateplus.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Animate Plus";
$prname = "animateplus"; // npm command
$keyfiles = array("animateplus.min.js");
$github = "https://github.com/bendc/animateplus";
$gitrg = "";
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "CSS and SVG animation library"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("Animate", "animation", "css", "svg", "javascript");
$type_s = "js";
?>

