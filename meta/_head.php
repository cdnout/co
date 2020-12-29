<!-- Global site tag (gtag.js) - Google Analytics -->
<?php 
$whitelist = array(
    '127.0.0.1',
    '::1'
);
if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){ ?>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-174652325-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-174652325-1'); 
</script>
 <?php }  ?>
<?php 
$url="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']; 
header("Access-Control-Allow-Origin: *"); 
?>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php echo $head_title; ?></title>
<meta content="<?php echo $description ?>" name="description" />
<link rel="icon" type="image/png" href="https://cdnout.com/images/favicon.png">
<link rel="canonical" href="<?php echo $url ?>" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo $head_title ?>" />
<meta property="og:description" content="<?php echo $description ?>" /> 
<meta property="og:url" content="<?php echo $url ?>" />
<meta property="og:site_name" content="CDNOUT" />
<meta name="twitter:card" content="product" />
<meta name="twitter:title" content="<?php echo $head_title ?>" />
<meta name="twitter:description" content="<?php echo $description ?>" />
<meta name="twitter:site" content="@CDN_OUT" />
<meta name="twitter:creator" content="@CDN_OUT" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
<link href="<?php echo $base_url; ?>css/css.css" rel="stylesheet" media="all">

<?php 
  function get_file_code($thefilename, $thefolder) {
    $jsext = "js";
    if(strpos($thefilename, $jsext) !== false){
         
      
$finaljs = <<<EOD
<script src="https://cdnout.com/$thefolder/"></script>

EOD;
      echo $finaljs;
    }
    
    if(strpos($thefilename, "css") !== false) {
$finalcss = <<<EOD
<link rel="stylesheet" href="https://cdnout.com/$thefolder/$thefilename" media="all">

EOD;
      echo $finalcss;
    } 
  }
