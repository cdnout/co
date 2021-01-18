<!DOCTYPE html>
<html lang="en">
<?php 
$url="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; 
$variable = explode("/", $url); 
$foldername =  $variable[count($variable) -2]; 

if (strpos($foldername, '@') !== false) {
  $foldername_sp = explode("@", $foldername); 
  $folderexit = $foldername_sp[count($foldername_sp) -2]; 
  $folderver = $foldername_sp[count($foldername_sp) -1];
} else {
  $folderver =  "";
  $folderexit = $foldername;
  $latest_v = "true";
}
$url = "../$folderexit/var.php"; 
include ($url);
$json_url = "../$folderexit/package.json";
$json = file_get_contents($json_url);   
$data = json_decode($json, TRUE);

foreach($data as $data_as) {
  $director = $data_as['name'];
  $title = str_replace("-", " ", $director);
  $title = ucwords($title);
  $latest_version = $data_as['version'];
  $keyfiles = $data_as['keyfiles'];
  $keyfiles_list = explode(",", $keyfiles);
  $about = $data_as['description'];
  $about = ucfirst($about);
  $github_code = $data_as['repository'];
  
  if(isset($data_as['npm'])) {
    $npm = $data_as['npm'];  
  } else {
    if(isset($npm_check)) {
      $npm = $npm_check; 
    } else {
      $npm = "";
    }
  }
  
  $github = str_replace('git:', '', $github_code); 
  $github = str_replace('+ssh', '', $github);
  $github = str_replace('git+', '', $github);
  $github = str_replace('http:', '', $github);
  $github = str_replace('https:', '', $github);
  $github = str_replace('.git', '', $github);
}
if(!empty($npm)) {
  $npmrg = "https://registry.npmjs.org/$npm/-/$npm-";
  $npm_s = $npm;
  if(strpos($npm, "/") !== false){
    $npm_special = strstr($npm, '/');
    $npm_special = substr($npm, strpos($npm, "/") + 1);    
    //$prname_special = substr($prname, 0, strpos($prname, '/'));
    $npm_special = str_replace('/', '', $npm_special);
    $npm_special = str_replace('@', '', $npm_special);
    $npm = $npm_special;
    $npmrg = "https://registry.npmjs.org/$npm_s/-/$npm-";
  } else {
    $npm = $npm; 
  }
}
$v_h = preg_grep("~^$director@.*~", scandir("../../cdn/", 1));

if(isset($latest_v)) {
  $json_main_url = "https://api.cdnjs.com/libraries/$director/$latest_version";
} else {
  $json_main_url = "https://api.cdnjs.com/libraries/$director/$folderver";
}
$json_main = file_get_contents($json_main_url);   
$json_main_data = json_decode($json_main, TRUE);
$files_list = $json_main_data['files'];
$cdn_real_path = $files_list;

if(!empty($keyfiles_add)) {
  $keyfiles_list = array_merge($keyfiles_list, $keyfiles_add);
}
$keyfiles_list = array_intersect($keyfiles_list, $files_list);
$key_js_file_list = $key_css_file_list = "";
foreach($keyfiles_list as $file_ext) {
  $file_ext_i = explode("/", $file_ext);
  $file_ext_filename = end($file_ext_i);
  $file_ext_final = pathinfo($file_ext_filename, PATHINFO_EXTENSION);
 
  if($file_ext_final == "css") {
    $key_css_file_list = array("$file_ext");
    
  }
  if($file_ext_final == "js") {
    $key_js_file_list = array("$file_ext");
  } 
}
if(!empty($key_css_file_list)) {
$key_css_singular = current($key_css_file_list);
$key_css_file_list = array("$key_css_singular");
}
if(!empty($key_js_file_list)) {
$key_js_singular = current($key_js_file_list);
$key_js_file_list = array("$key_js_singular");
}
  
