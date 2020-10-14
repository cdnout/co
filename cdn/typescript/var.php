<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/typescript/4.0.2/typescript.min.js
https://cdnjs.cloudflare.com/ajax/libs/typescript/4.0.2/typescript.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Typescript";
$prname = "typescript"; // npm command
$keyfiles = array("typescript.min.js");
$github = "https://github.com/microsoft/TypeScript";
$gitrg = "https://github.com/microsoft/TypeScript/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "TypeScript is a superset of JavaScript that compiles to clean JavaScript output. "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-15"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true";  // will create zips for all version
$cat = array("compiler", "library", "language");
$type_s = "js"; 
?>

