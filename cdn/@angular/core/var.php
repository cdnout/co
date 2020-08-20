<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core.umd.min.js
https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core-testing.umd.js
https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core-testing.umd.js.map
https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core-testing.umd.min.js
https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core-testing.umd.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core.umd.js
https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core.umd.js.map
https://cdnjs.cloudflare.com/ajax/libs/angular/10.0.11/core.umd.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Angular Core";
$prname = "@angular/core"; // npm command
$keyfiles = array("core.umd.min.js");
$github = "https://github.com/angular/angular";
$gitrg = ""; // .tar.gz
$keywords = array("Angular Core Framework", "angular", "angular api", "angular plugin", "$title cdn", "$title cdnout", "$title npm", "How to install $title", "$title github"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
?>

