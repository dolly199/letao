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
            localStorage.setItem('keywords',JSON.stringify([keyword]));
        }
        location.href = "search-list.html?key=" + keyword;
    });
    if(localStorage.getItem('keywords')) {
        var keywords = JSON.parse(localStorage.getItem('keywords'));
        var html = template('historySearchTpl', {data: keywords});
        $('#historySearch').html(html);
    }
    $('#clearHistory').on('tap',function(){
        localStorage.removeItem('keywords');
        $('#historySearch').html("");
    });
    $('#historySearch').on('tap','li',function(){
        var keyword = $(this).text();
        location.href = "search-list.html?key="+ keyword;
    });
});