<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js
https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.js
https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.map
https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Axios";
$prname = "axios"; // npm command
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";
$keyfiles = array("axios.min.js");
$github = "https://github.com/axios/axios";
$gitrg = "https://github.com/axios/axios/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Promise based HTTP client for the browser and node.js"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
$cat = array("http-client", "xhr", "node", "ajax", "promise");
$type_s = "jquery";
?>

