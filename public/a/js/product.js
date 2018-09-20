$(function(){
    $.ajax({
        url: '/product/queryProductDetailList',
        type: 'get',
        data: {
            page: 1,
            pageSize: 10,
        },
        success: function(res) {
                var html = template('productTpl',res)
                $('#productBox').html(html);
        }
    });
    $('#downBtn').on('click',function(){

    });
    $.ajax({
        url: '/category/querySecondCategoryPaging',
        type: 'get',
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(res) {
            var html = template('brandTpl', res);
            $('#brandBox').html(html);
        }
    });
    var imageArray = [];
    $('#fileUpload').fileupload({
	    dataType: 'json',
	    done: function (e, data) {
            imageArray.push(data.result);
	    }
	});
    $('#addProduct').on('click',function(res){
       var proName = $.trim($('#proName').val());
       var oldPrice = $.trim($('#oldPrice').val());
       var price = $.trim($('#price').val());
       var proDesc = $.trim($('#proDesc').val());
       var size = $.trim($('#size').val());
       var statu = $.trim($('#statu').val());
       var num = $.trim($('#num').val());
       var brandId = $.trim($('#brandBox').val());
        $.ajax({
            url: '/product/addProduct',
            type: 'post',
            data: {
                proName: proName,
                oldPrice: oldPrice,
                price: price,
                proDesc: proDesc,
                size: size,
                statu: 1,
                num: num,
                brandId: brandId,
                pic: imageArray
            },
            success: function(res) {
                if(res.success) {
                    location.reload();
                } else{
                    alert('res.message');
                }
            }
        });

    });
});