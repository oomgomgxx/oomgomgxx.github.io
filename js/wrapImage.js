
$(document).ready(function() {
    wrapImageWithFancyBox();
});

// 包装img标签
function wrapImageWithFancyBox() {
    $('img')
    // .not('.sidebar-image img') // 排除
    .each(function() {

        var $image = $(this);
        var imageCaption = $image.attr('alt');
        var $imageWrapLink = $image.parent('a');

        if ($imageWrapLink.length < 1) {
            var src = this.getAttribute('src');
            var idx = src.lastIndexOf('?');
            if (idx != -1) {
                src = src.substring(0, idx);
            }
            $imageWrapLink = $image.wrap('<a href="' + src + '"></a>').parent('a');
        }
        $imageWrapLink.attr('data-fancybox', 'images');
        if (imageCaption) {
            $imageWrapLink.attr('data-caption', imageCaption);
        }
    });

    // fancybox配置选项
    $('[data-fancybox="images"]').fancybox({
      buttons : [ 
        'slideShow',
		'thumbs',
        'zoom',
        'fullScreen',
        'close'
      ],
      thumbs : {
        autoStart : false
      },
      // 图片缩放大小
      afterLoad : function( instance, slide ) {
            if ( slide.type === 'image' ) {
                // 处理过大的图片
                if ( slide.height > 3000 ) {
                    slide.width  = slide.width  * 0.4;
                    slide.height = slide.height * 0.4;
                }
                else if ( slide.height > 2500 ) {
                    slide.width  = slide.width  * 0.5;
                    slide.height = slide.height * 0.5;
                }
            }
        }
    });
}