$key_css_live = $key_js_live = "";
foreach($keyfiles_list as $file_ext) {
  $file_ext_i = explode("/", $file_ext);
  $file_ext_filename = end($file_ext_i);
  $file_ext_final = pathinfo($file_ext_filename, PATHINFO_EXTENSION);

  if($file_ext_final == "js") {
    $key_js_live = <<<EOD
<script src="https://cdnout.com/$director/"></script>

EOD;
  }
  if($file_ext_final == "css") {
    $key_css_live = <<<EOD
<link rel="stylesheet" href="https://cdnout.com/$director/$file_ext" media="all">

EOD;
  }
}

foreach($files_list as $file_ext) {
  $file_ext_i = explode("/", $file_ext);
  $file_ext_filename = end($file_ext_i);
  $file_ext_final = pathinfo($file_ext_filename, PATHINFO_EXTENSION);
 
  
  if($file_ext_final == "js") {
    $js_file_list[] = $file_ext;
    $js_exists = "true";
  }
  if($file_ext_final == "scss") {
    $scss_file_list[] = $file_ext;
    $scss_exists = "true";
  }
  if($file_ext_final == "less") {
    $less_file_list[] = $file_ext;
    $less_exists = "true";
  }
  if($file_ext_final == "json") {
    $json_file_list[] = $file_ext;
    $json_exists = "true";
  }
  if($file_ext_final == "ts") {
    $ts_file_list[] = $file_ext;
    $ts_exists = "true";
  }
  if($file_ext_final == "css") {
    $css_file_list[] = $file_ext;
    $css_exists = "true";
  }
  if($file_ext_final == "woff" || $file_ext_final == "ttf" || $file_ext_final == "otf" || $file_ext_final == "woff2" || $file_ext_final == "eot") {
    $font_file_list[] = $file_ext;
    $fonts_exists = "true";
    $cdn_real_fonts = "true";
  }
  if($file_ext_final == "png" || $file_ext_final == "jpeg" || $file_ext_final == "jpg" || $file_ext_final == "gif" || $file_ext_final == "webp") {
    $img_file_list[] = $file_ext;
    $png_exists = "true";
    $gif_exists = "true";
    $jpg_exists = "true";
    $img_exists = "true";
  }
  if(isset($latest_v)) {
      $version_number = $latest_version;
    } else {
      $version_number = $folderver;
    }
  if(isset($css_exists)) {
    $orcss = "or CSS";
     } else {
       $orcss = "";
     }
    if((empty($github)) || (!empty($npm))){
      $npm_ = "NPM or Yarn";
    } else {
      $npm_ = "NPM, Yarn";
    }
  if(!isset($js_exists)) {
    $orcss = "CSS";
    $js_text = "";
  } else {
    $js_text = "JS";
  }
  if(!isset($npmrg)){
      $github_ = "Github";
      
    } else {
      $github_ = "and Github";
    }
  if(!isset($npmrg) && !empty($github)) {
    $npm_ = "";
    $github_ = "Github";
  }
 
}
$key_css_normal = $key_js_normal = "";
  
foreach($keyfiles_list as $file_ext) {
  $file_ext_i = explode("/", $file_ext);
  $file_ext_filename = end($file_ext_i);
  $file_ext_final = pathinfo($file_ext_filename, PATHINFO_EXTENSION);
  if($file_ext_final == "js") {
    $key_js_normal = <<<EOD
<script src="https://cdnjs.cloudflare.com/ajax/libs/$director/$folderver/$file_ext"></script>

EOD;
  }
  if($file_ext_final == "css") {
    $key_css_normal = <<<EOD
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/$director/$folderver/$file_ext" media="all">
EOD;
  }
}
?>
<head>
  <?php 
    if(isset($latest_v)) {
      $heading =  "$title CDN Sources, $npm_ $github_ Installation and Packages";
      $head_title = "$heading - Download $title | CDN OUT";
      $description = "$title Live First CDN resources including $js_text $orcss files with their minified versions. How to install $title with $npm_ $github_ or download $title DIST Files.";
    } else {
      $heading =  "$title $folderver CDN, Download $title NPM Package, Install $title with One Click";
      $head_title = "$title $folderver CDN, Download $title $folderver NPM Package, Install $title with One Click | CDN OUT";

      $description = "$title $folderver CDN links including $js_text $orcss files with their minified versions. $npm_ $github_ installation guide for $title $folderver or Download $npm_ $github_ source packages.";
    }
    $base_url = "../../";
    include($base_url.'meta/_head.php'); 
    if(isset($additional_dir)) {
      $the_dir = $additional_dir;
    } else {
       $the_dir = "";
     }
    if(isset($latest_version_dir)) {
      $the_dir2 = $latest_version_dir;
    } else {
      $the_dir2 = "";
    }
  ?>
