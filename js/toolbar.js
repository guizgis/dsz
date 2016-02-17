var toolcontainer;
$(document).ready(function(){
     createMeasurement();
     
})
function createMeasurement(){
     var measurement = $("<div id='measurement' title='测量工具'class='toolpanel'></div>");
     var measurecontent = $("<div class='content'></div>");
     var measurelength = $("<span id='measurelength' class='measuretool'></span>");
     var measurearea = $("<span id='measurearea'class='measuretool'></span>");
     var measurepos = $("<span id='measurepos'class='measuretool'></span>");
     var measuresep = $("<span id='measuresep'>|</span>");
     var measureunit = $("<div id='measureunit'></div>");
     var measureresult = $("<div class='result'></div>");

     var unitarea = $("<select class='measureunit' id='unitarea'><option value='sk'>平方千米</option><option value='ha'>公顷</option><option value='mu'>亩</option><option value='sm'>平方米</option></select>");
     var unitlength = $("<select class='measureunit' id='unitlength'><option value='km'>千米</option><option value='li'>里</option><option value='mi'>米</option></select>");
     var unitpos = $("<select class='measureunit' id='unitpos'><option value='de'>度</option><option value='dms'>度分秒</option></select>");
     
     measureunit.append(unitarea);
     measureunit.append(unitlength);
     measureunit.append(unitpos);

     measurecontent.append(measurearea);
     measurecontent.append(measurelength);
     measurecontent.append(measurepos);

     measurecontent.append(measuresep);
     measurement.append(measurecontent);
     measurement.append(measureunit);
     measurement.append(measureresult);
     // $("body").append(measurement);
     toolcontainer = $("<div id='toolcontainer'></div>");
     $("body").append(toolcontainer);
     toolcontainer.append(measurement);
     measurement.dialog({
          appendTo:toolcontainer,
          position:{my:"left top",at:"right top",of:toolcontainer}
     });
     measurement.on("dialogclose",function(tool){
          measurement.dialog("open");
          toolcontainer.css("display","none");
     });
     measurearea.on("click",function(){
          measureArea();
          unitarea.css("display","block");
          unitlength.css("display","none");
          unitpos.css("display","none");
     });
     measurelength.on("click",function(){
          measureLength();
          unitlength.css("display","block");
          unitarea.css("display","none");
          unitpos.css("display","none");
     });
     measurepos.on("click",function(){
          measurePos();
          unitpos.css("display","block");
          unitarea.css("display","none");
          unitlength.css("display","none");
     });     
}

function measureArea () {
     
}

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
}


//测量
$("#measure").on("click",toggleMeasure);
function toggleMeasure () {
     var toolcontainer =$("#toolcontainer");
     if (toolcontainer.css("display")=="none"){
          toolcontainer.css("display","block");
     }
     else{
          toolcontainer.css("display","none");
     }
}

$("#measurearea").on("click",measureArea);
function measureArea () {
     // body...
}

//地图切换
$("#basemaptoggle").click(basemapToggle);
function basemapToggle(evt){
     if (evt.target.id == "satellite"){
          $("#satellite").removeClass("active");
          $("#normal").addClass("active");
          map.removeLayer(layertdtvec);
          map.removeLayer(layertdtcva);
          map.addLayer(layertdtimg);
          map.addLayer(layertdtcia);
     }
     else if (evt.target.id == "normal"){
          $("#normal").removeClass("active");
          $("#satellite").addClass("active");
          map.removeLayer(layertdtimg);
          map.removeLayer(layertdtcia);
          map.addLayer(layertdtvec);
          map.addLayer(layertdtcva);
     }
     
}