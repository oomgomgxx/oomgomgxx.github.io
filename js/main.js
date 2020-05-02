


// 侧栏导航 visited 效果 (有问题，因为导航栏是全局刷新导致样式无法实现)
// $(function() {
//     $('#menu-inner').click(function(event){
//         $('#menu-inner > #menu-a').removeClass('toc_active')
//         $(this).addClass('toc_active')
//     });
// })


// 文章目录 visited 效果
$(function() {
    $('.toc-link').click(function(event){
        $('.toc-link > .toc-text').removeClass('toc_active')
        $(this).children().addClass('toc_active')
    });
})