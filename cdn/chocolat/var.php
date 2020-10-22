<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/js/chocolat.cjs.js
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/css/chocolat.css
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/css/chocolat.min.css
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/close.png
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/close.png.gz
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/fullscreen-black.png
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/fullscreen-black.png.gz
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/fullscreen.png
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/fullscreen.png.gz
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/left.png
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/left.png.gz
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/loader.gif
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/right.png
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/images/right.png.gz
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/js/chocolat.esm.js
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/js/chocolat.iife.js
https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.0.3/js/chocolat.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Chocolat";
$prname = "chocolat"; // npm command
$keyfiles = array("chocolat.cjs.js", "chocolat.min.css");
$github = "https://github.com/nicolas-t/Chocolat";
$gitrg = "https://github.com/nicolas-t/Chocolat/archive/"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "A Responsive jQuery Lightbox Plugin"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-2"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "jquery, lightbox, plugin, responsive";
$cat = explode(',', $cat_s);
$type_s = "js";
?>

