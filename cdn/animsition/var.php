<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.min.js
https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/css/animsition.css
https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/css/animsition.min.css
https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Animsition";
$prname = "animsition"; // npm command
$keyfiles = array("animsition.min.js");
$github = "https://github.com/blivesta/animsition";
$gitrg = "https://github.com/blivesta/animsition/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A simple and easy jQuery plugin for CSS animated page transitions."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "css3", "page transition", "jQuery", "js");
$type_s = "js";
?>

