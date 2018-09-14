$(function(){
    $('#searchBtn').on('click',function(){
        var keyword = $('#keyword').val();
        if(!keyword.trim()) {
            alert('请输入关键字');
            return;
        }
        var keywords = [];
        if(localStorage.getItem('keywords')) {
             keywords =JSON.parse(localStorage.getItem('keywords'));
             keywords.unshift(keyword);
             localStorage.setItem('keywords',JSON.stringify(keywords));
        } else {
            localStorage.setItem('keywords',keyword)
        }
        location.href = "search-list.html?key=" + keyword;
    });
    if(localStorage.getItem('keywords')) {
        var keywords = JSON.parse(localStorage.getItem('keywords'));
        var html = template('historySearchTpl', {data: keywords});
        $('#historySearch').html(html);
    }
    
});