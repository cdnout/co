<!DOCTYPE html>
<html lang="en">
<head>
  <?php
  ini_set('max_execution_time', 300000);
  set_time_limit(300000);
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
        $dirs = scan_dir("../zip/");
         
        foreach($dirs as $id => $value){
          $value = str_replace(".zip", "", $value);
          $url = '../cdn/'.$value.'/var.php';
        if(file_exists($url)){
        include($url);
        $json_url = '../cdn/'.$value.'/package.json';
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
  $keywords = $data_as['keywords'];
  $keywords = implode(" ", $keywords);
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

    if(!empty($keyfiles_add)) {
    $keyfiles_list_ar = array_merge($keyfiles_list, $keyfiles_add);
    
} else {
    $keyfiles_add = array("");
    $keyfiles_list_ar = $keyfiles_list;
  }

$key_css_live = $key_js_live = "";
foreach($keyfiles_list_ar as $file_ext) {
  $file_ext_i = explode("/", $file_ext);
  $file_ext_filename = end($file_ext_i);
  $file_ext_final = pathinfo($file_ext_filename, PATHINFO_EXTENSION);

  if($file_ext_final == "js") {
    if(file_exists("../$director/index.js")) {
  
    $key_js_live = <<<EOD
<script src="https://cdnout.com/$director/"></script>

EOD;
    } else {
      $key_js_live = <<<EOD
<script src="https://cdnout.com/$director/$file_ext"></script>

EOD;
    }
  } 
  if($file_ext_final == "css") {
    if(file_exists("../$director/css/base.css")) {
    $key_css_live = <<<EOD
<link rel="stylesheet" href="https://cdnout.com/$director/css/base.css" media="all">
EOD;
    } else { 
      $key_css_live = <<<EOD
<link rel="stylesheet" href="https://cdnout.com/$director/$file_ext" media="all">
EOD;
    }
  }
}



    $key_css_normal = $key_js_normal = "";

    foreach($keyfiles_list_ar as $file_ext) {
        $file_ext_i = explode("/", $file_ext);
        $file_ext_filename = end($file_ext_i);
        $file_ext_final = pathinfo($file_ext_filename, PATHINFO_EXTENSION);
        if($file_ext_final == "js") {
            $key_js_normal = <<<EOD
<script src="https://cdnjs.cloudflare.com/ajax/libs/$director/$latest_version/$file_ext"></script>

EOD;
        }
        if($file_ext_final == "css") {
            $key_css_normal = <<<EOD
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/$director/$latest_version/$file_ext" media="all">
EOD;
        }
    }
}/*
            echo "<br><br>".$title;
            echo "<br>Hello<br>";
            //print_r($key_css_normal) ;
            echo "<button alt='$key_css_normal'>asdasd</button>";
            echo "<br>";*/
          ?>



       
         <article class="cdn">
           <?php echo $keywords; ?>
            <?php  /*
          <div class="text-box">            
            <h2><a href="../cdn/<?php echo $director ?>/"><?php echo $title; ?></a></h2>
            <ul class="meta">
              <?php if(!empty($npm)) { ?>
              <li class="node"><a href="../cdn/<?php echo $director; ?>#node"><i class="icon-node"></i> Node</a></li>
              <?php }
              if(!empty($github)) {
              ?>
              <li><a rel="nofollow" target="_blank" href="<?php echo $github; ?>"><i class='icon-github'></i>Github</a></li>
              <?php } ?>
              <li class="version" title="Current Version: <?php echo $latest_version; ?>"><span><i class="icon-layers"></i>v<?php echo $latest_version; ?></span></li>
            </ul>
          </div> */ ?>
          <div class="path">
            <div class="btn-block">
                <button title='Copy <?php echo $director ?> <?php echo  $latest_version; ?> necessary CDN Files'
                        data-clipboard-text='<?php echo $key_js_normal.$key_css_normal; ?>'
                        type="button" class="btn btn-dark copycat">
                    <i class="icon-copy"></i> Copy Key CDN JS
                </button>
                <button title='Copy <?php echo $director ?> <?php echo  $latest_version; ?> necessary CDN Files' 
                        data-clipboard-text='<?php echo $key_js_live.$key_css_live; ?>'
                        type="button" class="btn btn-dark copycat">
                  <i class="icon-copy"></i> Copy Key Files
                </button>
                <a href="../cdn/<?php echo $director ?>/" class="btn btn-light-outline"><i class="icon-code-fork"></i> View All Files</a>
              </div>
            
          </div>
        </article>

         <?php echo $keywords; ?>
         
         <?php 
             
          
              $posts[] = array(
                'id' => $id,
                'name' => $title,
                //'description' => $about,
                'type' => $type_s,
                'url' => $director,
                'version' => $latest_version,
                'key_js_live' => $key_js_live,
                'key_css_live' => $key_css_live,
                'key_js_normal' => $key_js_normal,
                'key_css_normal' => $key_css_normal,
                'github' => $github,                
                'npm' => $npm,
                'keywords' => $keywords,
              );
          
     

$json_data = json_encode($posts);
file_put_contents('../co_json.json', $json_data);
          ?>
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