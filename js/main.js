var resolutions = new Array(19);
var matrixIds = new Array(19);
for (var z = 0; z < 19; z = z+1){
	resolutions[z] = (360/256) / Math.pow(2,z);
	matrixIds[z] = z;
}
var tdtgrid = new ol.tilegrid.WMTS({
			extent: [-180,-90,180,90],
			resolutions: resolutions,
			matrixIds: matrixIds
		})

proj4.defs("EPSG:4490","+proj=longlat +ellps=GRS80 +no_defs"); 
var proj4490 = ol.proj.get('EPSG:4490');
proj4490.setExtent([-180,-90,180,90]);
proj4490Extent = proj4490.getExtent();

var layertdt0 = new ol.layer.Tile({
	source: new ol.source.WMTS({
		url:'http://t0.tianditu.com/vec_c/wmts',
		layer: 'vec',
		matrixSet: 'c',
		format: '',
		projection: proj4490,
		tileGrid: tdtgrid,
		style: 'default'
	}),
	opacity:0.7
});

var layerosm = new ol.layer.Tile({
source: new ol.source.OSM()
});

var map = new ol.Map({
	layers:[
		// layerosm,
		layertdt0
	],
	target: 'map',
	view: new ol.View({
		projection: proj4490,
		// extent: proj4490Extent,
		center: [116.33,40],
		zoom:13
	})
});