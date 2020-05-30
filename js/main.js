
// 侧栏导航 visited 效果 ----------------------------
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

    if (current_num != null) {
        console.info("into")
        var a_id = '#menu-inner a:eq(' + current_num + ')'
        // 初始化样式
        $(a_id).addClass('nav_active')
    } else {
        // 初始化样式
        $('#menu-inner a:eq(0)').addClass('nav_active')
    }

    $('#menu-inner a').click(function(event){
        // 当前点击的导航栏选项
        var current_num = $(this).val()
        // 给当前导航栏选项添加visited样式
        $(this).addClass('nav_active')
        // 保存状态
        sessionStorage.setItem("current_num", current_num)
    });

    $('#menu-title').click(function(){
        // 清除样式
        $('#menu-a').removeClass()
        // 激活第1个选项
        var a_id = '#menu-inner a:eq(0)'
        // 给当前导航栏选项添加visited样式
        $(a_id).addClass('nav_active')
        // 保存状态
        sessionStorage.setItem("current_num", 0)
    })
})





// 文章目录 visited 效果 --------------------------
$(function() {

    $('.toc-link').click(function(event){
        $('.toc-link').removeClass('toc_active')
        $(this).addClass('toc_active')
    });

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

    inkeyup = function (max_page_num) {
        console.info(max_page_num)
        inclick(max_page_num)
    }


    // 清除状态
    $('#paginator .page-number, #paginator .extend, #menu-a').click(function() {
        sessionStorage.removeItem("page_current")
    })

});


// 滑动时隐藏和显示小屏导航栏
$(function(){

    $("#min-menu-outer").hide()

    // 记录高度
    var temp_height = 0

    // 页面滑动事件
    $(window).scroll(function(){
        
        // 页面高度
        //var page_height = $(document).height()
        
        // 页面宽度
        var page_width = $(document).width()

        // 显示和隐藏小屏幕导航栏
        if( page_width < 768 ){

            // 当前高度
            var current_height = $(document).scrollTop();
            
            // 往下滑显示
            if ( current_height > temp_height ){ 
                $("#min-menu-outer").show()
            // 往上滑隐藏
            } else { 
                $("#min-menu-outer").hide()
            }

            // 记录高度
            temp_height = current_height
        }
    });

});