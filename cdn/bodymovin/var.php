<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie.min.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie.d.ts
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_canvas.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_canvas.min.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_canvas_worker.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_canvas_worker.min.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_html.d.ts
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_html.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_html.min.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light.d.ts
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light.min.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light_canvas.d.ts
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light_canvas.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light_canvas.min.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light_html.d.ts
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light_html.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_light_html.min.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_svg.d.ts
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_svg.js
https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.3/lottie_svg.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Bodymovin";
$prname = "bodymovin"; // npm command
$keyfiles = array("bodymovin.min.js");
$github = "https://github.com/bodymovin/bodymovin";
$gitrg = "https://github.com/airbnb/lottie-web/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "After Effects plugin for exporting animations to SVG + JavaScript or canvas + JavaScript"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "canvas", "svg", "after effects", "plugin");
$type_s = "js";
?>

