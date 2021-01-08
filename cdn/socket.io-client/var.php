<?php 
$file_cnn = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js.map
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.min.js
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.min.js.map
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.msgpack.min.js
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.msgpack.min.js.map";
$file_cnn = explode("https://", $file_cnn);

foreach($file_cnn as $filecn){
  
  if(!empty($filecn)){
    $listfiles_ar = substr($filecn, strrpos($filecn, '/') + 1);
    $listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr[] = $listfiles_ar;
  }
}

 
$listfiles = $listfiles_arr;
$fileNameSpecial = "socket.io";
//$myfiles = "true";
//$myfiles_smaller = "true";

$title = "Socket.io";
$prname = "socket.io-client"; // npm command
$keyfiles = array("socket.io.min.js");
$github = "https://github.com/socketio/socket.io";
$gitrg = "https://github.com/socketio/socket.io/archive/"; // .tar.gz
$keywords = array($title, $prname, "$title cdn", "$title cdnout", "$title npm", "Download $title", "$title github", "node.js realtime framework server."); 
$npmrg = "https://registry.npmjs.org/$prname/-/$prname-";
$version_limit = "-10"; // give negative value 
//$version_lock = "locked"; // cdn/index.php for older versions will not replaced.
$zip_remake = "true"; // will create zips for all version
$cat_s = "websockets, node, popular";
$cat = explode(',', $cat_s);
$type_s = "s2";

//$additional_dir = "cjs";
?>

