<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/anima/0.4.0/anima.min.js
https://cdnjs.cloudflare.com/ajax/libs/anima/0.4.0/anima.js
https://cdnjs.cloudflare.com/ajax/libs/anima/0.4.0/anima.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/anima/0.4.0/jquery.anima.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Anima";
$prname = "anima"; // npm command
$keyfiles = array("anima.min.js");
$github = "https://github.com/lvivski/anima";
$gitrg = "https://github.com/lvivski/animatic/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "CSS/JS Animations Library with Physics support"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-6"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "anima", "animate", "css", "animations");
$type_s = "js";
?>

