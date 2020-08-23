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
$title = "CSS Loader";
$prname = "pure-css-loader"; // npm command
$keyfiles = array("css-loader.css");
$github = "https://github.com/raphaelfabeni/css-loader";
$gitrg = "https://github.com/raphaelfabeni/css-loader/archive/v"; // .tar.gz
$keywords = array("css loader", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Simple loaders for your web applications using only one div and pure CSS"); 
$type_c = "css";
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$additional_dir = "src"; 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
?>

