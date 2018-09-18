$(function(){
    var id = getParamsByUrl(location.href,'id');
    var size = null;
    var maxNum;
    var num;
    $.ajax({
        url: '/product/queryProductDetail',
        type: 'get',
        data: {
            id: id
        },
        success: function(res) {
            var html = template('productTpl',res);
            $('#product-box').html(html);
            
            maxNum = res.num;
            var gallery = mui('.mui-slider');
                gallery.slider();
        }
    });
    $('#product-box').on('tap','#size',function(){
        $(this).addClass("active").siblings().removeClass("active");
        size = $(this).text();
    });
    $('#product-box').on('tap','#reduce',function(){
        num = $('#inp').val();
        num--;
        if(num < 1) {
            num = 1;
        }
        $('#inp').val(num)
        
    });
    $('#product-box').on('tap','#increase',function(){
        num = $('#inp').val();
        num++;
        if(num > maxNum) {
            num = maxNum;
        }
        $('#inp').val(num)
        
    });
    $('#addCart').on('tap',function(){
        if(!size) {
            mui.toast('请选择尺码!');
            return;
        }
        $.ajax({
            url: '/cart/addCart',
            type: 'post',
            data: {
                productId: id,
                num: num,
                size: size
            },
            success: function(res) {
                if(res.success) {
                    location.href = "cart.html";
                }
            }
        });
    });
});