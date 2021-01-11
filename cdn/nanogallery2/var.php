<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/jquery.nanogallery2.min.js
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/jquery.nanogallery2.core.min.js
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/jquery.nanogallery2.data_flickr.min.js
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/jquery.nanogallery2.data_google3.min.js
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/jquery.nanogallery2.data_nano_photos_provider2.min.js
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/jquery.nanogallery2.js
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/css/nanogallery2.min.css
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/css/nanogallery2.woff.min.css
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/css/font/ngy2_icon_font.woff
https://cdnjs.cloudflare.com/ajax/libs/nanogallery2/3.0.4/css/font/ngy2_icon_font.woff2";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Nano Gallery 2";
$prname = "nanogallery2"; // npm command
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";
$keyfiles = array("jquery.nanogallery2.min.js", "nanogallery2.min.css");
$github = "https://github.com/nanostudio-org/nanogallery2";
$gitrg = "https://github.com/nanostudio-org/nanogallery2/archive/v"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A modern photo / video gallery and lightbox."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "image, javascript, gallery, portfolio, photo, photoset, slideshow, flickr, picasa, smugmug, effects, responsive";
$cat = explode(',', $cat_s);
$type_s = "jquery";
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