function js_pre_code($made_link) { 
  $mapext = "map";
  if(strpos($made_link, $mapext) !== false){ 
    $mapfile = "mapfile";
  }

?>

<div class="code-line js <?php if(isset($mapfile)) { echo $mapfile; } ?>">
  <code class="copycat" data-clipboard-text='<?php echo $made_link ?>'>
    <?php echo $made_link ?></code>
  <div class="copy-cat">
    <button data-clipboard-text='<script src="<?php echo $made_link ?>"></script>' title="Copy Script Tag" type="button" class="btn-coppier copycat"><i class="icon-code1"></i></button>
    <button data-clipboard-text='<?php echo $made_link ?>' title="Copy URL" type="button" class="btn-coppier copycat"><i class="icon-website"></i></button>
  </div>
</div>

<?php
}  function css_pre_code($made_link) {
  $mapext = "map";
  if(strpos($made_link, $mapext) !== false){ 
    $mapfile = "mapfile";
  }
?>
<div class="code-line css <?php if(isset($mapfile)) { echo $mapfile; } ?>">
  <code class="copycat" data-clipboard-text='<?php echo $made_link; ?>'><?php echo $made_link; ?></code>
  <div class="copy-cat">
    
    <button data-clipboard-text='<link href="<?php echo $made_link; ?>" rel="stylesheet" media="all">' title="Copy CSS Tag" type="button" class="btn-coppier copycat"><i class="icon-code1"></i></button>
    <button data-clipboard-text='<?php echo $made_link; ?>' title="Copy URL" type="button" class="btn-coppier copycat"><i class="icon-website"></i></button>
  </div>
</div>
<?php
} function scss_pre_code($made_link) {
  $mapext = "map";
  if(strpos($made_link, $mapext) !== false){ 
    $mapfile = "mapfile";
  }
?>
<div class="code-line scss <?php if(isset($mapfile)) { echo $mapfile; } ?>">
  <code class="copycat" data-clipboard-text='<?php echo $made_link; ?>'><?php echo $made_link; ?></code>
  <div class="copy-cat">
    <button data-clipboard-text='@import "<?php echo $made_link; ?>";' title="Copy Import SCSS Tag" type="button" class="btn-coppier copycat"><i class="icon-code1"></i></button>
    <button data-clipboard-text='<?php echo $made_link; ?>' title="Copy URL" type="button" class="btn-coppier copycat"><i class="icon-website"></i></button>
  </div>
</div>
<?php
} function less_pre_code($made_link) {
  $mapext = "map";
  if(strpos($made_link, $mapext) !== false){ 
    $mapfile = "mapfile";
  }
?>
<div class="code-line less <?php if(isset($mapfile)) { echo $mapfile; } ?>">
  <code class="copycat" data-clipboard-text='<?php echo $made_link; ?>'><?php echo $made_link; ?></code>
  <div class="copy-cat">
    <button data-clipboard-text='@import "<?php echo $made_link; ?>";' title="Copy Import Less Tag" type="button" class="btn-coppier copycat"><i class="icon-code1"></i></button>
    <button data-clipboard-text='<?php echo $made_link; ?>' title="Copy URL" type="button" class="btn-coppier copycat"><i class="icon-website"></i></button>
  </div>
</div>
<?php
} function img_pre_code($made_link) {
  $mapext = "map";
  if(strpos($made_link, $mapext) !== false){ 
    $mapfile = "mapfile";
  }
?>
<div class="code-line img <?php if(isset($mapfile)) { echo $mapfile; } ?>">
  <code class="copycat" data-clipboard-text='<?php echo $made_link; ?>'><?php echo $made_link; ?></code>
  <div class="copy-cat">
    <button data-clipboard-text='<img src="<?php echo $made_link; ?>" alt="Image description">' title="Copy Image Tag" type="button" class="btn-coppier copycat"><i class="icon-code1"></i></button>
    <button data-clipboard-text='<?php echo $made_link; ?>' title="Copy URL" type="button" class="btn-coppier copycat"><i class="icon-website"></i></button>
  </div>
</div>
<?php } function font_pre_code($made_link, $made_name) { ?>

<div class="code-line font">
<code title="Click to Copy" class="copycat" data-clipboard-text="
@font-face {
    font-family: <?php echo $made_name; ?>;
    src: url('<?php echo $made_link; ?>.eot');
    src: url('<?php echo $made_link; ?>.eot?#iefix') format('embedded-opentype'),
         url('<?php echo $made_link; ?>.woff2') format('woff2'),
         url('<?php echo $made_link; ?>.woff') format('woff'),
         url('<?php echo $made_link; ?>.svg# <?php echo $made_name; ?>') format('svg');
    font-weight: normal;
    font-style: normal;

} ">@font-face {
    font-family: <?php echo $made_name; ?>;
    src: url('<?php echo $made_link; ?>.eot');
    src: url('<?php echo $made_link; ?>.eot?#iefix') format('embedded-opentype'),
         url('<?php echo $made_link; ?>.woff2') format('woff2'),
         url('<?php echo $made_link; ?>.woff') format('woff'),
         url('<?php echo $made_link; ?>.svg# <?php echo $made_name; ?>') format('svg');
  }
</code> 
</div>
<?php } function json_pre_code($made_link) { 
  $mapext = "map";
  if(strpos($made_link, $mapext) !== false){ 
    $mapfile = "mapfile";
  }
?>
<div class="code-line js <?php if(isset($mapfile)) { echo $mapfile; } ?>">
  <code class="copycat" data-clipboard-text='<?php echo $made_link ?>'>
    <?php echo $made_link ?></code>
  <div class="copy-cat">
    <button data-clipboard-text='<?php echo $made_link ?>' title="Copy URL" type="button" class="btn-coppier copycat"><i class="icon-website"></i></button>
  </div>
</div>
<?php } function ts_pre_code($made_link) { 
  $mapext = "map";
  if(strpos($made_link, $mapext) !== false){ 
    $mapfile = "mapfile";
  }
?>
<div class="code-line ts <?php if(isset($mapfile)) { echo $mapfile; } ?>">
  <code class="copycat" data-clipboard-text='<?php echo $made_link ?>'>
    <?php echo $made_link ?></code>
  <div class="copy-cat">
    
    <button data-clipboard-text='<?php echo $made_link ?>' title="Copy URL" type="button" class="btn-coppier copycat"><i class="icon-website"></i></button>
  </div>
</div>
<?php } ?>
