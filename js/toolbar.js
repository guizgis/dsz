$("#toolbar .tool").mouseover(function(){
	tooltip.innertext = this.title;
	this.style.cursor = "pointer";
	$("#tooltip").show();
});