</head>

<body class="search-active page-details">
  <div id="page">
    <?php include($base_url.'meta/_header.php'); ?>

    <main class="main container sticky-smart-placeholder">
      <article class="cdn-release">
        <div class="content-holder">
          <header class="article-head">
            <h1><?php echo $heading; ?></h1>
            <ul class="meta">
              <li class="download"><a target="_blank" href="#download"><i class="icon-download"></i>Download</a></li>
              <?php if(isset($npmrg)) { ?>
              <?php if(!empty($npmrg)) { ?>
              <li><a rel="nofollow" target="_blank" href="https://www.npmjs.com/package/<?php echo $npm_s; ?>"><i class="icon-npm1"></i>NPM</a></li>
              <?php }} ?>
              <?php  
              if(isset($github)) {
              ?>
              <li><a rel="nofollow" target="_blank" href="<?php echo $github; ?>"><i class='icon-github'></i>Github</a></li>
              <?php } ?>
              <li title="<?php if(isset($latest_v)) { ?>Current <?php } ?> Version: <?php echo $version_number; ?>"><span><i class="icon-layers"></i><?php echo $version_number; ?></span></li>

            </ul>
            
            <p><?php echo $description; ?>
              <?php if(isset($latest_v)) {?>
              Minified versions makes your Site speed better and Shortest CDN URLs helps to improve SEO of your website.
              <?php } else { ?>
              Shortest CDN URLs and Minified versions helps to improve page speed and SEO.
              <?php } ?>
            </p>
            <div class="about">
              <h2>About  <?php echo $title; ?>: </h2>
              <p><?php echo $about; ?></p>
            </div>
          </header>
          <?php if(isset($latest_v)) {
            $file_path = "https://cdnout.com/$director";
          } else {
  $file_path = "https://cdnjs.cloudflare.com/ajax/libs/$director/$folderver";
}
          ?>
          <div class="block" id="keyfiles">
            <?php if(isset($latest_v)) {?>
            
            
            <h2><i class="icon-one"><img src="<?php echo $base_url ?>images/icon-one.svg" width="30" alt="Live First Icon"></i><?php echo $title; ?> One Click Installation</h2>
            <p>A quick way to install <?php echo $title ?> to your website.<br>
              Copy <a href="javascript:;"  data-clipboard-text='<?php if(isset($latest_v)) { echo $key_js_live.$key_css_live; } else { echo $key_js_normal.$key_css_normal; } ?>' class="btn-text copycat">all key files</a> with one click or copy necessary files cdn one by one given below:</p>
            <?php } else { ?>
            <h2><i class="icon-one"><img src="<?php echo $base_url ?>images/icon-one.svg" width="30" alt="Live First Icon"></i><?php echo $title. " ". $folderver; ?> Quick Installation</h2>
            <p>A quick way to <?php echo $title. " ". $folderver; ?> implement to your website.<br>
              Copy <a href="javascript:;"  data-clipboard-text='<?php if(isset($latest_v)) { echo $key_js_live.$key_css_live; } else { echo $key_js_normal.$key_css_normal; } ?>' class="btn-text copycat">all key files</a> with one click or copy necessary files cdn one by one given below:
            </p>
            <?php } ?>
            <div class="path">
              <?php 
              if(!empty($key_js_file_list)) {
                $index_file = $key_js_file_list[0];
                foreach($key_js_file_list as $cdn_file_url) {
                  if($cdn_file_url == $index_file && file_exists("../../$director/index.js")) {
                    
                    if(isset($latest_v)) {
                      $made_link = "https://cdnout.com/$director";
                    } else {
                      $made_link = "$file_path/$cdn_file_url";
                    }
                  } else {
                    $made_link = "$file_path/$cdn_file_url";
                  }
                  
                  js_pre_code($made_link);
                }
              }
              if(!empty($key_css_file_list)) {
                foreach($key_css_file_list as $cdn_file_url) {
                  
                  $made_link = "$file_path/$cdn_file_url";
                  css_pre_code($made_link);
                }
              }
           
              ?>
            </div>
            <?php if(isset($type_s) && $type_s != "react" && $type_s != "angular"  && $type_s != "vue" && $type_s != "css"  && $type_s != "s2") { ?>
            <div class="jquery_latest">
              <div class="path">
              <h3>Do you need <a href="../jquery/" target="_blank">jQuery Library</a> : </h3>
              <?php 
                $jquery_link = "https://cdnout.com/jquery/";
                js_pre_code($jquery_link);
              ?>
            </div>
            </div>
            <?php } ?>
          </div>
          <?php 
            if(isset($latest_v)) {
          ?>
          <div class="block" id="liveFirst">
            <h2><i><img src="<?php echo $base_url ?>images/icon-live.svg" width="30" alt="Live First Icon"></i> <?php echo $title; ?> Live First CDN</h2>
            <p><?php echo $title; ?> Live First CDN will be automatically update to the latest versions on the same CDN resource. Live First CDN saves your time and you don't need to update file version or change path in your website all the time.</p>
          <?php } else { ?>
          <div class="block" id="cdn">
            <h2><i><img src="<?php echo $base_url; ?>images/icon-version.svg" width="30" alt="Cloud Icon"></i> <?php echo $title." ".$folderver; ?> CDN</h2>
            <p><?php echo $title; ?> <?php echo $folderver; ?> CDN resources for all their <?php echo $js_text." ".$orcss; ?> files along with minified versions.</p>
            
            <?php } ?>
            <div class="path">
              <?php 
              
              if(isset($js_file_list)) {
                if(!empty($key_js_file_list)) {
                  $index_file = $key_js_file_list[0];
                } else {
                  $index_file = "";
                }
                foreach($js_file_list as $cdn_file_url) {
                  if($cdn_file_url == $index_file && file_exists("../../$director/index.js")) {
                    
                    if(isset($latest_v)) {
                      $made_link = "https://cdnout.com/$director";
                    } else {
                      $made_link = "$file_path/$cdn_file_url";
                    }
                  } else {
                    $made_link = "$file_path/$cdn_file_url";
                  } 
                  js_pre_code($made_link);
                }                
              }
              if(isset($css_file_list)) {
                foreach($css_file_list as $cdn_file_url) {
                  $made_link = "$file_path/$cdn_file_url";
                  css_pre_code($made_link);
                }
              }
              if(isset($json_file_list)) {
                foreach($json_file_list as $cdn_file_url) {
                  $made_link = "$file_path/$cdn_file_url";
                  json_pre_code($made_link);
                }
              }
              if(isset($ts_file_list)) {
                foreach($ts_file_list as $cdn_file_url) {
                  $made_link = "$file_path/$cdn_file_url";
                  ts_pre_code($made_link);
                }
              }
              if(isset($img_file_list)) {
                foreach($img_file_list as $cdn_file_url) {
                  $made_link = "$file_path/$cdn_file_url";
                  img_pre_code($made_link);
                }
              }
              if(isset($scss_file_list)) {
                foreach($scss_file_list as $cdn_file_url) {
                  $made_link = "$file_path/$cdn_file_url";
                  scss_pre_code($made_link);
                }
              }
              if(isset($less_file_list)) {
                foreach($less_file_list as $cdn_file_url) {
                  $made_link = "$file_path/$cdn_file_url";
                  less_pre_code($made_link);
                }
              }
              if(isset($font_file_list)) {
                foreach($font_file_list as $cdn_file_url) {
                  $made_link = "$file_path/$cdn_file_url";
                  font_pre_code_single($made_link, $director);
                }
              }            
              
           
              ?>
              <div class="btn-holder">
                <?php if(isset($scss_folder) or isset($less_folder) or !empty($the_dir)) { ?>
                <?php if(file_exists("../../zip/$foldername.zip")) { ?>
              <a href="../../zip/<?php echo $foldername ?>.zip" class="btn btn-dark">Download Files (<?php if(isset($js_exists)) {echo "JS "; } ?> <?php if(isset($css_exists)) { ?><?php if(isset($js_exists)) {echo "- ";} ?>CSS <?php } ?> 
                
                <?php if(isset($scss_exists)) { ?>- SCSS <?php } ?> <?php if(isset($less_exists)) { ?> - Less <?php } ?> <?php if(isset($json_exists)) { ?> - JSON <?php } ?> <?php if(isset($cdn_real_fonts)) { echo "- Fonts"; } ?> <?php if(!empty($the_dir)) {echo "& SCSS/LESS";} ?>)</a>
              <?php } ?>
                
                
              <?php } ?>
              <?php if(isset($scss_file_ex) or isset($less_file_ex) or isset($cdn_real_fonts) or isset($cdn_real_img)) { ?>
              <a href="javascript:;" class="btn-show"><span class="show">+ Show all files</span><span class="less">- Show less files</span></a>  
                
              <?php   } ?>
              </div>
            </div>
          </div>
          <div class="block" id="node">
            <h2><i class="icon-node"></i> <?php echo $title; ?> Node JS Commands</h2>
            <p>List of <?php echo $title; ?> NPM, Yarn or Github Commands and Packages details.</p>
            <?php if(!empty($npmrg)) { ?>
            <div class="path">
              <h3>How to install <?php echo $title." ".$folderver; ?> with NPM<span>Install NodeJS and copy below text in Command:</span></h3>
              <div class="code-line np">
                <code title="Click to Copy" class="copycat" data-clipboard-text="npm i <?php echo $npm_s; ?><?php if(!isset($latest_v)) { echo '@'.$folderver; } ?>">&rsaquo; npm i <?php echo $npm_s; ?><?php if(!isset($latest_v)) { echo "@".$folderver; } ?></code>
                <div class="copy-cat">
                  <button class="btn-coppier btn-red"><i class="icon-copy"></i></button>
                </div>
              </div>
            </div>
            <div class="path">
              <h3>How to install <?php echo $title." ".$folderver; ?> with Yarn<span>Install NodeJS and copy below text in Command:</span></h3>
              <div class="code-line np">
                <code title="Click to Copy" class="copycat" data-clipboard-text="yarn add <?php echo $npm_s; ?><?php if(!isset($latest_v)) { echo '@'.$folderver; } ?>">&rsaquo; yarn add <?php echo $npm_s; ?><?php if(!isset($latest_v)) { echo '@'.$folderver; } ?></code>
                <div class="copy-cat">
                  <button class="btn-coppier btn-red"><i class="icon-copy"></i></button>
                </div>
              </div>
            </div>
            <?php } ?>
            <?php if(!empty($github)) { ?>
            <div class="path">
              <h3>How to install <?php echo $title; ?> with Github <span>Use SVN or GIT to checkout using below URL: </span></h3>
              <div class="code-line np">
                <code title="Click to Copy" class="copycat" data-clipboard-text="<?php echo $github; ?>">&rsaquo; <?php echo $github; ?></code>
                <div class="copy-cat">
                  <button class="btn-coppier btn-red"><i class="icon-copy"></i></button>
                </div>
              </div>
            </div>
            <?php } ?>
          </div>
          <div class="block" id="download">
            <h2><i class="icon-download"></i> Download <?php echo $title." ".$folderver; if (isset($latest_v)) {echo "Latest"; } ?> Source Files</h2>
            <p>Download <?php if (isset($latest_v)) {echo "Latest"; } ?> <?php echo $title." ".$folderver ?> Source DIST Files<?php if(isset($npmrg)) { ?>, NPM <?php } ?> <?php if(isset($github)) { ?>or Github <?php } ?> packages in ZIP.</p>
            <div class="btn-area">
              <?php if(file_exists("../../zip/$foldername.zip")) { ?>
              <a target="_blank" href="../../zip/<?php echo $foldername ?>.zip" class="btn btn-dark"><i class="icon-code-fork"></i>Download <?php echo $title; if (!isset($latest_v)) { echo "@".$folderver; } ?> 
                DIST (<?php echo $js_text; ?> <?php if(isset($css_exists)) { ?><?php if(isset($js_exists)) { echo " - "; } ?>CSS <?php } ?> 
                <?php if(isset($scss_exists)) { ?>- SCSS <?php } ?> <?php if(isset($less_exists)) { ?> - Less <?php } ?> <?php if(isset($json_exists)) { ?> - JSON <?php } ?> Files)</a>
              <?php } ?> 
              <?php if(isset($npmrg)) { ?>
              <a target="_blank" rel="help" href="<?php echo $npmrg.$version_number ?>.tgz" class="btn btn-dark btn-npm"><i class="icon-npm1"></i>Download <?php echo $title."@".$version_number; ?> NPM Package</a>
              <?php } if(!empty($gitrg)) { ?>
              <a target="_blank" rel="help" href="<?php echo $gitrg.$version_number ?>.tar.gz" class="btn btn-dark btn-git"><i class="icon-github"></i>Download <?php echo $title."@".$version_number; ?> Github Package</a>
              <?php } else { 
              if(!isset($gitmaster)) {
                $gitmaster = $github;
              }
              ?>
              <a target="_blank" rel="help" href="<?php echo $gitmaster ?>/archive/master.zip" class="btn btn-dark btn-git"><i class="icon-github"></i>Download Github Master</a>
              <?php } ?> 
            </div>
        </div> 
            
        </div>
        <aside class="aside">
          <div class="aside-holder sticky-smart-demo">
            <section class="widget widget-one">
              <div class="btn-block">
                <button title='Copy all necessary CDN Sources for implementation' 
                        data-clipboard-text='<?php if(isset($latest_v)) { echo $key_js_live.$key_css_live; } else { echo $key_js_normal.$key_css_normal; } ?>'
                        type="button" class="btn copycat">
                  <i class="icon-copy"></i> Copy Key Files
                </button>
              </div>
              <strong class="notice" title="Copy All necessary <?php echo $title." ".$folderver; ?> CDN Sources with ONE Click">One Click Implementation</strong>
            </section>
            <section class="widget">
              <h2>Quick Links</h2>
              <ul>
                <?php if(isset($latest_v)) { ?>
                <li><a href="#liveFirst">Live First CDN</a></li>
                <?php } else { ?>
                <li><a href="#cdn">CDN Resources</a></li>
                <?php } ?>
                <li><a href="#node">Node JS Commands</a></li>
                <li><a href="#download">Download Packages</a></li>
              </ul>
            </section>
            <section class="widget">
              <h2>Old Versions</h2>

              <ul class="versions">
                <li class="<?php if($director == $foldername) { echo "active"; } ?>"><a href="../<?php echo $director ?>/"><?php echo $director ?> (Live First CDN)</a></li>
                <?php foreach($v_h as $version_){ 
                    $version_ = str_replace(".zip", '', $version_);
                  ?>
                  <li class="<?php if($version_ == $foldername) { echo "active"; } ?>"><a href="../<?php echo $version_; ?>/"><?php echo $version_ ?> </a></li>
                <?php } ?>
              </ul>
            </section>
          </div>
        </aside>
      </article>
    </main>
    <?php include($base_url.'meta/_footer.php'); ?>
</body>
</html>
