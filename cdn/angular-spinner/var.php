<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/angular-spinner/0.8.1/angular-spinner.min.js
https://cdnjs.cloudflare.com/ajax/libs/angular-spinner/0.8.1/angular-spinner.js
https://cdnjs.cloudflare.com/ajax/libs/angular-spinner/0.8.1/angular-spinner.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Angular Spinner";
$prname = "angular-spinner"; // npm command
$keyfiles = array("agular-spinner.min.js");
$github = "https://github.com/urish/angular-spinner";
$gitrg = "https://github.com/urish/angular-spinner/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Angular directive to show an animated spinner (using spin.js) "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-6"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("spinner", "spin", "spin.js", "angularjs", "animation");
$type_s = "angular";
?>

