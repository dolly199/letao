function getParamsByUrl(url,name) {
    var params = url.substr(url.indexOf('?') + 1);
    var param = params.split('&');
    for (var i= 0; i < param.length; i++) {
        var current = param[i].split('=');
        if(current[0]==name) {
            return current[1];
        }
    }
    return null;
};
$(function(){
    mui('body').on('tap','a',function(){
        mui.openWindow({url: this.href});
    });
})