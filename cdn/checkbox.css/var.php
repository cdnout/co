<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/checkbox.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/away/away.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/down/down.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/hey/hey.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/inout/inout.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/jump/jump.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/omg/omg.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/roll/roll.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/rotate/rotate.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/splash/splash.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/tv/tv.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/up/up.min.css
https://cdnjs.cloudflare.com/ajax/libs/checkbox.css/1.1.3/css/yo/yo.min.css";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Checkbox css";
$prname = "checkbox.css"; // npm command
$keyfiles = array("checkbox.css.min.js");
$github = "https://github.com/720kb/checkbox.css";
$gitrg = "https://github.com/720kb/checkbox.css/archive/"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Tiny set of CSS3 animations for your input checkboxes."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-6"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "css", "checkboxes", "animated", "checkbox");
$type_s = "css";
?>

