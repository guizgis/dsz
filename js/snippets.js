var projection = new ol.proj.Projection({
	  			code: 'EPSG:4490',
	  			extent: [-180,-90,180,90],
	  			units: 'm'
	  		});
	  		ol.proj.addProjection(projection);


	  		var mapProjection = new ol.proj.Projection({
	  			code: 'EPSG:4490',
	  			extent: [-180,-90,180,90],
	  			units: 'degrees'
	  		});
	  		ol.proj.addProjection(mapProjection);

	  		var projection = ol.proj.get('EPSG:3857');
	  		var projectionExtent = mapProjection.getExtent();
	  		var size = ol.extent.getWidth(projectionExtent)/256;
	  		var resolutions = new Array(19);
	  		var matrixIds = new Array(19);
	  		for (var z = 0; z < 19; z = z+1){
	  			resolutions[z] = size / Math.pow(2,z+1);
	  			matrixIds[z] = z;
	  		}
	  		var map = new ol.Map({
	  		  layers: [
	  		    // new ol.layer.Tile({
	  		    //   source: new ol.source.OSM(),
	  		    //   opacity: 0.7
	  		    // }) ,
	  		    new ol.layer.Tile({
	  		    	opacity: 0.7,
	  		    	source: new ol.source.WMTS({
	  		    		url: 'http://t0.tianditu.com/vec_c/wmts',
	  		    		layer:'vec',
	  		    		matrixSet: 'c',
	  		    		format: '',
	  		    		projection: mapProjection,
	  		    		tileGrid: new ol.tilegrid.WMTS({
	  		    			origin: ol.extent.getTopLeft(projectionExtent),
	  		    			resolutions: resolutions,
	  		    			matrixIds: matrixIds
	  		    		}),

	  		    	})
	  		    }) 		    
	  		  ],
	  		  renderer: 'canvas',
	  		  target: 'map',
	  		  view: new ol.View({
	  		    extent: [110, 30, 120, 40]
	  		    
	  		  })
	  		});	  		var mapProjection = new ol.proj.Projection({
	  			code: 'EPSG:4490',
	  			extent: [-180,-90,180,90],
	  			units: 'degrees'
	  		});
	  		ol.proj.addProjection(mapProjection);

	  		var projection = ol.proj.get('EPSG:3857');
	  		var projectionExtent = mapProjection.getExtent();
	  		var size = ol.extent.getWidth(projectionExtent)/256;
	  		var resolutions = new Array(19);
	  		var matrixIds = new Array(19);
	  		for (var z = 0; z < 19; z = z+1){
	  			resolutions[z] = size / Math.pow(2,z+2);
	  			matrixIds[z] = z;
	  		}


	  		var parser = new ol.format.WMTSCapabilities();
	  		var map;
	  		$.ajax('data/WMTS.xml').then(function(response) {
	  			var result = parser.read(response);
	  			var options = ol.source.WMTS.optionsFromCapabilities(result,
	  				{layer:'vec', matrixSet:'c'});

	  			map = new ol.map({
	  				layers:[
	  					new ol.layer.Tile({
	  						opacity: 1,
	  						source: new ol.source.WMTS(options)
	  					})
	  				],
	  				target: 'map',
	  				view: new ol.view({
	  					center:[100,40]
	  				})
	  			});
	  		});