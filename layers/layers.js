var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_POSTE_METALICO_1 = new ol.format.GeoJSON();
var features_POSTE_METALICO_1 = format_POSTE_METALICO_1.readFeatures(json_POSTE_METALICO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTE_METALICO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTE_METALICO_1.addFeatures(features_POSTE_METALICO_1);
var lyr_POSTE_METALICO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTE_METALICO_1, 
                style: style_POSTE_METALICO_1,
                popuplayertitle: "POSTE_METALICO",
                interactive: true,
                title: '<img src="styles/legend/POSTE_METALICO_1.png" /> POSTE_METALICO'
            });
var format_POSTES_EERSSA_2 = new ol.format.GeoJSON();
var features_POSTES_EERSSA_2 = format_POSTES_EERSSA_2.readFeatures(json_POSTES_EERSSA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTES_EERSSA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTES_EERSSA_2.addFeatures(features_POSTES_EERSSA_2);
var lyr_POSTES_EERSSA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTES_EERSSA_2, 
                style: style_POSTES_EERSSA_2,
                popuplayertitle: "POSTES_EERSSA",
                interactive: true,
                title: '<img src="styles/legend/POSTES_EERSSA_2.png" /> POSTES_EERSSA'
            });
var format_COBERTURA_NAP_3 = new ol.format.GeoJSON();
var features_COBERTURA_NAP_3 = format_COBERTURA_NAP_3.readFeatures(json_COBERTURA_NAP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COBERTURA_NAP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COBERTURA_NAP_3.addFeatures(features_COBERTURA_NAP_3);
var lyr_COBERTURA_NAP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COBERTURA_NAP_3, 
                style: style_COBERTURA_NAP_3,
                popuplayertitle: "COBERTURA_NAP",
                interactive: true,
                title: '<img src="styles/legend/COBERTURA_NAP_3.png" /> COBERTURA_NAP'
            });
var format_FIBRA_ADSS_08H_4 = new ol.format.GeoJSON();
var features_FIBRA_ADSS_08H_4 = format_FIBRA_ADSS_08H_4.readFeatures(json_FIBRA_ADSS_08H_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIBRA_ADSS_08H_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIBRA_ADSS_08H_4.addFeatures(features_FIBRA_ADSS_08H_4);
var lyr_FIBRA_ADSS_08H_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIBRA_ADSS_08H_4, 
                style: style_FIBRA_ADSS_08H_4,
                popuplayertitle: "FIBRA_ADSS_08H",
                interactive: true,
                title: '<img src="styles/legend/FIBRA_ADSS_08H_4.png" /> FIBRA_ADSS_08H'
            });
var format_FIBRA_ADSS_12H_5 = new ol.format.GeoJSON();
var features_FIBRA_ADSS_12H_5 = format_FIBRA_ADSS_12H_5.readFeatures(json_FIBRA_ADSS_12H_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIBRA_ADSS_12H_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIBRA_ADSS_12H_5.addFeatures(features_FIBRA_ADSS_12H_5);
var lyr_FIBRA_ADSS_12H_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIBRA_ADSS_12H_5, 
                style: style_FIBRA_ADSS_12H_5,
                popuplayertitle: "FIBRA_ADSS_12H",
                interactive: true,
                title: '<img src="styles/legend/FIBRA_ADSS_12H_5.png" /> FIBRA_ADSS_12H'
            });
var format_FIBRA_ADSS_24H_6 = new ol.format.GeoJSON();
var features_FIBRA_ADSS_24H_6 = format_FIBRA_ADSS_24H_6.readFeatures(json_FIBRA_ADSS_24H_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIBRA_ADSS_24H_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIBRA_ADSS_24H_6.addFeatures(features_FIBRA_ADSS_24H_6);
var lyr_FIBRA_ADSS_24H_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIBRA_ADSS_24H_6, 
                style: style_FIBRA_ADSS_24H_6,
                popuplayertitle: "FIBRA_ADSS_24H",
                interactive: true,
                title: '<img src="styles/legend/FIBRA_ADSS_24H_6.png" /> FIBRA_ADSS_24H'
            });
var format_NODO_7 = new ol.format.GeoJSON();
var features_NODO_7 = format_NODO_7.readFeatures(json_NODO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NODO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NODO_7.addFeatures(features_NODO_7);
var lyr_NODO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NODO_7, 
                style: style_NODO_7,
                popuplayertitle: "NODO",
                interactive: true,
                title: '<img src="styles/legend/NODO_7.png" /> NODO'
            });
