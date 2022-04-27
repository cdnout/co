<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    $head_title = "Browse 3500+ Live First CDN Resources for Libraries, Plugins and Frameworks. | Shortest & Folder Based Paths | CDN OUT";
    $description = "Browse 3500+ Live First CDN Resources for Libraries, Plugins and Frameworks. Live First CDN resources have shortest directory based paths and automatically update to the latest version. ";
    $base_url = "../";
    include($base_url . 'meta/_head.php');
    ?>
</head>
<body class="no-scroll page-browse page-livefirst">
<div id="page">
    <?php  include($base_url.'meta/_header.php'); ?>
    <section class="intro">
        <div class="img-bg" style="background-image: url(<?php echo $base_url; ?>images/hero.jpg)"></div>
        <div class="container-large">
            <div class="side-text">
                <p>Browse 3500+ Live First CDN Resources for Libraries, Plugins and Frameworks. Live First CDN resources have shortest directory based paths and automatically update to the latest version.</p>
                <ul>
                    <li>Shortest & Folder Base Paths e.g. <a href="https://cdnout.com/jquery" target="_blank">https://cdnout.com/jquery</a></li>
                    <li>Auto Update on Same Path</li>
                    <li>Recommended for library usage.</li>
                </ul>
                <p class="text-danger">We do not recommend live-first version for production use.</p>
            </div>
            <div class="cdn-search">
                <div class="cdn-search-wrap">
                    <div class="search-bar">
                        <input id="cdn-search" type="search" class="form-control">
                        <label for="cdn-search">Search in 3500+ libraries...</label>
                        <i class="icon-search"></i>
                    </div>
                    <ul class="search-major">
                        <li>Filter:</li>
                        <li><a class="current" href="<?php echo $base_url; ?>vendor/popular.php?b=true">Popular</a></li>
                        <li><a href="<?php echo $base_url; ?>vendor/react.php?b=true">React</a></li>
                        <li><a href="<?php echo $base_url; ?>vendor/jquery.php?b=true">jQuery</a></li>
                        <li><a href="<?php echo $base_url; ?>vendor/angular.php?b=true">Angular</a></li>
                        <li><a href="<?php echo $base_url; ?>vendor/vue.php?b=true">VUE</a></li>
                    </ul>
                    <div class="cdn-smartlist">
                        <div class="cdn-smartlist-holder">
                            <div id="ajax-content">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<?php include($base_url . 'meta/_footer.php'); ?>
<script>
    $(document).ready(function() {
        jQuery("#cdn-search").each(function() {
            jQuery(this).val('');
        });
        $(".search-major li a").click(function() {

            $("#ajax-content").empty().append("<div class='loading'><img src='<?php echo $base_url; ?>images/loader.gif' width='30' alt='Loading' /></div>");
            $(".search-major li a").removeClass('current');
            $(this).addClass('current');

            $.ajax({ url: this.href, success: function(html) {
                    $("#ajax-content").empty().append(html);
                }

            });
            return false;
        });
        $("#ajax-content").empty().append("<div class='loading'><img src='<?php echo $base_url; ?>images/loader.gif' width='30' alt='Loading' /></div>");
        $.ajax({ url: '<?php echo $base_url; ?>vendor/popular.php?b=true', success: function(html) {
                $("#ajax-content").empty().append(html);
            }
        });
    });
</script>
</body>
</html>