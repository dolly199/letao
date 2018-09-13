$(function(){
    $.ajax ({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(result) {
            var html = template('cateLeftTpl',{data:result.rows});
            $('.cate-links').html(html);
            if(result.rows.length > 0) {
                var id = result.rows[0].id;
                $.ajax({
                    type: 'get',
                    url: '/category/querySecondCategory',
                    data: {
                        id: id
                    },
                    success: function(result) {
                        var html = template('cateRightTpl',{data: result.rows});
                        $('.waper').html(html);
                        $('.cate-links').find('a:first-child').addClass('active');
                    }
                })
            }
        }
    })

    $('body').on('tap','.getSecond',function(){
        var id = $(this).attr('data-id');
        $(this).addClass('active').siblings().removeClass('active');
        $.ajax({
            url: '/category/querySecondCategory',
            type: 'get',
            data: {
                id:id
            },
            success: function(result) {
                var html = template('cateRightTpl',{data: result.rows});
                $('.waper').html(html);
            }
        })
    })
});
