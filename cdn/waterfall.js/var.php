<?php 
$file_cnn = "
https://cdnjs.cloudflare.com/ajax/libs/waterfall.js/1.1.0/waterfall.min.js
https://cdnjs.cloudflare.com/ajax/libs/waterfall.js/1.1.0/waterfall.js";
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

$title = "Waterfall.js";
$prname = "waterfall.js"; // npm command
$keyfiles = array("waterfall.min.js");
$github = "https://github.com/raphamorim/waterfall.js";
$gitrg = ""; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title  cdnout", "$title npm", "Download $title", "$title github", " 
Pinterest Grid in Just 1KB"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
 $version_limit = "-10"; // give negative value 
//$version_lock = "UNlocked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "waterfall, pinterest, masonry, grid, layout, columns";
$cat = explode(',', $cat_s);
$type_s = "jquery";

//$additional_dir = "svgs";

$prname_ = $prname;
if(strpos($prname, "/") !== false){
  $prname_special = strstr($prname, '/');
  $prname_special = substr($prname, strpos($prname, "/") + 1);    
  //$prname_special = substr($prname, 0, strpos($prname, '/'));
  $prname_special = str_replace('/', '', $prname_special);
  $prname_special = str_replace('@', '', $prname_special);
  $prname = $prname_special;
  $npmrg = "https://registry.npmjs.org/$prname_/-/$prname-";
} else {
  $prname = $prname; 
}
?>

