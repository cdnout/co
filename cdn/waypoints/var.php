<?php 
$file_cnn = "
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.jshttps://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/waypoints.debug.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/zepto.waypoints.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/zepto.waypoints.min.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/shortcuts/infinite.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/shortcuts/infinite.min.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/shortcuts/inview.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/shortcuts/inview.min.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/shortcuts/sticky.js
https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/shortcuts/sticky.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";

$title = "Waypoints";
$prname = "waypoints"; // npm command
$keyfiles = array("noframework.waypoints.min.js");
$github = "https://github.com/imakewebthings/waypoints";
$gitrg = ""; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title  cdnout", "$title npm", "Download $title", "$title github", " 
Easily execute a function when you scroll to an element"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
 $version_limit = "-10"; // give negative value 
//$version_lock = "UNlocked"; // cdn/index.php for older versions ill not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "scroll, scrolling";
$cat = explode(',', $cat_s);
$type_s = "jquery";
//$additional_dir = "cjs";
?>

