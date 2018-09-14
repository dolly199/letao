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
}