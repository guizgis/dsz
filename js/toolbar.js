var toolcontainer;
$(document).ready(function(){
     createMeasurement();
     
});
//显示工具的提示名称
$("#toolbar .tool").mouseover(function(){
	tooltip.innertext = this.title;
	this.style.cursor = "pointer";
	$("#tooltip").show();
});

//默认地图范围
$("#home").on("click",zoomHome);
function zoomHome () {
     view.setCenter([12949668,4864993]);
     view.setZoom("13");
};

//打印地图
$("#print").on("click",printMap);
function printMap(){
     
} 

//测量
$("#measure").on("click",toggleMeasure);
function toggleMeasure () {
     var toolcontainer =$("#toolcontainer");
     if (toolcontainer.css("display")=="none"){
          toolcontainer.css("display","block");
          map.addLayer(measurevector);
     }
     else{
          toolcontainer.css("display","none");
          stopMeasure();
     }
}

//地图切换
$("#basemaptoggle").click(basemapToggle);
function basemapToggle(evt){
     if (evt.target.id == "satellite"){
          $("#satellite").removeClass("active");
          $("#normal").addClass("active");
          map.removeLayer(layertdtvec);
          map.removeLayer(layertdtcva);
          map.removeLayer(measurevector);
          map.addLayer(layertdtimg);
          map.addLayer(layertdtcia);
          map.addLayer(measurevector);
     }
     else if (evt.target.id == "normal"){
          $("#normal").removeClass("active");
          $("#satellite").addClass("active");
          map.removeLayer(layertdtimg);
          map.removeLayer(layertdtcia);
          map.removeLayer(measurevector);
          map.addLayer(layertdtvec);
          map.addLayer(layertdtcva);
          map.addLayer(measurevector);
     }     
}