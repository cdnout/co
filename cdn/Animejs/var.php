<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js
https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "animejs";
$prname = "Animejs"; // npm command
$keyfiles = array("vue.min.js");
$github = "https://github.com/juliangarnier/anime";
$gitrg = "https://github.com/juliangarnier/anime/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Polyvalent Javascript animation engine."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-6"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "anime", "javascript", "transforms", "svg", "canvas", "CSS");
$type_s = "js";
?>