var format_DOMOS_8 = new ol.format.GeoJSON();
var features_DOMOS_8 = format_DOMOS_8.readFeatures(json_DOMOS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DOMOS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOMOS_8.addFeatures(features_DOMOS_8);
var lyr_DOMOS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOMOS_8, 
                style: style_DOMOS_8,
                popuplayertitle: "DOMOS",
                interactive: true,
                title: '<img src="styles/legend/DOMOS_8.png" /> DOMOS'
            });
var format_NAPS_9 = new ol.format.GeoJSON();
var features_NAPS_9 = format_NAPS_9.readFeatures(json_NAPS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAPS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAPS_9.addFeatures(features_NAPS_9);
var lyr_NAPS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAPS_9, 
                style: style_NAPS_9,
                popuplayertitle: "NAPS",
                interactive: true,
                title: '<img src="styles/legend/NAPS_9.png" /> NAPS'
            });
var format_MANGAS_LINEALES_10 = new ol.format.GeoJSON();
var features_MANGAS_LINEALES_10 = format_MANGAS_LINEALES_10.readFeatures(json_MANGAS_LINEALES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANGAS_LINEALES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGAS_LINEALES_10.addFeatures(features_MANGAS_LINEALES_10);
var lyr_MANGAS_LINEALES_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGAS_LINEALES_10, 
                style: style_MANGAS_LINEALES_10,
                popuplayertitle: "MANGAS_LINEALES",
                interactive: true,
                title: '<img src="styles/legend/MANGAS_LINEALES_10.png" /> MANGAS_LINEALES'
            });
var format_POSTES_CNT_11 = new ol.format.GeoJSON();
var features_POSTES_CNT_11 = format_POSTES_CNT_11.readFeatures(json_POSTES_CNT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTES_CNT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTES_CNT_11.addFeatures(features_POSTES_CNT_11);
var lyr_POSTES_CNT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTES_CNT_11, 
                style: style_POSTES_CNT_11,
                popuplayertitle: "POSTES_CNT",
                interactive: true,
                title: '<img src="styles/legend/POSTES_CNT_11.png" /> POSTES_CNT'
            });
var format_SECTORES_12 = new ol.format.GeoJSON();
var features_SECTORES_12 = format_SECTORES_12.readFeatures(json_SECTORES_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECTORES_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECTORES_12.addFeatures(features_SECTORES_12);
var lyr_SECTORES_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECTORES_12, 
                style: style_SECTORES_12,
                popuplayertitle: "SECTORES",
                interactive: true,
                title: '<img src="styles/legend/SECTORES_12.png" /> SECTORES'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_POSTE_METALICO_1.setVisible(true);lyr_POSTES_EERSSA_2.setVisible(true);lyr_COBERTURA_NAP_3.setVisible(true);lyr_FIBRA_ADSS_08H_4.setVisible(true);lyr_FIBRA_ADSS_12H_5.setVisible(true);lyr_FIBRA_ADSS_24H_6.setVisible(true);lyr_NODO_7.setVisible(true);lyr_DOMOS_8.setVisible(true);lyr_NAPS_9.setVisible(true);lyr_MANGAS_LINEALES_10.setVisible(true);lyr_POSTES_CNT_11.setVisible(true);lyr_SECTORES_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_POSTE_METALICO_1,lyr_POSTES_EERSSA_2,lyr_COBERTURA_NAP_3,lyr_FIBRA_ADSS_08H_4,lyr_FIBRA_ADSS_12H_5,lyr_FIBRA_ADSS_24H_6,lyr_NODO_7,lyr_DOMOS_8,lyr_NAPS_9,lyr_MANGAS_LINEALES_10,lyr_POSTES_CNT_11,lyr_SECTORES_12];
