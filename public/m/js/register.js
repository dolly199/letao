$(function () {
    $('#regBtn').on('tap', function () {
        var username = $('[name="username"]').val().trim();
        var mobile = $('[name="mobile"]').val().trim();
        var password = $('[name="password"]').val().trim();
        var vCode = $('[name="verifyCode"]').val().trim();
        var againPass = $('[name="againPass"]').val().trim();
        if (!username) {
            mui.toast('请输入用户名');
            return;
        }
        if(!mobile) {
            mui.toast('请输入合法的手机号');
            return;
        }
        if(!password) {
            mui.toast('请输入密码');
            return;
        }
        if(password !== againPass) {
            mui.toast('两次输入的密码不一致');
            return;
        }
        if(!vCode) {
            mui.toast('请输入验证码');
            return;
        }
        $.ajax({
            url: '/user/register',
            type: 'post',
            data: {
                username: username,
                password: password,
                mobile: mobile,
                vCode: vCode
            },
            success: function(res) {
                if(res.success) {
                    mui.toast('注册成功');
                    setTimeout(function(){
                        location.href = "login.html";
                    },1000);
                } else {
                    mui.toast('注册失败');
                }
            }
        });
    });
    $('#getCode').on('tap', function() {
        $.ajax({
            url: '/user/vCode',
            type: 'get',
            success: function(res) {
                console.log(res.vCode);
            }
        });
    });
});