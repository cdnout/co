<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/angular-scroll/1.0.2/angular-scroll.min.js
https://cdnjs.cloudflare.com/ajax/libs/angular-scroll/1.0.2/angular-scroll.js
https://cdnjs.cloudflare.com/ajax/libs/angular-scroll/1.0.2/angular-scroll.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Angular Scroll";
$prname = "angular-scroll"; // npm command
$keyfiles = array("angular-scroll.min.js");
$github = "https://github.com/oblador/angular-scroll";
$gitrg = "https://github.com/oblador/angular-scroll/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Scrollspy, animated scrollTo and scroll events. "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("scroll", "smooth-scroll", "angular", " scrollTo", "scrollspy");
$type_s = "angular";
?>

