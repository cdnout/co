<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css
https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.compat.css
https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.compat.min.css
https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.compat.min.css.map
https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.css";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}


$listfiles = $listfiles_arr;
$title = "Animate CSS";
$prname = "animate.css"; // npm command
$keyfiles = array("animate.min.css");
$github = "https://github.com/animate-css/animate.css";
$gitrg = "https://github.com/animate-css/animate.css/archive/v"; // .tar.gz
$keywords = array("CSS Animation", "pre made css animations", "$title", "$prname", "$title cdn", "$title cdnout", "$title npm", "How to install $title", "$title github"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-5"; // give negative value 
$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$latest_version_dir = "source";// only for latest versions
//$additional_dir; for all versions
?>