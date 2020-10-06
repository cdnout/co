<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/angular-animate/1.8.0/angular-animate.min.js
https://cdnjs.cloudflare.com/ajax/libs/angular-animate/1.8.0/angular-animate.js
https://cdnjs.cloudflare.com/ajax/libs/angular-animate/1.8.0/angular-animate.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Angular Animate";
$prname = "angular-animate"; // npm command
$keyfiles = array("angular-animate.min.js");
$github = "https://github.com/angular/angular.js";
$gitrg = "https://github.com/angular/angular.js/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "AngularJS module for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-6"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "angular", "framework", "browser", "client-side");
$type_s = "angular";
?>

