<?php 
  ini_set('max_execution_time', 30000);
  set_time_limit(30000);
  $directories = scandir("./");
  foreach($directories as $directory) {
    if(is_dir($directory)){
      if($directory != "." && $directory != "..") {
        echo $directory."<br>";
        unlink("$directory/template.php");
        copy("main-template.php", "$directory/template.php");
      ?>
      <iframe border="0" style="border: 1px solid #000; width: 100% !important; height: 50px; margin: 0 0 15px;" src="<?php echo $directory; ?>/index.php"></iframe>
<?php
      }
    }
  }
?>