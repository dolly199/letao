$(function(){
    $('#loginBtn').on('tap',function(){
        var username = $('[name="username"]').val().trim();
        var password = $('[name="password"]').val().trim();
        if(!username) {
            mui.toast('请输入用户名');
            return;
        }
        if(!password) {
            mui.toast('请输入密码');
        }
        $.ajax({
            url: '/user/login',
            type: "post",
            data: {
                username: username,
                password: password
            },
            beforeSend: function() {
                $('#loginBtn').html('正在登录...');
            },
            success: function(res) {
                if(res.success){
                    mui.toast('登录成功');
                    $('#loginBtn').html('登录');
                    setTimeout(function(){
                        location.href = "user.html";
                    },1000);
                } else {
                    mui.toast('登录失败,请确认账号密码是否正确!');
                    $('#loginBtn').html('登录');
                }
            } 
        });
    });
});