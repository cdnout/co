<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    $head_title = "List of 4000+ 3rd-Party CDN resources for Javascript  Libraries, Plugins and Frameworks | One Click Installation | CDN OUT";
    $description = "List of 4000+ 3rd-Party CDN resources for Javascript  Libraries, Plugins and Frameworks. CDNOUT helps developers to Copy or Download necessary plugin files with just one click.";
    $base_url = "../";
    include($base_url . 'meta/_head.php');
    ?>
</head>
<body class="no-scroll page-browse page-versionbased">
<div id="page">
    <?php  include($base_url.'meta/_header.php'); ?>
    <section class="intro">
        <div class="img-bg" style="background-image: url(<?php echo $base_url; ?>images/hero.jpg)"></div>
        <div class="container-large">
            <div class="side-text">
                <p>List of 4000+ 3rd-Party CDN resources for Javascript  Libraries, Plugins and Frameworks. We helps developers to Copy or Download necessary plugin files with just one click.</p>
                <ul>
                    <li>Reliable, 99.99% uptime & Version Based CDN URLs.</li>
                    <li>One Click Copy all necessary Files.</li>
                    <li>Download Latest Source ZIP File.</li>
                    <li>Git Files or NPM Packages all combined at one place.</li>
                </ul>
            </div>
            <div class="cdn-search">
                <div class="cdn-search-wrap">
                    <div class="search-bar">
                        <input id="cdn-search" type="search" class="form-control">
                        <label for="cdn-search">Search in 4000+ libraries...</label>
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