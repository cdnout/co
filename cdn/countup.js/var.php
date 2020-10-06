<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.min.js
https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js
https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.umd.js
https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.umd.min.js
https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.withPolyfill.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Countup js";
$prname = "countup.js"; // npm command
$keyfiles = array("countup.js.min.js");
$github = "https://github.com/inorganik/countUp.js";
$gitrg = "https://github.com/inorganik/countUp.js/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Animates a numerical value by counting to it."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", " javascript", "countup");
$type_s = "js";
?>

