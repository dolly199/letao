$(function(){
    $('#getCode').on('tap',function(){
        $.ajax({
            url: '/user/vCodeForUpdatePassword',
            type: 'get',
            success: function(res) {
                console.log(res.vCode);
            }
        });
    });
    $('#modifyBtn').on('tap',function(){
        var oldPass = $('[name="oldPass"]').val().trim();
        var newPass = $('[name="newPass"]').val().trim();
        var againPass = $('[name="againPass"]').val().trim();
        var vCode = $('[name="verifyCode"]').val().trim();
        if(!oldPass) {
            mui.toast('请输入原密码');
            return;
        }
        if(!newPass) {
            mui.toast('请输入新密码');
            return;
        }
        if(newPass !== againPass) {
            mui.toast('两次输入的密码不一致');
            return;
        }
        if(!vCode) {
            mui.toast('请输入验证码');
            return;
        }
        $.ajax({
            url: '/user/updatePassword',
            type: 'post',
            data: {
                oldPassword: oldPass,
                newPassword: newPass,
                vCode: vCode
            },
            success: function(res) {
                if(res.success) {
                    mui.toast('成功修改密码');
                    setTimeout(function(){
                        location.href = "login.html";
                    },1000);
                }
            }
        });
    });
});