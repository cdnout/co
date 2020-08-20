<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/ajax-loader.gif 
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css.map
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css.map
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/fonts/slick.eot 
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/fonts/slick.svg 
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/fonts/slick.ttf
https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/fonts/slick.woff
https://../slick.less
https://../slick.scss
https://../slick-theme.less
https://../slick-theme.scss";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}


$listfiles = $listfiles_arr;
$title = "Slick Carousel";
$prname = "slick-carousel"; // npm command
$keyfiles = array("slick.min.js", "slick.min.css");
$github = "https://github.com/kenwheeler/slick";
$gitrg = "https://github.com/kenwheeler/slick/archive/"; // .tar.gz
$keywords = array("carousel", "responsive carousel", "$title cdn", "$title cdnout", "$title npm", "How to install $title", "$title github"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
?>