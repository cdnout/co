<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-exif-map.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-exif-map.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-exif.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-exif.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-fetch.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-fetch.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-iptc-map.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-iptc-map.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-iptc.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-iptc.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-meta.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-meta.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-orientation.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-orientation.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-scale.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image-scale.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image.all.min.js
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image.all.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/blueimp-load-image/5.14.0/load-image.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Blueimp Load Image";
$prname = "blueimp-load-image"; // npm command
//$fileNameSpecial = $prname;
//$myfiles = "true";
//$myfiles_smaller = "true";
$keyfiles = array("load-image.all.min.js");
$github = "https://github.com/blueimp/JavaScript-Load-Image";
$gitrg = ""; // .tar.gz
$keywords = array("Blueimp Load Image", "Blueimp Load Image js", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Load images provided as File or Blob objects or via URL. Retrieve an optionally scaled, cropped or rotated HTML img or canvas element. Use methods to parse image metadata to extract IPTC and Exif tags as well as embedded thumbnail images, to overwrite the Exif Orientation value and to restore the complete image header after resizing. "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
//$additional_dir = "cjs";
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
//$additional_dir; for all versions 
$cat = array("Image Loading", "Image Resizer", "preloader", "image preloader");
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

