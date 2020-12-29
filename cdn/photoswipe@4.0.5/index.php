<!DOCTYPE html>
<html lang="en" class="cdn-cf">
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
    $v_h = preg_grep("~^$prname@.*~", scandir("../../cdn/", 1));
  
    $v_h_latest = current($v_h);
    $v_h_latest = str_replace("$prname@", '', $v_h_latest);
    $v_h_latest = str_replace(".zip", '', $v_h_latest);
  
    //$cdn_real_path = scandir("../../$foldername/", 1);


foreach($file_cnn as $filecn){
   
  if(!empty($filecn)){
    $listfiles_ar_p = substr($filecn, strpos($filecn, "libs/"));
    $listfiles_ar_p = substr($listfiles_ar_p, strpos($listfiles_ar_p, "/") + 1);
    $listfiles_ar_p = substr($listfiles_ar_p, strpos($listfiles_ar_p, "/") + 1);
    $listfiles_ar_p = substr($listfiles_ar_p, strpos($listfiles_ar_p, "/") + 1);
    
    $listfiles_filename = $listfiles_ar_p;
    
    $listfiles_ar_ppr = explode("/", $filecn);
    $listfiles_ar_pr_name = $listfiles_ar_ppr[3];
    //echo $listfiles_ar_p = substr($listfiles_ar_p, "/");
    //echo "<br>";
    //$listfiles_ar_p = substr($listfiles_ar_p, strpos($listfiles_ar_p, "/") + 1);
    //$listfiles_ar_p = preg_replace('/\s+/', '', $listfiles_ar_p);
    //$listfiles_ar_p = substr($listfiles_ar_p, strpos($listfiles_ar_p, "/") + 1); 
    //$listfiles_ar = preg_replace('/\s+/', '', $listfiles_ar);
    $listfiles_arr_p[] = $listfiles_filename;
  }
}


