<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/css-loader.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-ball.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-bar-ping-pong.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-bar.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-border.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-bouncing.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-clock.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-curtain.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-default.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-double.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-music.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-pokeball.css
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/loader-smartphone.css";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Pure CSS Loader";
$prname = "pure-css-loader"; // npm command
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";
$keyfiles = array("css-loader.css");
$github = "https://github.com/raphaelfabeni/css-loader";
$gitrg = "https://github.com/raphaelfabeni/css-loader/archive/v"; // .tar.gz
$keywords = array("css loader", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Simple loaders for your web applications using only one div and pure CSS"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$additional_dir = "src"; 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$cat = array("preloader", "css loaders");
$type_s = "css";
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

