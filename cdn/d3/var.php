<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js
https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "d3";
$prname = "d3"; // npm command
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";
$keyfiles = array("d3.min.js");
$github = "https://github.com/d3/d3";
$gitrg = "https://github.com/d3/d3/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Bring data to life with SVG, Canvas and HTML."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat = array("visualization", "svg", "animation", "canvas", "library");
$type_s = "jquery";
?>

