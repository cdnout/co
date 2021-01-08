<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.min.js
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.css
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.css";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
//$fileNameSpecial = "Chart.js";
//$myfiles = "true";
//$myfiles_smaller = "true";

$title = "Chart.js";
$prname = "chart.js"; // npm command
$keyfiles = array("Chart.min.js","Chart.min.css");
$github = "https://github.com/chartjs/Chart.js";
$gitrg = "https://github.com/chartjs/Chart.js/archive/"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", " Simple HTML5 charts using the canvas element."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "charts";
$cat = explode(',', $cat_s);
$type_s = "jquery";

//$additional_dir = "cjs";
?>

