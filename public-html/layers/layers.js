var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GRACIAS_1 = new ol.format.GeoJSON();
var features_GRACIAS_1 = format_GRACIAS_1.readFeatures(json_GRACIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRACIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRACIAS_1.addFeatures(features_GRACIAS_1);
var lyr_GRACIAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRACIAS_1, 
                style: style_GRACIAS_1,
                popuplayertitle: "GRACIAS",
                interactive: true,
                title: '<img src="styles/legend/GRACIAS_1.png" /> GRACIAS'
            });
var format_RedHidrica_2 = new ol.format.GeoJSON();
var features_RedHidrica_2 = format_RedHidrica_2.readFeatures(json_RedHidrica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedHidrica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedHidrica_2.addFeatures(features_RedHidrica_2);
var lyr_RedHidrica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedHidrica_2, 
                style: style_RedHidrica_2,
                popuplayertitle: "Red Hidrica",
                interactive: true,
                title: '<img src="styles/legend/RedHidrica_2.png" /> Red Hidrica'
            });
var format_CurvasdeNivel_3 = new ol.format.GeoJSON();
var features_CurvasdeNivel_3 = format_CurvasdeNivel_3.readFeatures(json_CurvasdeNivel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNivel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNivel_3.addFeatures(features_CurvasdeNivel_3);
var lyr_CurvasdeNivel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurvasdeNivel_3, 
                style: style_CurvasdeNivel_3,
                popuplayertitle: "Curvas de Nivel",
                interactive: true,
                title: '<img src="styles/legend/CurvasdeNivel_3.png" /> Curvas de Nivel'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GRACIAS_1.setVisible(true);lyr_RedHidrica_2.setVisible(true);lyr_CurvasdeNivel_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GRACIAS_1,lyr_RedHidrica_2,lyr_CurvasdeNivel_3];
lyr_GRACIAS_1.set('fieldAliases', {'Geocodigo': 'Geocodigo', 'Cod_Depart': 'Cod_Depart', 'Departamen': 'Departamen', 'Cod_Munici': 'Cod_Munici', 'Municipio': 'Municipio', 'Codigo': 'Codigo', 'CodName': 'CodName', 'CentroPobl': 'CentroPobl', 'AreaM2': 'AreaM2', 'Kms2': 'Kms2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RedHidrica_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Codigo': 'Codigo', 'Descripc': 'Descripc', 'Shape_Leng': 'Shape_Leng', });
lyr_CurvasdeNivel_3.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'altitud': 'altitud', 'c100m': 'c100m', 'c200m': 'c200m', 'c500m': 'c500m', 'otras': 'otras', 'shape_leng': 'shape_leng', });
lyr_GRACIAS_1.set('fieldImages', {'Geocodigo': 'TextEdit', 'Cod_Depart': 'TextEdit', 'Departamen': 'TextEdit', 'Cod_Munici': 'TextEdit', 'Municipio': 'TextEdit', 'Codigo': 'TextEdit', 'CodName': 'TextEdit', 'CentroPobl': 'TextEdit', 'AreaM2': 'TextEdit', 'Kms2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RedHidrica_2.set('fieldImages', {'OBJECTID': 'Range', 'Codigo': 'Range', 'Descripc': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_CurvasdeNivel_3.set('fieldImages', {'gid': '', 'objectid': '', 'altitud': '', 'c100m': '', 'c200m': '', 'c500m': '', 'otras': '', 'shape_leng': '', });
lyr_GRACIAS_1.set('fieldLabels', {'Geocodigo': 'inline label - always visible', 'Cod_Depart': 'inline label - always visible', 'Departamen': 'inline label - always visible', 'Cod_Munici': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Codigo': 'inline label - always visible', 'CodName': 'inline label - always visible', 'CentroPobl': 'inline label - always visible', 'AreaM2': 'inline label - always visible', 'Kms2': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_RedHidrica_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Codigo': 'inline label - always visible', 'Descripc': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_CurvasdeNivel_3.set('fieldLabels', {'gid': 'inline label - always visible', 'objectid': 'inline label - always visible', 'altitud': 'inline label - always visible', 'c100m': 'inline label - always visible', 'c200m': 'inline label - always visible', 'c500m': 'inline label - always visible', 'otras': 'inline label - always visible', 'shape_leng': 'inline label - always visible', });
lyr_CurvasdeNivel_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});