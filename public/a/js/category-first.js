$(function(){
    var page = 1;
    var pageSize = 10;
    var totalPage = 0;
    getData();
    $('#prev').on('click',function(){
        if(page <= 1) {
            return alert('已经是第一页')
        }
        page--;
        getData();
    });
    $('#next').on('click',function(){
        if(page >= totalPage) {
            return alert('已经是最后一页');
        }
        page++;
        getData();
    });
    function getData() {
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            type: 'get',
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function(res) {
                totalPage = Math.ceil(res.total/pageSize);
                var html = template('categoryFirstTpl',res);
                $('#categoryFirstBox').html(html);
            }
        });
    }
});