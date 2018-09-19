$(function(){
    $.ajax({
        url: '/user/queryUser',
        type: 'get',
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(res) {
            var html = template('userTpl',res);
            $('#userInfo').html(html);
        }
    });
    $('body').on('click','#deleteBtn', function(){
        var id = $(this).attr('data-id');
        var isDelete = parseInt($(this).attr('data-isDelete'))
        $.ajax({
            url: '/user/updateUser',
            type: 'post',
            data: {
                id: id,
                isDelete: isDelete ? 0 : 1
            },
            success: function(res) {
                if(res.success) {
                    location.reload();
                } else {
                    if(result.error) {
                        alert(result.message);
                    }
                }
            }
        });
    });
});