lyr_POSTE_METALICO_1.set('fieldAliases', {'id': 'id', 'ALTURA': 'ALTURA', });
lyr_POSTES_EERSSA_2.set('fieldAliases', {'id': 'id', 'NRO_POSTE': 'NRO_POSTE', 'TRAFO': 'TRAFO', });
lyr_COBERTURA_NAP_3.set('fieldAliases', {'id': 'id', 'CLIENTES': 'CLIENTES', });
lyr_FIBRA_ADSS_08H_4.set('fieldAliases', {'id': 'id', 'RAMAL': 'RAMAL', });
lyr_FIBRA_ADSS_12H_5.set('fieldAliases', {'id': 'id', 'RAMAL': 'RAMAL', });
lyr_FIBRA_ADSS_24H_6.set('fieldAliases', {'id': 'id', });
lyr_NODO_7.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_DOMOS_8.set('fieldAliases', {'id': 'id', 'ETIQUETA': 'ETIQUETA', });
lyr_NAPS_9.set('fieldAliases', {'id': 'id', 'NRO_POSTE': 'NRO_POSTE', 'DOMO_RAIZ': 'DOMO_RAIZ', 'ETIQUETA': 'ETIQUETA', 'HILO': 'HILO', 'POTENCIA': 'POTENCIA', 'CORE': 'CORE', 'TRJ_OLT': 'TRJ_OLT', 'PORT_OLT': 'PORT_OLT', });
lyr_MANGAS_LINEALES_10.set('fieldAliases', {'id': 'id', 'ETIQUETA': 'ETIQUETA', });
lyr_POSTES_CNT_11.set('fieldAliases', {'id': 'id', 'NRO_POSTE': 'NRO_POSTE', });
lyr_SECTORES_12.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_POSTE_METALICO_1.set('fieldImages', {'id': 'TextEdit', 'ALTURA': 'TextEdit', });
lyr_POSTES_EERSSA_2.set('fieldImages', {'id': 'TextEdit', 'NRO_POSTE': 'TextEdit', 'TRAFO': 'TextEdit', });
lyr_COBERTURA_NAP_3.set('fieldImages', {'id': 'TextEdit', 'CLIENTES': 'TextEdit', });
lyr_FIBRA_ADSS_08H_4.set('fieldImages', {'id': 'TextEdit', 'RAMAL': 'TextEdit', });
lyr_FIBRA_ADSS_12H_5.set('fieldImages', {'id': 'TextEdit', 'RAMAL': 'TextEdit', });
lyr_FIBRA_ADSS_24H_6.set('fieldImages', {'id': 'TextEdit', });
lyr_NODO_7.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_DOMOS_8.set('fieldImages', {'id': 'TextEdit', 'ETIQUETA': 'TextEdit', });
lyr_NAPS_9.set('fieldImages', {'id': 'TextEdit', 'NRO_POSTE': 'TextEdit', 'DOMO_RAIZ': 'TextEdit', 'ETIQUETA': 'TextEdit', 'HILO': 'TextEdit', 'POTENCIA': 'TextEdit', 'CORE': 'TextEdit', 'TRJ_OLT': 'TextEdit', 'PORT_OLT': 'TextEdit', });
lyr_MANGAS_LINEALES_10.set('fieldImages', {'id': 'TextEdit', 'ETIQUETA': 'TextEdit', });
lyr_POSTES_CNT_11.set('fieldImages', {'id': 'TextEdit', 'NRO_POSTE': 'TextEdit', });
lyr_SECTORES_12.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_POSTE_METALICO_1.set('fieldLabels', {'id': 'no label', 'ALTURA': 'inline label - always visible', });
lyr_POSTES_EERSSA_2.set('fieldLabels', {'id': 'no label', 'NRO_POSTE': 'inline label - always visible', 'TRAFO': 'no label', });
lyr_COBERTURA_NAP_3.set('fieldLabels', {'id': 'no label', 'CLIENTES': 'no label', });
lyr_FIBRA_ADSS_08H_4.set('fieldLabels', {'id': 'no label', 'RAMAL': 'inline label - always visible', });
lyr_FIBRA_ADSS_12H_5.set('fieldLabels', {'id': 'no label', 'RAMAL': 'inline label - always visible', });
lyr_FIBRA_ADSS_24H_6.set('fieldLabels', {'id': 'no label', });
lyr_NODO_7.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'inline label - always visible', });
lyr_DOMOS_8.set('fieldLabels', {'id': 'no label', 'ETIQUETA': 'inline label - always visible', });
lyr_NAPS_9.set('fieldLabels', {'id': 'inline label - always visible', 'NRO_POSTE': 'inline label - always visible', 'DOMO_RAIZ': 'inline label - always visible', 'ETIQUETA': 'inline label - always visible', 'HILO': 'inline label - always visible', 'POTENCIA': 'inline label - always visible', 'CORE': 'inline label - always visible', 'TRJ_OLT': 'inline label - always visible', 'PORT_OLT': 'inline label - always visible', });
lyr_MANGAS_LINEALES_10.set('fieldLabels', {'id': 'no label', 'ETIQUETA': 'inline label - always visible', });
lyr_POSTES_CNT_11.set('fieldLabels', {'id': 'no label', 'NRO_POSTE': 'inline label - always visible', });
lyr_SECTORES_12.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'inline label - always visible', });
lyr_SECTORES_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});