$listfiles = $listfiles_arr_p;
  $cdn_real_path = $listfiles;
  
  /*
    if(file_exists("../../$foldername/fonts")) {
      $cdn_real_fonts = scandir("../../$foldername/fonts/", 1);
    }
  
    if(file_exists("../../$foldername/img")) {
      $cdn_real_img = scandir("../../$foldername/img/", 1);
    }
    if(file_exists("../../$foldername/scss/")) {
      $scss_exists = "true";
      $scss_folder = "true";
    }
  
    if(file_exists("../../$foldername/less")) {
      $less_exists = "true";
      $less_folder = "true";
    }
  */
  /*
    $css_ = preg_grep("~^.*\.css~", scandir("../../$prname/"));
    if(!empty($css_)) {
      $css_exists = "true";
    }
    
    $js_ = preg_grep("~^.*\.js~", scandir("../../$prname/"));
    if(!empty($js_)) {
      $js_exists = "true";
    }
  
    $json_ = preg_grep("~^.*\.json~", scandir("../../$prname/"));  
    if(!empty($json_)) {
      $json_exists = "true";
    }
  
    $scss_ = preg_grep("~^.*\.scss~", scandir("../../$prname/"));
    if(!empty($scss_)) {
      $scss_exists = "true";
      $scss_file_ex = "true";
    }
  
    $less_ = preg_grep("~^.*\.less~", scandir("../../$prname/"));  
    if(!empty($json_)) {
      $less_exists = "true";
      $less_file_ex = "true";
    }
  
    $gif_ = preg_grep("~^.*\.gif~", scandir("../../$prname/"));  
    if(!empty($json_)) {
      $gif_exists = "true";
    }
    $png_ = preg_grep("~^.*\.png~", scandir("../../$prname/"));  
    if(!empty($json_)) {
      $png_exists = "true";
    }
    $jpg_ = preg_grep("~^.*\.jpg~", scandir("../../$prname/"));  
    if(!empty($json_)) {
      $jpg_exists = "true";
    }
  
  */
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
  foreach( $cdn_real_path as $cdn_file_url) {  
      if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
        $index_file = $keyfiles[0];
        $cdn_file_url = str_replace(".js.css", '', $cdn_file_url);
        $jsext = ".js";                    
        if(strpos($cdn_file_url, $jsext) !== false){                                         

          $js_exists = "true";

        }
      }
    }
  foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $cssext = ".css";
                    $cdn_file_url = str_replace(".css.js", '', $cdn_file_url);
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    if(strpos($cdn_file_url, $cssext) !== false){
                        $css_exists = "true";
                      }
                    
                  }
                }
              
              foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    
                    $jsonext = ".json";
                    
                    if(strpos($cdn_file_url, $jsonext) !== false){
                        json_pre_code($made_link); 
                    
                    }
                  }
                }
              
              // scss files
              
              foreach( $cdn_real_path as $cdn_file_url) {
                 if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    
                    $scssext = ".scss";
                    if(strpos($cdn_file_url, $scssext) !== false){
                      $scss_exists = "true";
      $scss_file_ex = "true";
                    }
                  }
                }
              
              // less files
              
                foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    $lessext = ".less";
                    if(strpos($cdn_file_url, $lessext) !== false){
                      $less_exists = "true";
      $less_file_ex = "true";
                      
                    }
                  }
                }
              // ts files
              
                foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    
                    $tstext = ".ts";
                    if(strpos($cdn_file_url, $tstext) !== false){
                        ts_pre_code($made_link);
                    }
                  }
                }
              
              // Image files
              
                foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    $imgext = array(".jpg", ".svg", ".webp", ".gif", ".png");
                    foreach($imgext as $imgextO){
                      $imgextO = $imgextO;
                      if(strpos($cdn_file_url, $imgextO) !== false){                                         
                        $cdn_real_img = "true";
                        $gif_exists = "true";
                        $png_exists = "true"; 
                        $jpg_exists = "true";
                      }
                    }
                  }
                }
              
              // fonts
              
              
              foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/fonts/$cdn_file_url";
                  
                    $cdn_file_url_font = explode(".", $cdn_file_url);
                    
                    $cdn_file_url_font = $cdn_file_url_font[0];
                    $made_link2 = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url_font";
                    $fontext = ".woff2";
                    
                    if(strpos($cdn_file_url, $fontext) !== false){
                      $cdn_real_font = "true";
                      
                    }
                  }
              }
  
  
    if(isset($latest_v)) {
      $version_number = $v_h_latest;
    } else {
      $version_number = $folderver;
    }
  if(isset($css_exists)) {
    $orcss = "or CSS";
     } else {
       $orcss = "";
     }
    if(empty($github)){
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
  if(file_exists("../../$foldername/cjs")){
    $cjs_exists = "true";
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
          </header>
          <div class="block" id="keyfiles">
            <?php if(isset($latest_v)) {?>


            <h2><i class="icon-one"><img src="<?php echo $base_url ?>images/icon-one.svg" width="30" alt="Live First Icon"></i><?php echo $title; ?> One Click Installation</h2>
            <p>A quick way to install <?php echo $title ?> to your website.<br>
              Copy <a href="javascript:;" data-clipboard-text='<?php foreach($keyfiles as $keyfileName){  get_file_code($keyfileName, $foldername);} ?>' class="btn-text copycat">all key files</a> with one click or copy necessary files cdn one by one given below:</p>
            <?php } else { ?>
            <h2><i class="icon-one"><img src="<?php echo $base_url ?>images/icon-one.svg" width="30" alt="Live First Icon"></i><?php echo $title. " ". $folderver; ?> Quick Installation</h2>
            <p>A quick way to <?php echo $title. " ". $folderver; ?> implement to your website.<br>
              Copy <a href="javascript:;" data-clipboard-text='<?php foreach($keyfiles as $keyfileName){  get_file_code($keyfileName, $foldername);} ?>' class="btn-text copycat">all key files</a> with one click or copy necessary files cdn one by one given below:
            </p>
            <?php } ?>
            <div class="path" style="max-width: 80%;">
              <?php 
                foreach( $keyfiles as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $index_file = $keyfiles[0];
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    
                    
                    $jsext = ".js";
                    
                    if(strpos($cdn_file_url, $jsext) !== false){                                         
                      
                      if($cdn_file_url == "$index_file") {
                        $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                      } else {
                        $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                      }
                      
                        js_pre_code($made_link);
                      }
                    
                  }
                }
              foreach( $keyfiles as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $index_file = $keyfiles[0];
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    
                    
                    $cssext = ".css";
                    if(file_exists("../../$foldername/$cdn_file_url")){
                      if(strpos($cdn_file_url, $cssext) !== false){                                         

                        if($cdn_file_url == "$index_file") {
                          $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                        } else {
                          $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                        }
                          css_pre_code($made_link);
                        }
                    }
                  }
                }
              foreach( $keyfiles as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $index_file = $keyfiles[0];
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    
                    
                    $jsext = ".json";
                    
                    if(strpos($cdn_file_url, $jsext) !== false){                                         
                      
                      if($cdn_file_url == "$index_file") {
                        $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                      } else {
                        $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                      }
                      
                        json_pre_code($made_link);
                      }
                  }
                }
              foreach( $keyfiles as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $index_file = $keyfiles[0];
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    
                    
                    $tsext = ".ts";
                    
                    if(strpos($cdn_file_url, $tsext) !== false){                                         
                      
                      if($cdn_file_url == "$index_file") {
                        $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                      } else {
                        $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                      }
                      
                        ts_pre_code($made_link);
                      }
                  }
                }
              ?>
            </div>
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
              <!-- <strong class="note add">1) You may change version number anytime. <br>2) Minified versions does not need last file name. </strong> -->
              <?php } ?>
              <div class="path" style="max-width: 80%;">
                <?php 
               
                
              
                foreach( $cdn_real_path as $cdn_file_url) {
                  
                 
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $index_file = $keyfiles[0];
                    $cdn_file_url = str_replace(".js.css", '', $cdn_file_url);
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    $jsext = ".js";  
                    
                    if(strpos($cdn_file_url, $jsext) !== false){                                         
                      
                      if($cdn_file_url == "$index_file") {
                        $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                      } else {
                        $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                      }
                        js_pre_code($made_link);
                      
                    }
                    
                  }
                }
              
              foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $cssext = ".css";
                    $cdn_file_url = str_replace(".css.js", '', $cdn_file_url);
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    if(strpos($cdn_file_url, $cssext) !== false){
                        css_pre_code($made_link);  
                      }
                    
                  }
                }
              
              foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    $jsonext = ".json";
                    
                    if(strpos($cdn_file_url, $jsonext) !== false){
                        json_pre_code($made_link); 
                    
                    }
                  }
                }
              
              
              
              // scss files
              
              foreach( $cdn_real_path as $cdn_file_url) {
                 if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    $scssext = ".scss";
                    if(strpos($cdn_file_url, $scssext) !== false){
                      $less_file_ex = "exists";
                      scss_pre_code($made_link);
                    }
                  }
                }
              
              // less files
              
                foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    $lessext = ".less";
                    if(strpos($cdn_file_url, $lessext) !== false){
                      $less_file_ex = "exists";
                        less_pre_code($made_link);
                      
                    }
                  }
                }
              // ts files
              
                foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    $tstext = ".ts";
                    if(strpos($cdn_file_url, $tstext) !== false){
                        ts_pre_code($made_link);
                    }
                  }
                }
              
              // Image files
              
                foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url";
                    $imgext = array(".jpg", ".svg", ".webp", ".gif", ".png");
                    foreach($imgext as $imgextO){
                      $imgextO = $imgextO;
                      if(strpos($cdn_file_url, $imgextO) !== false){                                         
                        $cdn_real_fonts = "exists";
                        img_pre_code($made_link);                        
                      }
                    }
                  }
                }
              
              // fonts
              
              
              foreach( $cdn_real_path as $cdn_file_url) {
                  if ($cdn_file_url != "." && $cdn_file_url != ".." && $cdn_file_url != "index.js" && $cdn_file_url != "less" && $cdn_file_url != "scss"  && $cdn_file_url != "images" && $cdn_file_url != "img" && $cdn_file_url != "fonts" && $cdn_file_url != "$the_dir" && $cdn_file_url != "$the_dir2") {
                    $made_link = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/fonts/$cdn_file_url";
                  
                    $cdn_file_url_font = explode(".", $cdn_file_url);
                    
                    $cdn_file_url_font = $cdn_file_url_font[0];
                    $made_link2 = "https://cdnjs.cloudflare.com/ajax/libs/$listfiles_ar_pr_name/$folderver/$cdn_file_url_font";
                    $fontext = ".woff2";
                    
                    if(strpos($cdn_file_url, $fontext) !== false){
                      $cdn_real_img = "exists";
                      echo font_pre_code($made_link, $cdn_file_url_font);  
                    }
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
              <div class="path" style="max-width: 80%;">
                <h3>How to install <?php echo $title." ".$folderver; ?> with NPM<span>Install NodeJS and copy below text in Command:</span></h3>
                <div class="code-line np">
                  <code title="Click to Copy" class="copycat" data-clipboard-text="npm i <?php echo $foldername; ?>">&rsaquo; npm i <?php echo $foldername; ?></code>
                </div>
              </div>
              <div class="path" style="max-width: 80%;">
                <h3>How to install <?php echo $title." ".$folderver; ?> with Yarn<span>Install NodeJS and copy below text in Command:</span></h3>
                <div class="code-line np">
                  <code title="Click to Copy" class="copycat" data-clipboard-text="npm i <?php echo $foldername; ?>">&rsaquo; yarn add <?php echo $foldername; ?></code>
                </div>
              </div>
              <?php } ?>
              <?php if(!empty($github)) { ?>
              <div class="path" style="max-width: 80%;">
                <h3>How to install <?php echo $title; ?> with Github <span>Use SVN or GIT to checkout using below URL: </span></h3>
                <div class="code-line np">
                  <code title="Click to Copy" class="copycat" data-clipboard-text="<?php echo $github; ?>">&rsaquo; <?php echo $github; ?></code>
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
                  <button title='Copy all necessary CDN Sources for implementation' data-clipboard-text='<?php foreach($keyfiles as $keyfileName){  get_file_code($keyfileName, $foldername);} ?>' type="button" class="btn copycat">
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
                  <li class="<?php if($prname == $foldername) { echo "active"; } ?>"><a href="../<?php echo $prname ?>/"><?php echo $prname ?> (Live First CDN)</a></li>
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
