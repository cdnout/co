<?php 
  
  $title = "jQuery";
  $prname = "jquery"; // npm command
  $listfolders = "";
  $listfiles = array("jquery.min.js", "jquery.js", "jquery.min.map", "jquery.slim.js", "jquery.slim.min.js", "jquery.slim.min.map");
  $keyfiles = array("jquery.min.js");
  $github = "https://github.com/jquery/jquery.git";
  $npmrg = "https://registry.npmjs.org/jquery/-/jquery-";
  $gitrg = "https://github.com/jquery/jquery/archive/";
  $keywords = array("javascript library", "jquery", "jquery cdn", "cdnout", "jquery npm", "How to install jquery");
  $version_limit = "-42"; // give negative value 
  //$version_lock = "locked";
$zip_remake = "true"; // will create zips for all version
$cat = array("javascript library");
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