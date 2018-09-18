$(function(){
    var data = JSON.parse(localStorage.getItem('editAddress'));
    var isEdit;
    $('.mui-content').on('tap','#city',function(){
        console.log(1)
        var picker = new mui.PopPicker({layer: 3}); 
        picker.setData(cityData); 
        picker.show(function(selectItems){
            $('#city').val(selectItems[0].text + selectItems[1].text + selectItems[2].text);
        }); 
    });
    $.ajax({
        url: '/address/updateAddress',
        type: 'post',
        data: {
            id: data.id,
            address: data.address,
            addressDetail: data.addressDetail,
            recipients: data.recipients,
            postcode: data.postCode
        },
        success: function(res) {
           isEdit = res.success;
            var html = template('editAddressTpl', data);
            $('.mui-content').html(html);
        }
    });
    $('.mui-content').on('tap','#editAddress',function(){
        if(isEdit) {
            mui.toast('修改地址成功');
            setTimeout(function(){
                location.href = "address.html";
            },1000);
        }
    });

});