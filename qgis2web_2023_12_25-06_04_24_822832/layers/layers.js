var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KabupatenProbolinggo_1 = new ol.format.GeoJSON();
var features_KabupatenProbolinggo_1 = format_KabupatenProbolinggo_1.readFeatures(json_KabupatenProbolinggo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenProbolinggo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenProbolinggo_1.addFeatures(features_KabupatenProbolinggo_1);
var lyr_KabupatenProbolinggo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KabupatenProbolinggo_1, 
                style: style_KabupatenProbolinggo_1,
                interactive: true,
                title: '<img src="styles/legend/KabupatenProbolinggo_1.png" /> Kabupaten Probolinggo'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan '
            });
var format_Servicearealines_3 = new ol.format.GeoJSON();
var features_Servicearealines_3 = format_Servicearealines_3.readFeatures(json_Servicearealines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_3.addFeatures(features_Servicearealines_3);
var lyr_Servicearealines_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearealines_3, 
                style: style_Servicearealines_3,
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_3.png" /> Service area (lines)'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_FasilitasKesehatan_5 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_5 = format_FasilitasKesehatan_5.readFeatures(json_FasilitasKesehatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatan_5.addFeatures(features_FasilitasKesehatan_5);
var lyr_FasilitasKesehatan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FasilitasKesehatan_5, 
                style: style_FasilitasKesehatan_5,
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatan_5.png" /> Fasilitas Kesehatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KabupatenProbolinggo_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Servicearealines_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_FasilitasKesehatan_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KabupatenProbolinggo_1,lyr_Jalan_2,lyr_Servicearealines_3,lyr_Buffered_4,lyr_FasilitasKesehatan_5];
lyr_KabupatenProbolinggo_1.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_Jalan_2.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Servicearealines_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', 'type': 'type', 'start': 'start', });
lyr_Buffered_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', 'type': 'type', 'start': 'start', });
lyr_FasilitasKesehatan_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_KabupatenProbolinggo_1.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_Servicearealines_3.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'REMARK': '', 'TIPSHT': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FSKADD': '', 'type': '', 'start': '', });
lyr_Buffered_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_FasilitasKesehatan_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_KabupatenProbolinggo_1.set('fieldLabels', {'WADMKC': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'REMARK': 'no label', });
lyr_Servicearealines_3.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_FasilitasKesehatan_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_FasilitasKesehatan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});