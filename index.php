<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    $head_title = "The Open Source and Live First CDN Resources of Libraries, Plugins or Custom Codes | CDN OUT";
    $description = "CDN Out provides Live First CDN resources of Libraries for developers. Host custom files on CDN, Auto Updating and One Click Installation makes your website and workflow faster.";
    $base_url = "";
    include($base_url . 'meta/_head.php');
    ?>
</head>
<body class="no-scroll page-main">
<div id="page">
    <?php  include($base_url.'meta/_header.php'); ?>
    <section class="intro">
        <div class="img-bg" style="background-image: url(images/hero.jpg)"></div>
        <div class="container-large">
            <div class="intro-content">
                <div class="intro-content-holder">
                <h1>Open Source &<span> Live First CDN</span>Libraries, Plugins or Frameworks</h1>
                <p><strong>Live First</strong> CDN Resources of Libraries which saves your time. Automatic update files
                    to the latest versions on same cdn source. Auto Updating and One Click Installation makes your
                    website and workflow faster.</p>
                <div class="intro-features">
                    <div class="intro-feature">
                        <div class="ico-holder">
                            <i class="icon-live"></i>
                        </div>
                        <div class="text-box">
                            <strong class="title">Live First <br>CDN</strong>
                            <p>Live First CDN Auto Sync to the Latest&nbsp;Version.</p>
                        </div>
                    </div>

                    <div class="intro-feature">
                        <div class="ico-holder">
                            <i class="icon-cloud"></i>
                        </div>
                        <div class="text-box">
                            <strong class="title">Version Based <br>CDN </strong>
                            <p>Fastest way to copy any plugin cloud&nbsp;files.</p>
                        </div>
                    </div>
                    <div class="intro-feature">
                        <div class="ico-holder">
                            <i class="icon-one-finger-click"></i>
                        </div>
                        <div class="text-box">
                            <strong class="title">One click <br>Copy ALL Files</strong>
                            <p>Copy necessary plugin files with just one&nbsp;click.</p>
                        </div>
                    </div>
                </div>
                </div>
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
                        <li><a class="current" href="vendor/popular.php">Popular</a></li>
                        <li><a href="vendor/react.php">React</a></li>
                        <li><a href="vendor/jquery.php">jQuery</a></li>
                        <li><a href="vendor/angular.php">Angular</a></li>
                        <li><a href="vendor/vue.php">VUE</a></li>
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

            $("#ajax-content").empty().append("<div class='loading'><img src='images/loader.gif' width='30' alt='Loading' /></div>");
            $(".search-major li a").removeClass('current');
            $(this).addClass('current');

            $.ajax({ url: this.href, success: function(html) {
                    $("#ajax-content").empty().append(html);
                }

            });
            return false;
        });
        $("#ajax-content").empty().append("<div class='loading'><img src='images/loader.gif' width='30' alt='Loading' /></div>");
        $.ajax({ url: 'vendor/popular.php', success: function(html) {
                $("#ajax-content").empty().append(html);
            }
        });
    });
</script>
</body>
</html>