$(function(){
    $('#city').on('tap',function(){
        var picker = new mui.PopPicker({layer: 3}); 
        picker.setData(cityData); 
        picker.show(function(selectItems){
            $('#city').val(selectItems[0].text + selectItems[1].text + selectItems[2].text);
        }); 
    });
    $('#addAddress').on('tap',function() {
        var address = $('[name="address"]').val().trim();
        var addressDetail = $('[name="addressDetail"]').val().trim();
        var recipients = $('[name="recipients"]').val().trim();
        var postcode = $('[name="postcode"]').val().trim();
        $.ajax({
            url: '/address/addAddress',
            type: 'post',
            data: {
                address: address,
                addressDetail: addressDetail,
                recipients: recipients,
                postcode: postcode
            },
            success: function(res) {
                mui.toast('添加地址成功');
                setTimeout(function(){
                    location.href = "address.html";
                },1000);
            }
        });
    });
});