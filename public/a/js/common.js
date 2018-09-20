$.ajax({
	url: '/employee/checkRootLogin',
	type: 'get',
	success: function(res) {
		if(res.error && res.error == 400) {
			location.href = 'login.html';
		}
	}
});

$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

	$('#logOut').on('click',function(){
		if(confirm('确认要退出吗?')) {
			$.ajax({
				url: '/employee/employeeLogout',
				type: 'get',
				success: function(res) {
					if(res.success) {
						location.href = "login.html";
					} else {
						alert(res.message);
					}
				}
			});
		}
	});
});