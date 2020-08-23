<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.0/angular.min.js
https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.0/angular-csp.css
https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.0/angular-csp.min.css
https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.0/angular.js
https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.0/angular.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Angular JS";
$prname = "angular"; // npm command
$keyfiles = array("angular.min.js");
$github = "https://github.com/angular/angular";
$gitrg = ""; // .tar.gz
$keywords = array("angular js", "angular", "", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
?>

