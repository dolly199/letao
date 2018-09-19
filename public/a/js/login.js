$(function(){
    $.ajax({
        url: '/employee/checkRootLogin',
        type: 'get',
        success: function(res) {
            if(res.success) {
                location.href = "user.html";
            }          
        }
    })
    $('#loginBtn').on('click',function(){
        var username = $.trim($('#username').val());
        var password = $.trim($('#password').val());
        if(!username) {
            alert('请输入用户名');
            return;
        }
        if(!password) {
            alert('请输入密码');
            return;
        }
        $.ajax({
            url: '/employee/employeeLogin',
            type: 'post',
            data: {
                username: username,
                password: password,
            },
            success: function(res){
                if(res.success) {
                    location.href = "user.html"
                } else {
                    alert(res.message);
                }
            }
        });
    });
});