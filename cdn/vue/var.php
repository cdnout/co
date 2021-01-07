<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.cjs.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "vue";
$prname = "vue"; // npm command
$keyfiles = array("vue.min.js");
$github = "https://github.com/vuejs/vue";
$gitrg = "https://github.com/vuejs/vue/archive/v"; // .tar.gz
$keywords = array("$title", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. "); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-"; 
$version_limit = "-15"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$additional_dir; for all versions 
$zip_remake = "true"; // will create zips for all version
$cat = array("frontend framework", "vue", "javascript", "frontend", "framework");
$type_s = "vue";
?>

