$(function(){
	var address = null;
	$.ajax({
		url: '/address/queryAddress',
		type: 'get',
		success: function(res) {
			address = res;
			var html = template('addressTpl',{data: res});
			$('#address-box').html(html);  
		}
	});
	$('#address-box').on('tap','.delete-btn',function(){
		var id = $(this).attr('data-id');
		var li = this.parentNode.parentNode;
		mui.confirm('确认要删除吗?',function(message){
			if(message.index) {
				$.ajax({
					url: '/address/deleteAddress',
					type: 'post',
					data: {
						id: id
					},
					success: function(res) {
						if(res.success) {
							location.reload();
						}
					}
				});
			} else {
				mui.swipeoutClose(li);
			}
		})
	});
	$('#address-box').on('tap','.edit-btn',function(){
		var id = $(this).attr('data-id');
		for(var i = 0; i < address.length; i++) {
			if(address[i].id == id) {
				localStorage.setItem('editAddress',JSON.stringify(address[i]));
				break;
			}
		}
		location.href = "editAddress.html";
	});
});