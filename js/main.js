var proj3857 = ol.proj.get('EPSG:3857');
var proj3857Extent = proj3857.getExtent();

var resolutions = new Array(19);
var matrixIds = new Array(19);
var size = ol.extent.getWidth(proj3857Extent)/256;
for (var z = 0; z < 19; z = z+1){
	resolutions[z] = size / Math.pow(2,z);
	matrixIds[z] = z;
}
var tdtgrid = new ol.tilegrid.WMTS({
			origin:ol.extent.getTopLeft(proj3857Extent),
			resolutions: resolutions,
			matrixIds: matrixIds
		})


var layertdtvec = new ol.layer.Tile({
	source: new ol.source.WMTS({
		url:'http://t0.tianditu.com/vec_w/wmts',
		layer: 'vec',
		matrixSet: 'w',
		format: '',
		projection: proj3857,
		tileGrid: tdtgrid,
		style: 'default'
	}),
	opacity:1
});

var layertdtimg = new ol.layer.Tile({
	source: new ol.source.WMTS({
		url:'http://t0.tianditu.com/img_w/wmts',
		layer: 'img',
		matrixSet: 'w',
		format: '',
		projection: proj3857,
		tileGrid: tdtgrid,
		style: 'default'
	}),
	opacity:1
});

var layertdtcva = new ol.layer.Tile({
	source: new ol.source.WMTS({
		url:'http://t0.tianditu.com/cva_w/wmts',
		layer: 'cva',
		matrixSet: 'w',
		format: '',
		projection: proj3857,
		tileGrid: tdtgrid,
		style: 'default'
	}),
	opacity:1
});

var layertdtcia = new ol.layer.Tile({
	source: new ol.source.WMTS({
		url:'http://t0.tianditu.com/cia_w/wmts',
		layer: 'cia',
		matrixSet: 'w',
		format: '',
		projection: proj3857,
		tileGrid: tdtgrid,
		style: 'default'
	}),
	opacity:1
});

var layerosm = new ol.layer.Tile({
source: new ol.source.OSM()
});
var view = new ol.View({
		projection: proj3857,
		extent: proj3857Extent,
		center: [12949668,4864993],
		zoom:13
	})
var map = new ol.Map({
	layers:[
		// layerosm,
		// layertdtvec,
		// layertdtcva
	],
	target: 'map',
	view: view
});