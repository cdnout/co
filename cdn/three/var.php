<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js
https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.js
https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.module.js
https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.module.min.js ";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "three.js";
$prname = "three"; // npm command
$keyfiles = array("three.min.js");
$github = "https://github.com/mrdoob/three.js";
$gitrg = ""; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "JavaScript 3D library. "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-15"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir = "examples/js";
$zip_remake = "true"; // will create zips for all version
$cat = array("webgl", "webgl2", "canvas", "svg", "3d", "virtual reality", "webxr", "html5");
$type_s = "js";
?>

