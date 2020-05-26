

// 侧栏导航 visited 效果 (有问题，因为导航栏是全局刷新导致样式无法实现)
$(function(){ // 给导航栏选项分配标记
    var nav_length = $('#menu-inner a').length
    for(var i=0; i<nav_length; i++) {
        var a_id = '#menu-inner a:eq(' + i + ')'
        $(a_id).val(i)
    }
});
$(function() {

    // 清除样式
    $('#menu-a').removeClass()

    // 获取状态记录
    var current_num = sessionStorage.getItem("current_num"); 
    var a_id = '#menu-inner a:eq(' + current_num + ')'
    // 初始化样式
    $(a_id).addClass('toc_active') 

    $('#menu-inner a').click(function(event){
        // 当前点击的导航栏选项
        var current_num = $(this).val()
        // 给当前导航栏选项添加visited样式
        $(this).addClass('toc_active')
        // 保存状态
        sessionStorage.setItem("current_num", current_num)
    });

    $('#menu-title').click(function(){
        // 清除样式
        $('#menu-a').removeClass()
        // 激活第1个选项
        var a_id = '#menu-inner a:eq(0)'
        // 给当前导航栏选项添加visited样式
        $(a_id).addClass('toc_active')
        // 保存状态
        sessionStorage.setItem("current_num", 0)
    })
})


// 文章目录 visited 效果
$(function() {
    $('.toc-link').click(function(event){
        $('.toc-link > .toc-text').removeClass('toc_active')
        $(this).children().addClass('toc_active')
    });
})

// 分页按钮跳转
$(function() {

    var c_page_cuurent = sessionStorage.getItem("page_current"); 
    $('.input-ctl .in').val(c_page_cuurent)

    inclick = function (max_page_num) {
        var page_num = $('.input-ctl .in').val()
        var num = parseInt(page_num)
        if (num > 1 && num <= max_page_num && !isNaN(num)) {
            window.location.href = "/page/" + num
        } else if (num == 1) {
            window.location.href = "/"
        } else if (num > max_page_num ) {
            window.location.href = "/page/" + max_page_num
        }

        // 保存状态
        sessionStorage.setItem("page_current", num)
    }

    // 清除状态
    $('#paginator .page-number, #paginator .extend, #menu-a').click(function() {
        sessionStorage.removeItem("page_current")
    })

});


// 给文章下的标题添加标记提升阅读
// $(function(){
//     $('#post h2').prepend("<font color='#FF5151'>##&thinsp;</font>")
//     $('#post h3').prepend("<font color='#FF5151'>###&thinsp;</font>")
//     $('#post h4').prepend("<font color='#FF5151'>####&thinsp;</font>")
//     $('#post h5').prepend("<font color='#FF5151'>#####&thinsp;</font>")
// });


