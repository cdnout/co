<!DOCTYPE html>
<html lang="en">
<head>
  <?php 
    $head_title = "The Open Source and Live First CDN Resources of Libraries, Plugins or Custom Codes";
    $description = "CDN Out provides Live First CDN resources of Libraries for developers. Host custom files on CDN, Auto Updating and One Click Installation makes your website and workflow faster.";
    $base_url = "../";
    include($base_url.'meta/_head.php');
  ?>
</head>
<body class="search-active page-browse">
  <div id="page">
    <?php include($base_url.'meta/_header.php'); ?>
    <div class="content">
      <div class="container">
        <div class="search-bar">
          
          <input id="search" type="search" class="form-control" placeholder="Search from 3000+ libraries...">
        </div>
      </div>
    </div>
    <main class="container main">
       <section class="cdn-library ">
         <?php 
          function scan_dir($dir) {
              $ignored = array('.', '..', '.svn', '.node_modules', '.htaccess', "$dir@");

              $files = array();    
              foreach (scandir($dir) as $file) {
                
                  if (in_array($file, $ignored)) continue;
                  $files[$file] = filemtime($dir . '/' . $file);
                
              }

              arsort($files);
              $files = array_keys($files);
              return ($files) ? $files : false;
          }
        
        $dirs = scan_dir("../cdn/");
        
        foreach($dirs as $value){
          $url = '../cdn/'.$value.'/var.php';
          
          if(file_exists($url)){
            include($url);
            $v_h = preg_grep("~^$prname.*\.zip$~", scandir("../zip/"));
            $v_h_latest = end($v_h);
            $v_h_latest = str_replace("$prname@", '', $v_h_latest);
            $v_h_latest = str_replace(".zip", '', $v_h_latest);
            
          ?>
         <article class="cdn">
          <div class="text-box">            
            <h2><a href="../cdn/<?php echo $prname ?>/"><?php echo $title; ?></a></h2>
            <ul class="meta">
              <li class="node"><a href="../cdn/<?php echo $prname; ?>#node"><i class="icon-node"></i> Node</a></li>
              <?php 
              if(!empty($gitrg)) {
              ?>
              <li><a rel="nofollow" target="_blank" href="<?php echo $gitrg; ?>"><i class='icon-github'></i>Github</a></li>
              <?php } ?>
              <li class="version" title="Current Version: <?php echo $v_h_latest; ?>"><span><i class="icon-layers"></i>v<?php echo $v_h_latest; ?></span></li>
            </ul>
          </div>
          <div class="path"> 
            <div class="btn-block">
              
                <button title='Copy <?php echo $prname ?> <?php echo  $v_h_latest; ?> necessary CDN Files' 
                        data-clipboard-text='<?php foreach($keyfiles as $keyfileName){ get_file_code($keyfileName, $prname);} ?>'
                        type="button" class="btn btn-dark copycat">
                  <i class="icon-copy"></i> Copy <?php if(isset($dbs["cssfiles"])) { ?>CSS &amp; <?php } ?> JS
                </button>
                <a href="../cdn/<?php echo $prname ?>/" class="btn btn-light-outline"><i class="icon-code-fork"></i> View All Files</a>
              </div>
            
          </div>
        </article>
        
        <?php
          }
        }
        ?>
         <span class="noResults">Sorry, no results found.</span>
      </section>
    </main>
    <?php include($base_url.'meta/_footer.php'); ?>
</body>
</html>