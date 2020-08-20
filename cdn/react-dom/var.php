<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-server.browser.development.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-server.browser.development.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-server.browser.development.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-server.browser.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-test-utils.development.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-test-utils.development.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-test-utils.development.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-test-utils.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-unstable-fizz.browser.development.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-unstable-fizz.browser.development.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-unstable-fizz.browser.development.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-unstable-fizz.browser.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-unstable-native-dependencies.development.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-unstable-native-dependencies.development.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-unstable-native-dependencies.development.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom-unstable-native-dependencies.production.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.development.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.development.min.js
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.development.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.profiling.min.js";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$title = "React Dom";
$prname = "react-dom"; // npm command
$keyfiles = array("react.production.min.js");
$github = "https://github.com/facebook/react";
$gitrg = ""; // .tar.gz
$keywords = array("react-dom", "react-dom js", "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github"); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
//$zip_remake = "true"; // will create zips for all version
$additional_dir = "cjs";
//$zip_remake = "true"; // will create zips for all version
?>

