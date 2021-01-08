<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.core.js
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.core.min.js
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.fp.js
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.fp.min.js
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.js
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/mapping.fp.js
https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/mapping.fp.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$fileNameSpecial = "lodash.js";
//$myfiles = "true";
//$myfiles_smaller = "true";

$title = "Lodash.js";
$prname = "lodash"; // npm command
$keyfiles = array("lodash.min.js");
$github = "https://github.com/lodash/lodash";
$gitrg = "https://github.com/lodash/lodash/archive/"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", " A utility library delivering consistency, customization, performance, & extras."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
 $version_limit = "-9"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "amd, browser, client, customize, functional, server, util";
$cat = explode(',', $cat_s);
$type_s = "jquery";

//$additional_dir = "cjs";
?>

