<?php 
  ini_set('max_execution_time', 30000);
  set_time_limit(30000);
$version_linit = "";
$listfolders = "";
include("var.php");
// function entire directory
  function custom_copy($src, $dst) {
    // open the source directory 
    $dir = opendir($src);  
    // Make the destination directory if not exist 
    @mkdir($dst);  
    // Loop through the files in source directory 
    foreach (scandir($src) as $file) {  
        if (( $file != '.' ) && ( $file != '..' )) {  
            if ( is_dir($src . '/' . $file) ) {
              custom_copy($src . '/' . $file, $dst . '/' . $file); 
            }  
            else {  
                copy($src . '/' . $file, $dst . '/' . $file);  
            }
        }
    }  
   
    closedir($dir);  
  }

// function delete dir
  function delete_directory($dirname) {
           if (is_dir($dirname))
             $dir_handle = opendir($dirname);
       if (!$dir_handle)
            return false;
       while($file = readdir($dir_handle)) {
             if ($file != "." && $file != "..") {
                  if (!is_dir($dirname."/".$file))
                       unlink($dirname."/".$file);
                  else
                       delete_directory($dirname.'/'.$file);
             }
       }
       closedir($dir_handle);
       rmdir($dirname);

  }
// function scan
  function recursiveScan($dir, $listfolders, $listfiles, $thefolder) {
      $tree = glob(rtrim($dir, '/') . '/*');
      if (is_array($tree)) {
          foreach($tree as $file) {
            $filename = substr($file, strrpos($file, '/') + 1);
              
              if (is_dir($file)) {
              if(!empty($listfolders)) {
                foreach ($listfolders as $value) {
                  $umd_js = glob($dir.$value.'/*');
                  foreach($umd_js as $key_dist => $file_dist) {
                    $file_dist;
                    $filename2 = substr($file_dist, strrpos($file_dist, '/') + 1);
                    $forward_paths = "../../$thefolder/$filename2";
                    if(!file_exists($forward_paths)) {
                      copy($file_dist,$forward_paths);
                    }
                  }
                }
              }
              recursiveScan($file, $listfolders, $listfiles, $thefolder);
              } elseif (is_file($file)) {

                if(!empty($listfiles)) {
                foreach ($listfiles as $value) {
                  
                  if($filename == $value) {
                    $forward_paths = "../../$thefolder/$filename";
                    $fileext = pathinfo($filename, PATHINFO_EXTENSION);
                    //print_r($fileextension);
                    
                      
                      if($fileext != "woff" && $fileext != "woff2" && $fileext != "svg" && $fileext != "eot" && $fileext != "ttf" && $fileext != "otf" && $fileext != "jpg" && $fileext != "gif" && $fileext != "png" && $fileext != "webp" ){
                        if(!file_exists($forward_paths)) {
                          copy($file,$forward_paths);
                        }
                      } else {
                        if($fileext == "jpg" or $fileext == "gif" or $fileext == "png" or $fileext == "webp"){
                        $forward_paths = "../../$thefolder/img/$filename";
                        if(!file_exists("../../$thefolder/img/")){
                          mkdir("../../$thefolder/img", 0777, true);
                        }
                        if(!file_exists($forward_paths)) {
                          copy($file,$forward_paths);
                        }
                      }
                      if($fileext == "woff" or $fileext == "woff2" or $fileext == "svg" or $fileext == "eot" or $fileext == "ttf" or $fileext == "otf"){
                        $forward_paths = "../../$thefolder/fonts/$filename";
                        if(!file_exists("../../$thefolder/fonts/")){
                          mkdir("../../$thefolder/fonts", 0777, true);
                        }
                        if(!file_exists($forward_paths)) {
                          copy($file,$forward_paths);
                        }
                      }
                        /*
                      if($fileext == "scss"){
                        $forward_paths = "../../$thefolder/scss/$filename";
                          if(!file_exists("../../$thefolder/scss/")){
                            mkdir("../../$thefolder/scss", 0777, true);
                          }
                          if(!file_exists($forward_paths)) {
                            copy($file,$forward_paths);
                          }
                        
                      }
                      if($fileext == "less"){
                        $forward_paths = "../../$thefolder/less/$filename";
                        
                        if(!file_exists("../../$thefolder/less/")){
                            mkdir("../../$thefolder/less", 0777, true);
                          }
                          if(!file_exists($forward_paths)) {
                            copy($file,$forward_paths);
                          }
                      }*/
                      }
                  }
                }                  
              }
            }
          }
        }
      }
  
    
      // CDN AI
      print_r($listfiles);
      // Getting Versions
      $commas = "'";
      $get_v =  shell_exec("npm v $prname versions");
      $get_v = str_replace('[', '', $get_v);
      $get_v = str_replace(']', '', $get_v);      
      $get_v = str_replace($commas, '', $get_v);      
      $get_v_ar  = explode(',', $get_v); 
      foreach($get_v_ar as $key => $one) {
        if(strpos($one, 'alpha') !== false) {
          unset($get_v_ar[$key]);
        }
        if(strpos($one, 'beta') !== false) { 
          unset($get_v_ar[$key]);
        }
        if(strpos($one, 'rc') !== false) { 
          unset($get_v_ar[$key]);
        }
      }

      if(!empty($version_limit)) {
        $get_v_ar = array_slice($get_v_ar, $version_limit);  
      }
      
      print_r($get_v_ar);
      $dirp = "var.php";
      $contents = file_get_contents($dirp);
      $contents = str_replace($get_v_ar, 'hascol', $contents);
      file_put_contents($dirp, $contents);
  
      $latest_version = end($get_v_ar);
      $latest_version = preg_replace('/\s+/', '', $latest_version);
      // NPM Installation
      foreach($get_v_ar as $key => $version) {
          $version = preg_replace('/\s+/', '', $version);
          $foldersname = $prname."@".$version;
        
          if(!file_exists($foldersname)) {
            shell_exec("cd $foldersname");
            mkdir("$foldersname", 0777, true);
            copy("package.json","$foldersname/package.json");
            shell_exec("cd $foldersname && npm install $foldersname");
          }        
      }
      // File Copying
      
      foreach($get_v_ar as $key => $version) {
            
            $version = preg_replace('/\s+/', '', $version);
            
            $foldersname = $prname."@".$version;  
            $mainarticle = "../../cdn/$foldersname";
            $mainfolder = "../../$foldersname";
            // folder creation
            if(!file_exists($mainfolder)) {
              mkdir("../../$foldersname", 0777, true);
            }
            
            if(!file_exists($mainarticle)) {
              mkdir("../../cdn/$foldersname", 0777, true);
              
            }
          $dist = $foldersname."/node_modules/".$prname; 
          recursiveScan($dist,$listfolders, $listfiles, $foldersname); 
            
              // checking for fonts inside dist
             $dist_fonts = $dist."/fonts";
            $dist_scss = $foldersname."/node_modules/".$prname."/scss";
            $dist_less = $foldersname."/node_modules/".$prname."/less";
            $dist_img = $foldersname."/node_modules/".$prname."/images";
              
              $forward_path_dir = "../../$foldersname/fonts";
              if(file_exists($dist_fonts)) {
                custom_copy($dist_fonts, $forward_path_dir);
              }
              
              // copy scss folder if exists
              $forward_path_scss = "../../$foldersname/scss";
              if(file_exists($dist_scss)) {
                if(!file_exists($forward_path_scss)){
                  mkdir($forward_path_scss, 0777, true); 
                  custom_copy($dist_scss, $forward_path_scss);
                }
              }
              // copy less folder if exists
              
              
              $forward_path_less = "../../$foldersname/less";
              if(file_exists($dist_less)) {
                if(!file_exists($forward_path_less)){
                  mkdir($forward_path_less, 0777, true); 
                  custom_copy($dist_less, $forward_path_less);
                }
              }
              // copy img folder if exists
              
              $forward_path_images = "../../$foldersname/img";
              if(file_exists($dist_img)) {
                if(!file_exists($forward_path_images)){
                  mkdir($forward_path_images, 0777, true); 
                  custom_copy($dist_img, $forward_path_images);
                } else {
                  custom_copy($dist_img, $forward_path_images);
                }
              }
        
              // copy img folder if exists
              $dist_img2 = $foldersname."/node_modules/".$prname."/img";
              
              $forward_path_images2 = "../../$foldersname/img";
              if(file_exists($dist_img2)) {
                if(!file_exists($forward_path_images2)){
                  mkdir($forward_path_images2, 0777, true); 
                  custom_copy($dist_img2, $forward_path_images2);
                } else {
                  custom_copy($dist_img2, $forward_path_images2);
                }
              }
            
            // additional directory
          if(isset($additional_dir)) {
            $dist_source = $foldersname."/node_modules/".$prname."/$additional_dir";
            $forward_path_source = "../../$foldersname/$additional_dir";
            if(file_exists($dist_source)) {
              if(!file_exists($forward_path_source)){
                mkdir($forward_path_source, 0777, true); 
                custom_copy($dist_source, $forward_path_source);
              }
            }
          }
          }

      // Creating Zips
      foreach($get_v_ar as $key => $version) {
        $version = preg_replace('/\s+/', '', $version);
        
          $foldersname = $prname."@".$version;
        
          if(file_exists("../../$foldersname/")){
          $zip_to_create = "../../zip/$foldersname.zip";
          
          
          if(isset($zip_remake)) {
            if(file_exists($zip_to_create)) {
              unlink($zip_to_create);
            }
          }
            
          if(!file_exists($zip_to_create)){

          $rootPath = realpath("../../$foldersname/");

          // Initialize archive object
          $zip = new ZipArchive();
          $zip->open("$zip_to_create", ZipArchive::CREATE | ZipArchive::OVERWRITE);

          $files = new RecursiveIteratorIterator(
              new RecursiveDirectoryIterator($rootPath),
              RecursiveIteratorIterator::LEAVES_ONLY
          );

          foreach ($files as $name => $file)
          {
              if (!$file->isDir())
              {
                 $filePath = $file->getRealPath();
                  $relativePath = substr($filePath, strlen($rootPath) + 1);

                    $zip->addFile($filePath, $relativePath);

              }
          }
          $zip->close();
          }
        }
      }

      // creating index files
      foreach($get_v_ar as $key => $version) {
        $version = preg_replace('/\s+/', '', $version);
         $foldersname = $prname."@".$version;
          
         $index_file = $keyfiles[0];
         $jsext_i = ".js";
        $cssext_i = ".css";
        if(strpos($index_file, $jsext_i) !== false){
          $ext_look = $jsext_i;
          if(file_exists("../../$foldersname/$index_file")) {
          if(file_exists("../../$foldersname/index$ext_look")){
            unlink("../../$foldersname/index$ext_look");
            copy("../../$foldersname/$index_file","../../$foldersname/index$ext_look");
          } else {
            copy("../../$foldersname/$index_file","../../$foldersname/index$ext_look");
          }
        }
        else {
          if(isset($listfiles[1])) {
            $index_file2 = $listfiles[1];
            if(file_exists("../../$foldersname/index$ext_look")){
              unlink("../../$foldersname/index$ext_look");
              copy("../../$foldersname/$index_file2","../../$foldersname/index$ext_look");
            } else {
              copy("../../$foldersname/$index_file2","../../$foldersname/index$ext_look");
            }
          }
        }
        } 
        
        
        if(strpos($index_file, $cssext_i) !== false) {
          $ext_look = $cssext_i;
          if(file_exists("../../$foldersname/$index_file")) {
          if(file_exists("../../$foldersname/index$ext_look")){
            unlink("../../$foldersname/index$ext_look");
            copy("../../$foldersname/$index_file","../../$foldersname/index$ext_look");
          } else {
            copy("../../$foldersname/$index_file","../../$foldersname/index$ext_look");
          }
        }
        else {
          if(isset($listfiles[1])) {
            $index_file2 = $listfiles[1];
            if(file_exists("../../$foldersname/index$ext_look")){
              unlink("../../$foldersname/index$ext_look");
              copy("../../$foldersname/$index_file2","../../$foldersname/index$ext_look");
            } else {
              copy("../../$foldersname/$index_file2","../../$foldersname/index$ext_look");
            }
          }
        }
        }
  
      }
      // creating latest version folder
      foreach($get_v_ar as $key => $version) {
        $version = preg_replace('/\s+/', '', $version);
        $foldersname = $prname."@".$version;  
        
        $mainarticle = "../../cdn/$foldersname";
        $mainfolder = "../../$foldersname";
        
        if(file_exists("../../cdn/$prname@$latest_version/var.php")) {
          unlink("../../cdn/$prname@$latest_version/var.php");
          copy("var.php","../../cdn/$prname@$latest_version/var.php");  
        } else {
          copy("var.php","../../cdn/$prname@$latest_version/var.php");  
        }
        if(!isset($version_lock)) {
        if(file_exists("$mainarticle/index.php")) {
          
          unlink("$mainarticle/index.php");
          copy("template.php","$mainarticle/index.php");
        } else {
          copy("template.php","$mainarticle/index.php");
        }
        }
        
        
        if($version == $latest_version) {
          if(isset($latest_version_dir)) {
            $dist_source = $foldersname."/node_modules/".$prname."/$latest_version_dir";
            $forward_path_source = "../../$foldersname/$latest_version_dir";
            if(file_exists($dist_source)) {
              if(!file_exists($forward_path_source)){
                mkdir($forward_path_source, 0777, true); 
                custom_copy($dist_source, $forward_path_source);
              }
            }
          }
        
          if(file_exists("../../$prname")){
            delete_directory("../../$prname");
            custom_copy("../../$foldersname", "../../$prname");
          } else {
            custom_copy("../../$foldersname", "../../$prname");
          }
          
          if(file_exists("../../cdn/$prname")){
            delete_directory("../../cdn/$prname");
            custom_copy("../../cdn/$foldersname", "../../cdn/$prname");
          } else {
            custom_copy("../../cdn/$foldersname", "../../cdn/$prname");
          }
          
            
          if(file_exists("../../zip/$prname.zip")){
            unlink("../../zip/$prname.zip");
            copy("../../zip/$foldersname.zip","../../zip/$prname.zip");
          } else {
            copy("../../zip/$foldersname.zip","../../zip/$prname.zip");
          }
        } 
      }
    // creating latest version folder
      foreach($get_v_ar as $key => $version) {
        $version = preg_replace('/\s+/', '', $version);
        $foldersname = $prname."@".$version;  
        
        $mainarticle = "../../cdn/$foldersname";
        $mainfolder = "../../$foldersname";
        
        if(file_exists("../../cdn/$prname@$latest_version/var.php")) {
          unlink("../../cdn/$prname@$latest_version/var.php");
        }
      }
  ?>
