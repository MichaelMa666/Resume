/****************************************************************************************************
*
* Google map
*
*****************************************************************************************************/ 

/*function myMap() {
    var mapOptions = {
		scrollwheel: false,
        center: new google.maps.LatLng(39.14, 116.9),
  	    zoom: 10,
        mapTypeId: google.maps.MapTypeId.TERRAIN
     }
    
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	var icon = { 
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale:8,
        fillColor: '#00d4d4',
        strokeColor :'#00d4d4',
        fillOpacity: 1,
        strokeWeight: 1
    };
  
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(39.025,117.3),
        map: map,
        draggable: true,
        icon: icon
    });
} */
/****************************************************************************************************
*
* Baidu map
*
*****************************************************************************************************/ 
// 百度地图API功能
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(116.90, 39.19), 11);  // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.setCurrentCity("天津");          // 设置地图显示的城市 此项是必须设置的
// map.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放
var point = new BMap.Point(117.28,39.08);

var vectorMarker = new BMap.Marker(new BMap.Point(point.lng,point.lat), {
  // 指定Marker的icon属性为Symbol
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
        scale: 2,//图标缩放大小
        fillColor: "#00d4d4",//填充颜色
        strokeColor:"#00d4d4",
        fillOpacity: 1//填充透明度
    })
});
map.addOverlay(vectorMarker);
map.setViewport({center:new BMap.Point(116.90, 39.19),zoom:11})