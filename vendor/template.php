<?php $url = $_SERVER['REQUEST_URI'];
$parts = parse_url($url);
$base_url = "";
if(isset($parts['query'])) {
    parse_str($parts['query'], $query);

    $browse = $query['b'];
    if($browse == 'true') {
        $base_url = "../";
    } else {
        $base_url = "";
    }
}

?>
<article class="cdn <?php echo $cdn['type'] ?> cdn-<?php echo $cdn['url'] ?>">
    <a href="<?php echo $base_url; ?>cdn/<?php echo $cdn['url'] ?>"><?php echo $cdn['name'] ?> <span
                class="version"> <?php echo $cdn['version'] ?></span></a>
    <div class="btn-holder">
        <a title="Download <?php echo $cdn['name'] ?> Complete Zip" href="<?php echo $base_url; ?>zip/<?php echo $cdn['url'] ?>.zip"
           class="btnSmall  btnBrowsePage"><i class="icon-download"></i></a>
        <a title="View <?php echo $cdn['name'] ?> <?php echo $cdn['version'] ?> Version Base CDN"
           href="<?php echo $base_url; ?>cdn/<?php echo $cdn['url'] ?>@<?php echo $cdn['version'] ?>" class="btnSmall btnBrowsePage"><i
                    class="icon-layers"></i></a>
        <button title='Copy Version Based <?php echo $cdn['name'] ?> <?php echo $cdn['version'] ?> CDN'
                data-clipboard-text='<?php echo $cdn['key_js_normal'] . $cdn['key_css_normal']; ?>'
                type="button" class="copy btnSmall copycat btncopy-normal">
            <i class="icon-cloud"></i>
        </button>

        <button title='Copy Live First <?php echo $cdn['name'] ?> <?php echo $cdn['version'] ?> CDN'
                data-clipboard-text='<?php echo $cdn['key_js_live'] . $cdn['key_css_live']; ?>'
                type="button" class="copy btnSmall copycat btncopy-live">
            <i class="icon-live"></i>
        </button>
    </div>
</article>
<script>
    $(function () {
        $('.btncopy-normal').click(function () {
            $("html").addClass("copied");
            setTimeout(function () {
                $('html').removeClass('copied');
            }, 2000);
        });
        $('.btncopy-live').click(function () {
            $("html").addClass("copied copiedLive");
            setTimeout(function () {
                $('html').removeClass('copied');
            }, 2000);
        });
        $('.btnlive-okay').click(function () {
            $("html").removeClass("copiedLive");
        });
    });
</script>