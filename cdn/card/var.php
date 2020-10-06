<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/card/2.5.0/card.min.js
https://cdnjs.cloudflare.com/ajax/libs/card/2.5.0/card.css
https://cdnjs.cloudflare.com/ajax/libs/card/2.5.0/card.js
https://cdnjs.cloudflare.com/ajax/libs/card/2.5.0/card.min.css
https://cdnjs.cloudflare.com/ajax/libs/card/2.5.0/jquery.card.js
https://cdnjs.cloudflare.com/ajax/libs/card/2.5.0/jquery.card.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "Card";
$prname = "card"; // npm command
$keyfiles = array("card.min.js");
$github = "https://github.com/jessepollak/card";
$gitrg = "https://github.com/jessepollak/card/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Card lets you add an interactive, CSS3 credit card animation to your credit card form to help your users through the process."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-5"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("animation", "credit card animation", "card");
$type_s = "js";
?>

