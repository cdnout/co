<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/animatelo/1.0.3/animatelo.min.js
https://cdnjs.cloudflare.com/ajax/libs/animatelo/1.0.3/animatelo.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Animatelo";
$prname = "animatelo"; // npm command
$keyfiles = array("animatelo.min.js");
$github = "https://github.com/gibbok/animatelo";
$gitrg = "https://github.com/gibbok/animatelo/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Animatelo is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness. "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "web animations api", "web animations", "animatelo", "animate");
$type_s = "js";
?>

