var keyword = getParamsByUrl(location.href, 'keyword');
var page = 1;
var html = "";
var priceSort = 1;
var that = null;
$(function () {
    mui.init({
        pullRefresh : {
          container:'#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
          up : {
            height:50,//可选.默认50.触发上拉加载拖动距离
            auto:true,//可选,默认false.自动上拉加载一次
            contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback :getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
          }
        }
      });
        $('#priceSort').on('tap', function() {
            
            priceSort = (priceSort == 1 ? 2 : 1);
            html = "";
            page = 1;
            mui('#refreshContainer').pullRefresh().refresh(true);
            getData();
        });
    })
    function getData() {
        if(!that) {
            that = this;
        }
        $.ajax({
            url: '/product/queryProduct',
            type: 'get',
            data: {
                page: page++,
                pageSize: 3,
                proName: keyword,
                price: priceSort
            },
            success: function (result) {
                if(result.data.length > 0) {
                    html += template('searchTpl', result);
                    $('#searchBox').html(html);
                    that.endPullupToRefresh(false);
                } else {
                    that.endPullupToRefresh(true);
                }
            }
        });
    }