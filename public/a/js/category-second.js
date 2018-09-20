$(function(){
    var page = 1;
    var pageSize = 10;
    var totalPage = 0;
    getSecondCatagory();
    $('#prevBtn').on('click',function(){
        if(page <= 1) {
            return alert('已经是第一页');
        }
        page--;
        getSecondCatagory();
    });
    $('#nextBtn').on('click',function(){
        if(page >= totalPage) {
            return alert('已经是最后一页');
        }
        page++;
        getSecondCatagory();
    });
    function getSecondCatagory() {
        $.ajax({
            url: '/category/querySecondCategoryPaging',
            type: 'get',
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function(res) {
                totalPage = Math.ceil(res.total/pageSize);
                var html = template('categorySecondTpl',res);
                $('#categorySecondBox').html(html);
            }
        });
    }
    $('#fileupload').fileupload({
        dataType: 'json',
        done: function(e, data) {
            console.log(data);
            brandLogo = data._response.result.picAddr;
            var imgUrl = data._response.result.picAddr;
            $('#showBrand').attr("src",imgUrl);
        }
    });
    $.ajax({
        url: '/category/queryTopCategoryPaging',
        type: 'get',
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(res) {
            var html = template('categoryTpl',res);
            $('#categoryId').html(html)
        }
    });
    $('#save').on('click',function(){
        var brandName = $.trim($('#brandName').val());
        var categoryId =$.trim($('#categoryId').val());
        if(!categoryId) {
           return alert('请输入品牌所属分类');
        }
        if(!brandName) {
            return alert('请输入品牌名称');
        }
        if(!brandLogo) {
            return alert('请上传图片');
        }
        $.ajax({
            url: '/category/addSecondCategory',
            type: 'post',
            data: {
                brandName: brandName,
                categoryId: categoryId,
                brandLogo: brandLogo,
                hot: 0
            },
            success: function(res) {
                if(res.success) {
                    location.reload();
                } else {
                    alert('品牌添加失败');
                }
                
            }
        });
    });
})