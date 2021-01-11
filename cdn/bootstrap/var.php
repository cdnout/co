<?php 
  $title = "Bootstrap";
  $prname = "bootstrap"; // npm command
  $listfolders = "";
  $listfiles = array("bootstrap.min.js", "bootstrap.js", "bootstrap.js.map", "bootstrap.min.js.map", "bootstrap.bundle.min.js", "bootstrap.bundle.js", "bootstrap.js.map",  "bootstrap.bundle.min.js.map", "bootstrap.min.css", "bootstrap.min.css.map", "bootstrap.css", "bootstrap.css.map","bootstrap-grid.css", "bootstrap-grid.min.css", "bootstrap-grid.min.css.map", "bootstrap-reboot.min.css", "bootstrap-reboot.min.css.map", "bootstrap-reboot.css", "bootstrap-reboot.css.map", "bootstrap-theme.css", "bootstrap-theme.min.css", "bootstrap-theme.css.map");
  $keyfiles = array("bootstrap.min.js", "bootstrap.min.css"); 
  $github = "https://github.com/twbs/bootstrap";
  $npmrg = "https://registry.npmjs.org/bootstrap/-/bootstrap-";
  $gitrg = "https://github.com/twbs/bootstrap/archive/v";
  $keywords = array("Frotn End Framework", "frontend", "$title cdn", "$title cdnout", "$title npm", "How to install $title", "$title github"); 
  $version_limit = "-22";
  //$version_lock = "locked";
  $zip_remake = "true"; // will create zips for all version
  $cat = array("front end framework");
  $type_s = "front end";
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
