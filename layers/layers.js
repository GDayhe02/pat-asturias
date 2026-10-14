ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25830").setExtent([152921.383000, 4737378.999000, 378833.700000, 4838890.738900]);
var wms_layers = [];


        var lyr_GMSSatellite6172026_0 = new ol.layer.Tile({
            'title': 'GMS Satellite 6/17/2026',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.com/permissions/geoguidelines/">Map data ©2026 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_OpenStreetMapWMS_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ows.terrestris.de/osm/service?",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OSM-WMS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'OpenStreetMap WMS',
                            popuplayertitle: 'OpenStreetMap WMS',
                            type: '',
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_OpenStreetMapWMS_1, 0]);
var format_Principalescursosdeagua_2 = new ol.format.GeoJSON();
var features_Principalescursosdeagua_2 = format_Principalescursosdeagua_2.readFeatures(json_Principalescursosdeagua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Principalescursosdeagua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Principalescursosdeagua_2.addFeatures(features_Principalescursosdeagua_2);
var lyr_Principalescursosdeagua_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Principalescursosdeagua_2, 
                style: style_Principalescursosdeagua_2,
                popuplayertitle: 'Principales cursos de agua',
                interactive: true,
                title: '<img src="styles/legend/Principalescursosdeagua_2.png" /> Principales cursos de agua'
            });
var format_NucRural_enCamino_3 = new ol.format.GeoJSON();
var features_NucRural_enCamino_3 = format_NucRural_enCamino_3.readFeatures(json_NucRural_enCamino_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_NucRural_enCamino_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NucRural_enCamino_3.addFeatures(features_NucRural_enCamino_3);
var lyr_NucRural_enCamino_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NucRural_enCamino_3, 
                style: style_NucRural_enCamino_3,
                popuplayertitle: 'NucRural_enCamino',
                interactive: true,
                title: '<img src="styles/legend/NucRural_enCamino_3.png" /> NucRural_enCamino'
            });
var format_NcleosUrbanos_4 = new ol.format.GeoJSON();
var features_NcleosUrbanos_4 = format_NcleosUrbanos_4.readFeatures(json_NcleosUrbanos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_NcleosUrbanos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NcleosUrbanos_4.addFeatures(features_NcleosUrbanos_4);
var lyr_NcleosUrbanos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NcleosUrbanos_4, 
                style: style_NcleosUrbanos_4,
                popuplayertitle: 'Núcleos Urbanos',
                interactive: true,
                title: '<img src="styles/legend/NcleosUrbanos_4.png" /> Núcleos Urbanos'
            });
var format_Concejos_Asturias_OFICIAL_5 = new ol.format.GeoJSON();
var features_Concejos_Asturias_OFICIAL_5 = format_Concejos_Asturias_OFICIAL_5.readFeatures(json_Concejos_Asturias_OFICIAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Concejos_Asturias_OFICIAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concejos_Asturias_OFICIAL_5.addFeatures(features_Concejos_Asturias_OFICIAL_5);
var lyr_Concejos_Asturias_OFICIAL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Concejos_Asturias_OFICIAL_5, 
                style: style_Concejos_Asturias_OFICIAL_5,
                popuplayertitle: 'Concejos_Asturias_OFICIAL',
                interactive: true,
                title: '<img src="styles/legend/Concejos_Asturias_OFICIAL_5.png" /> Concejos_Asturias_OFICIAL'
            });
var format_Comarcas_6 = new ol.format.GeoJSON();
var features_Comarcas_6 = format_Comarcas_6.readFeatures(json_Comarcas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Comarcas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comarcas_6.addFeatures(features_Comarcas_6);
var lyr_Comarcas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comarcas_6, 
                style: style_Comarcas_6,
                popuplayertitle: 'Comarcas',
                interactive: true,
                title: '<img src="styles/legend/Comarcas_6.png" /> Comarcas'
            });
var format_Espacios_RN2000_7 = new ol.format.GeoJSON();
var features_Espacios_RN2000_7 = format_Espacios_RN2000_7.readFeatures(json_Espacios_RN2000_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Espacios_RN2000_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacios_RN2000_7.addFeatures(features_Espacios_RN2000_7);
var lyr_Espacios_RN2000_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacios_RN2000_7, 
                style: style_Espacios_RN2000_7,
                popuplayertitle: 'Espacios_RN2000',
                interactive: true,
                title: '<img src="styles/legend/Espacios_RN2000_7.png" /> Espacios_RN2000'
            });
var jsonSource_Habitats_Interes_Comunitario_5000_8 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_Habitats_Interes_Comunitario_5000_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Habitats_Interes_Comunitario_5000_8, 
                style: style_Habitats_Interes_Comunitario_5000_8,
                popuplayertitle: 'Habitats_Interes_Comunitario_5000',
                interactive: true,
                title: '<img src="styles/legend/Habitats_Interes_Comunitario_5000_8.png" /> Habitats_Interes_Comunitario_5000'
            });
var format_Parque_Nacional_9 = new ol.format.GeoJSON();
var features_Parque_Nacional_9 = format_Parque_Nacional_9.readFeatures(json_Parque_Nacional_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Parque_Nacional_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parque_Nacional_9.addFeatures(features_Parque_Nacional_9);
var lyr_Parque_Nacional_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parque_Nacional_9, 
                style: style_Parque_Nacional_9,
                popuplayertitle: 'Parque_Nacional',
                interactive: true,
                title: '<img src="styles/legend/Parque_Nacional_9.png" /> Parque_Nacional'
            });
var format_Parques_Naturales_10 = new ol.format.GeoJSON();
var features_Parques_Naturales_10 = format_Parques_Naturales_10.readFeatures(json_Parques_Naturales_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Parques_Naturales_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parques_Naturales_10.addFeatures(features_Parques_Naturales_10);
var lyr_Parques_Naturales_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parques_Naturales_10, 
                style: style_Parques_Naturales_10,
                popuplayertitle: 'Parques_Naturales',
                interactive: true,
                title: '<img src="styles/legend/Parques_Naturales_10.png" /> Parques_Naturales'
            });
var format_Reservas_Naturales_11 = new ol.format.GeoJSON();
var features_Reservas_Naturales_11 = format_Reservas_Naturales_11.readFeatures(json_Reservas_Naturales_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Reservas_Naturales_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservas_Naturales_11.addFeatures(features_Reservas_Naturales_11);
var lyr_Reservas_Naturales_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservas_Naturales_11, 
                style: style_Reservas_Naturales_11,
                popuplayertitle: 'Reservas_Naturales',
                interactive: true,
                title: '<img src="styles/legend/Reservas_Naturales_11.png" /> Reservas_Naturales'
            });
var format_Paisajes_Protegidos_12 = new ol.format.GeoJSON();
var features_Paisajes_Protegidos_12 = format_Paisajes_Protegidos_12.readFeatures(json_Paisajes_Protegidos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Paisajes_Protegidos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paisajes_Protegidos_12.addFeatures(features_Paisajes_Protegidos_12);
var lyr_Paisajes_Protegidos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paisajes_Protegidos_12, 
                style: style_Paisajes_Protegidos_12,
                popuplayertitle: 'Paisajes_Protegidos',
                interactive: true,
                title: '<img src="styles/legend/Paisajes_Protegidos_12.png" /> Paisajes_Protegidos'
            });
var format_Monumentos_Naturales_Poligonos_13 = new ol.format.GeoJSON();
var features_Monumentos_Naturales_Poligonos_13 = format_Monumentos_Naturales_Poligonos_13.readFeatures(json_Monumentos_Naturales_Poligonos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Monumentos_Naturales_Poligonos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monumentos_Naturales_Poligonos_13.addFeatures(features_Monumentos_Naturales_Poligonos_13);
var lyr_Monumentos_Naturales_Poligonos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monumentos_Naturales_Poligonos_13, 
                style: style_Monumentos_Naturales_Poligonos_13,
                popuplayertitle: 'Monumentos_Naturales_Poligonos',
                interactive: true,
                title: '<img src="styles/legend/Monumentos_Naturales_Poligonos_13.png" /> Monumentos_Naturales_Poligonos'
            });
var format_Monumentos_Naturales_Puntos_14 = new ol.format.GeoJSON();
var features_Monumentos_Naturales_Puntos_14 = format_Monumentos_Naturales_Puntos_14.readFeatures(json_Monumentos_Naturales_Puntos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Monumentos_Naturales_Puntos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monumentos_Naturales_Puntos_14.addFeatures(features_Monumentos_Naturales_Puntos_14);
var lyr_Monumentos_Naturales_Puntos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monumentos_Naturales_Puntos_14, 
                style: style_Monumentos_Naturales_Puntos_14,
                popuplayertitle: 'Monumentos_Naturales_Puntos',
                interactive: true,
                title: '<img src="styles/legend/Monumentos_Naturales_Puntos_14.png" /> Monumentos_Naturales_Puntos'
            });
var format_Reservas_Biosfera_15 = new ol.format.GeoJSON();
var features_Reservas_Biosfera_15 = format_Reservas_Biosfera_15.readFeatures(json_Reservas_Biosfera_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Reservas_Biosfera_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservas_Biosfera_15.addFeatures(features_Reservas_Biosfera_15);
var lyr_Reservas_Biosfera_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservas_Biosfera_15, 
                style: style_Reservas_Biosfera_15,
                popuplayertitle: 'Reservas_Biosfera',
                interactive: true,
                title: '<img src="styles/legend/Reservas_Biosfera_15.png" /> Reservas_Biosfera'
            });
var format_Humedales_Ramsar_16 = new ol.format.GeoJSON();
var features_Humedales_Ramsar_16 = format_Humedales_Ramsar_16.readFeatures(json_Humedales_Ramsar_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Humedales_Ramsar_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Humedales_Ramsar_16.addFeatures(features_Humedales_Ramsar_16);
var lyr_Humedales_Ramsar_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Humedales_Ramsar_16, 
                style: style_Humedales_Ramsar_16,
                popuplayertitle: 'Humedales_Ramsar',
                interactive: true,
                title: '<img src="styles/legend/Humedales_Ramsar_16.png" /> Humedales_Ramsar'
            });
var format_BICs_Area_17 = new ol.format.GeoJSON();
var features_BICs_Area_17 = format_BICs_Area_17.readFeatures(json_BICs_Area_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_BICs_Area_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BICs_Area_17.addFeatures(features_BICs_Area_17);
var lyr_BICs_Area_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BICs_Area_17, 
                style: style_BICs_Area_17,
                popuplayertitle: 'BICs_Area',
                interactive: true,
                title: '<img src="styles/legend/BICs_Area_17.png" /> BICs_Area'
            });
var format_BICs_Puntos_18 = new ol.format.GeoJSON();
var features_BICs_Puntos_18 = format_BICs_Puntos_18.readFeatures(json_BICs_Puntos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_BICs_Puntos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BICs_Puntos_18.addFeatures(features_BICs_Puntos_18);
var lyr_BICs_Puntos_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BICs_Puntos_18, 
                style: style_BICs_Puntos_18,
                popuplayertitle: 'BICs_Puntos',
                interactive: true,
                title: '<img src="styles/legend/BICs_Puntos_18.png" /> BICs_Puntos'
            });
var format_BICs_Entorno_19 = new ol.format.GeoJSON();
var features_BICs_Entorno_19 = format_BICs_Entorno_19.readFeatures(json_BICs_Entorno_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_BICs_Entorno_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BICs_Entorno_19.addFeatures(features_BICs_Entorno_19);
var lyr_BICs_Entorno_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BICs_Entorno_19, 
                style: style_BICs_Entorno_19,
                popuplayertitle: 'BICs_Entorno',
                interactive: true,
                title: '<img src="styles/legend/BICs_Entorno_19.png" /> BICs_Entorno'
            });
var format_Ruta_Plata_20 = new ol.format.GeoJSON();
var features_Ruta_Plata_20 = format_Ruta_Plata_20.readFeatures(json_Ruta_Plata_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Ruta_Plata_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta_Plata_20.addFeatures(features_Ruta_Plata_20);
var lyr_Ruta_Plata_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta_Plata_20, 
                style: style_Ruta_Plata_20,
                popuplayertitle: 'Ruta_Plata',
                interactive: true,
                title: '<img src="styles/legend/Ruta_Plata_20.png" /> Ruta_Plata'
            });
var format_BienesIPCAenCaminoCosta_21 = new ol.format.GeoJSON();
var features_BienesIPCAenCaminoCosta_21 = format_BienesIPCAenCaminoCosta_21.readFeatures(json_BienesIPCAenCaminoCosta_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_BienesIPCAenCaminoCosta_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BienesIPCAenCaminoCosta_21.addFeatures(features_BienesIPCAenCaminoCosta_21);
var lyr_BienesIPCAenCaminoCosta_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BienesIPCAenCaminoCosta_21, 
                style: style_BienesIPCAenCaminoCosta_21,
                popuplayertitle: 'Bienes IPCA en CaminoCosta',
                interactive: true,
                title: '<img src="styles/legend/BienesIPCAenCaminoCosta_21.png" /> Bienes IPCA en CaminoCosta'
            });
var format_BienesIPCAenRI_22 = new ol.format.GeoJSON();
var features_BienesIPCAenRI_22 = format_BienesIPCAenRI_22.readFeatures(json_BienesIPCAenRI_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_BienesIPCAenRI_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BienesIPCAenRI_22.addFeatures(features_BienesIPCAenRI_22);
var lyr_BienesIPCAenRI_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BienesIPCAenRI_22, 
                style: style_BienesIPCAenRI_22,
                popuplayertitle: 'Bienes IPCA en RI',
                interactive: true,
                title: '<img src="styles/legend/BienesIPCAenRI_22.png" /> Bienes IPCA en RI'
            });
var format_Elementosdeinteres_23 = new ol.format.GeoJSON();
var features_Elementosdeinteres_23 = format_Elementosdeinteres_23.readFeatures(json_Elementosdeinteres_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Elementosdeinteres_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elementosdeinteres_23.addFeatures(features_Elementosdeinteres_23);
var lyr_Elementosdeinteres_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elementosdeinteres_23, 
                style: style_Elementosdeinteres_23,
                popuplayertitle: 'Elementos de interes',
                interactive: true,
                title: '<img src="styles/legend/Elementosdeinteres_23.png" /> Elementos de interes'
            });
var format_Injustificado_inexistente_24 = new ol.format.GeoJSON();
var features_Injustificado_inexistente_24 = format_Injustificado_inexistente_24.readFeatures(json_Injustificado_inexistente_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Injustificado_inexistente_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Injustificado_inexistente_24.addFeatures(features_Injustificado_inexistente_24);
var lyr_Injustificado_inexistente_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Injustificado_inexistente_24, 
                style: style_Injustificado_inexistente_24,
                popuplayertitle: 'Injustificado_inexistente',
                interactive: true,
                title: '<img src="styles/legend/Injustificado_inexistente_24.png" /> Injustificado_inexistente'
            });
var format_Propuesta_Localizaciones_25 = new ol.format.GeoJSON();
var features_Propuesta_Localizaciones_25 = format_Propuesta_Localizaciones_25.readFeatures(json_Propuesta_Localizaciones_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Propuesta_Localizaciones_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propuesta_Localizaciones_25.addFeatures(features_Propuesta_Localizaciones_25);
var lyr_Propuesta_Localizaciones_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Propuesta_Localizaciones_25, 
                style: style_Propuesta_Localizaciones_25,
                popuplayertitle: 'Propuesta_Localizaciones',
                interactive: true,
                title: '<img src="styles/legend/Propuesta_Localizaciones_25.png" /> Propuesta_Localizaciones'
            });
var format_Propuesta_VarianteItinerario_26 = new ol.format.GeoJSON();
var features_Propuesta_VarianteItinerario_26 = format_Propuesta_VarianteItinerario_26.readFeatures(json_Propuesta_VarianteItinerario_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Propuesta_VarianteItinerario_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propuesta_VarianteItinerario_26.addFeatures(features_Propuesta_VarianteItinerario_26);
var lyr_Propuesta_VarianteItinerario_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Propuesta_VarianteItinerario_26, 
                style: style_Propuesta_VarianteItinerario_26,
                popuplayertitle: 'Propuesta_Variante Itinerario',
                interactive: true,
                title: '<img src="styles/legend/Propuesta_VarianteItinerario_26.png" /> Propuesta_Variante Itinerario'
            });
var format_PuntoN_CrucePeligroso_27 = new ol.format.GeoJSON();
var features_PuntoN_CrucePeligroso_27 = format_PuntoN_CrucePeligroso_27.readFeatures(json_PuntoN_CrucePeligroso_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PuntoN_CrucePeligroso_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntoN_CrucePeligroso_27.addFeatures(features_PuntoN_CrucePeligroso_27);
var lyr_PuntoN_CrucePeligroso_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntoN_CrucePeligroso_27, 
                style: style_PuntoN_CrucePeligroso_27,
                popuplayertitle: 'PuntoN_CrucePeligroso',
                interactive: true,
                title: '<img src="styles/legend/PuntoN_CrucePeligroso_27.png" /> PuntoN_CrucePeligroso'
            });
var format_PuntosNegros_28 = new ol.format.GeoJSON();
var features_PuntosNegros_28 = format_PuntosNegros_28.readFeatures(json_PuntosNegros_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PuntosNegros_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosNegros_28.addFeatures(features_PuntosNegros_28);
var lyr_PuntosNegros_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosNegros_28, 
                style: style_PuntosNegros_28,
                popuplayertitle: 'PuntosNegros',
                interactive: true,
                title: '<img src="styles/legend/PuntosNegros_28.png" /> PuntosNegros'
            });
var format_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29 = new ol.format.GeoJSON();
var features_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29 = format_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29.readFeatures(json_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29.addFeatures(features_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29);
var lyr_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29, 
                style: style_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29,
                popuplayertitle: 'ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP',
                interactive: true,
                title: '<img src="styles/legend/ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29.png" /> ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP'
            });
var format_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30 = new ol.format.GeoJSON();
var features_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30 = format_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30.readFeatures(json_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30.addFeatures(features_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30);
var lyr_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30, 
                style: style_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30,
                popuplayertitle: 'ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP',
                interactive: true,
                title: '<img src="styles/legend/ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30.png" /> ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP'
            });
var format_CaminoEnlace_31 = new ol.format.GeoJSON();
var features_CaminoEnlace_31 = format_CaminoEnlace_31.readFeatures(json_CaminoEnlace_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaminoEnlace_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoEnlace_31.addFeatures(features_CaminoEnlace_31);
var lyr_CaminoEnlace_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminoEnlace_31, 
                style: style_CaminoEnlace_31,
                popuplayertitle: 'Camino Enlace',
                interactive: true,
                title: '<img src="styles/legend/CaminoEnlace_31.png" /> Camino Enlace'
            });
var format_CaminodelSalvador_32 = new ol.format.GeoJSON();
var features_CaminodelSalvador_32 = format_CaminodelSalvador_32.readFeatures(json_CaminodelSalvador_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaminodelSalvador_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminodelSalvador_32.addFeatures(features_CaminodelSalvador_32);
var lyr_CaminodelSalvador_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminodelSalvador_32, 
                style: style_CaminodelSalvador_32,
                popuplayertitle: 'Camino del Salvador',
                interactive: true,
                title: '<img src="styles/legend/CaminodelSalvador_32.png" /> Camino del Salvador'
            });
var format_CaminoPrimitivo_33 = new ol.format.GeoJSON();
var features_CaminoPrimitivo_33 = format_CaminoPrimitivo_33.readFeatures(json_CaminoPrimitivo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaminoPrimitivo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoPrimitivo_33.addFeatures(features_CaminoPrimitivo_33);
var lyr_CaminoPrimitivo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminoPrimitivo_33, 
                style: style_CaminoPrimitivo_33,
                popuplayertitle: 'Camino Primitivo',
                interactive: true,
                title: '<img src="styles/legend/CaminoPrimitivo_33.png" /> Camino Primitivo'
            });
var format_CaminodelaCosta_34 = new ol.format.GeoJSON();
var features_CaminodelaCosta_34 = format_CaminodelaCosta_34.readFeatures(json_CaminodelaCosta_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CaminodelaCosta_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminodelaCosta_34.addFeatures(features_CaminodelaCosta_34);
var lyr_CaminodelaCosta_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminodelaCosta_34, 
                style: style_CaminodelaCosta_34,
                popuplayertitle: 'Camino de la Costa',
                interactive: true,
                title: '<img src="styles/legend/CaminodelaCosta_34.png" /> Camino de la Costa'
            });
var format_AmbitoOrig_35 = new ol.format.GeoJSON();
var features_AmbitoOrig_35 = format_AmbitoOrig_35.readFeatures(json_AmbitoOrig_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AmbitoOrig_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmbitoOrig_35.addFeatures(features_AmbitoOrig_35);
var lyr_AmbitoOrig_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmbitoOrig_35, 
                style: style_AmbitoOrig_35,
                popuplayertitle: 'Ambito Orig',
                interactive: true,
                title: '<img src="styles/legend/AmbitoOrig_35.png" /> Ambito Orig'
            });
var format_TrazadoOrig_36 = new ol.format.GeoJSON();
var features_TrazadoOrig_36 = format_TrazadoOrig_36.readFeatures(json_TrazadoOrig_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_TrazadoOrig_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrazadoOrig_36.addFeatures(features_TrazadoOrig_36);
var lyr_TrazadoOrig_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrazadoOrig_36, 
                style: style_TrazadoOrig_36,
                popuplayertitle: 'Trazado Orig',
                interactive: true,
                title: '<img src="styles/legend/TrazadoOrig_36.png" /> Trazado Orig'
            });
var group_AmbitoPTECASA = new ol.layer.Group({
                                layers: [lyr_CaminoEnlace_31,lyr_CaminodelSalvador_32,lyr_CaminoPrimitivo_33,lyr_CaminodelaCosta_34,lyr_AmbitoOrig_35,lyr_TrazadoOrig_36,],
                                fold: 'open',
                                title: 'Ambito PTECASA'});
var group_EstudiosPropuestas = new ol.layer.Group({
                                layers: [lyr_Elementosdeinteres_23,lyr_Injustificado_inexistente_24,lyr_Propuesta_Localizaciones_25,lyr_Propuesta_VarianteItinerario_26,lyr_PuntoN_CrucePeligroso_27,lyr_PuntosNegros_28,],
                                fold: 'open',
                                title: 'Estudios Propuestas'});
var group_Patrimonio = new ol.layer.Group({
                                layers: [lyr_BICs_Area_17,lyr_BICs_Puntos_18,lyr_BICs_Entorno_19,lyr_Ruta_Plata_20,lyr_BienesIPCAenCaminoCosta_21,lyr_BienesIPCAenRI_22,],
                                fold: 'open',
                                title: 'Patrimonio'});
var group_EspaciosProtegidos = new ol.layer.Group({
                                layers: [lyr_Espacios_RN2000_7,lyr_Habitats_Interes_Comunitario_5000_8,lyr_Parque_Nacional_9,lyr_Parques_Naturales_10,lyr_Reservas_Naturales_11,lyr_Paisajes_Protegidos_12,lyr_Monumentos_Naturales_Poligonos_13,lyr_Monumentos_Naturales_Puntos_14,lyr_Reservas_Biosfera_15,lyr_Humedales_Ramsar_16,],
                                fold: 'open',
                                title: 'Espacios Protegidos'});
var group_CartografBase = new ol.layer.Group({
                                layers: [lyr_Principalescursosdeagua_2,lyr_NucRural_enCamino_3,lyr_NcleosUrbanos_4,lyr_Concejos_Asturias_OFICIAL_5,lyr_Comarcas_6,],
                                fold: 'open',
                                title: 'Cartograf Base'});

lyr_GMSSatellite6172026_0.setVisible(true);lyr_OpenStreetMapWMS_1.setVisible(true);lyr_Principalescursosdeagua_2.setVisible(true);lyr_NucRural_enCamino_3.setVisible(true);lyr_NcleosUrbanos_4.setVisible(true);lyr_Concejos_Asturias_OFICIAL_5.setVisible(true);lyr_Comarcas_6.setVisible(true);lyr_Espacios_RN2000_7.setVisible(true);lyr_Habitats_Interes_Comunitario_5000_8.setVisible(false);lyr_Parque_Nacional_9.setVisible(true);lyr_Parques_Naturales_10.setVisible(true);lyr_Reservas_Naturales_11.setVisible(true);lyr_Paisajes_Protegidos_12.setVisible(true);lyr_Monumentos_Naturales_Poligonos_13.setVisible(true);lyr_Monumentos_Naturales_Puntos_14.setVisible(true);lyr_Reservas_Biosfera_15.setVisible(true);lyr_Humedales_Ramsar_16.setVisible(true);lyr_BICs_Area_17.setVisible(true);lyr_BICs_Puntos_18.setVisible(true);lyr_BICs_Entorno_19.setVisible(true);lyr_Ruta_Plata_20.setVisible(true);lyr_BienesIPCAenCaminoCosta_21.setVisible(true);lyr_BienesIPCAenRI_22.setVisible(true);lyr_Elementosdeinteres_23.setVisible(true);lyr_Injustificado_inexistente_24.setVisible(true);lyr_Propuesta_Localizaciones_25.setVisible(true);lyr_Propuesta_VarianteItinerario_26.setVisible(true);lyr_PuntoN_CrucePeligroso_27.setVisible(true);lyr_PuntosNegros_28.setVisible(true);lyr_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29.setVisible(true);lyr_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30.setVisible(true);lyr_CaminoEnlace_31.setVisible(true);lyr_CaminodelSalvador_32.setVisible(true);lyr_CaminoPrimitivo_33.setVisible(true);lyr_CaminodelaCosta_34.setVisible(true);lyr_AmbitoOrig_35.setVisible(true);lyr_TrazadoOrig_36.setVisible(true);
var layersList = [lyr_GMSSatellite6172026_0,lyr_OpenStreetMapWMS_1,group_CartografBase,group_EspaciosProtegidos,group_Patrimonio,group_EstudiosPropuestas,lyr_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29,lyr_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30,group_AmbitoPTECASA];
lyr_Principalescursosdeagua_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'namespace': 'namespace', 'versionId': 'versionId', 'thematicId': 'thematicId', 'themaIdSch': 'themaIdSch', 'beginLife': 'beginLife', 'endLife': 'endLife', 'predecesId': 'predecesId', 'predeIdSch': 'predeIdSch', 'successoId': 'successoId', 'succeIdSch': 'succeIdSch', 'wEvolution': 'wEvolution', 'nameTxtInt': 'nameTxtInt', 'nameText': 'nameText', 'nameTxtLan': 'nameTxtLan', 'desigBegin': 'desigBegin', 'desigEnd': 'desigEnd', 'zoneType': 'zoneType', 'spZoneType': 'spZoneType', 'legisName': 'legisName', 'legisLink': 'legisLink', 'legisLevel': 'legisLevel', 'rZoneId': 'rZoneId', 'rZoneIdSch': 'rZoneIdSch', 'rTrnsId': 'rTrnsId', 'rTrnsIdSch': 'rTrnsIdSch', 'sizeValue': 'sizeValue', 'sizeUoM': 'sizeUoM', 'meanDepth': 'meanDepth', 'link': 'link', 'Naturaleza': 'Naturaleza', 'Categoria': 'Categoria', 'Tipo': 'Tipo', 'LocCodPH3': 'LocCodPH3', 'Shape_Leng': 'Shape_Leng', 'LONG_m': 'LONG_m', 'LONG_km': 'LONG_km', 'Shape_STLe': 'Shape_STLe', });
lyr_NucRural_enCamino_3.set('fieldAliases', {'ID_n': 'ID_n', 'Nombre_noc': 'Nombre_noc', 'Nombre_no1': 'Nombre_no1', 'Parroquia': 'Parroquia', 'Parroquia_': 'Parroquia_', 'Concejo': 'Concejo', 'Concejo_as': 'Concejo_as', 'ID_concejo': 'ID_concejo', 'CLASIFICAC': 'CLASIFICAC', 'CALIFICACI': 'CALIFICACI', 'SUBCATEGOR': 'SUBCATEGOR', 'TIPO': 'TIPO', 'CODIGO': 'CODIGO', 'CLASE_DE_P': 'CLASE_DE_P', 'F_ACUERDO': 'F_ACUERDO', 'F_BOPA': 'F_BOPA', 'TEXTO_BOPA': 'TEXTO_BOPA', 'EQUIPO_RED': 'EQUIPO_RED', 'EXPTE_OT': 'EXPTE_OT', 'NORMATIVA': 'NORMATIVA', 'NORMATIVA_': 'NORMATIVA_', 'FICHA': 'FICHA', 'OBSERVACIO': 'OBSERVACIO', 'MODIFICACI': 'MODIFICACI', 'Coord_UTM_': 'Coord_UTM_', 'Coord_UTM1': 'Coord_UTM1', 'Coord_long': 'Coord_long', 'Coord_lati': 'Coord_lati', 'Altitud': 'Altitud', 'Unidad_mor': 'Unidad_mor', 'Unidad_ter': 'Unidad_ter', 'Unidad_te1': 'Unidad_te1', 'Orientaci1': 'Orientaci1', 'Emplazamie': 'Emplazamie', 'Erea': 'Erea', 'Poblacimn_': 'Poblacimn_', 'Dinlmica_a': 'Dinlmica_a', 'Apariencia': 'Apariencia', 'ESP_NAT_LI': 'ESP_NAT_LI', 'ESP_NAT_RR': 'ESP_NAT_RR', 'ESP_NAT_ZE': 'ESP_NAT_ZE', 'MorfologZa': 'MorfologZa', 'MorfologZ1': 'MorfologZ1', 'Densidad_o': 'Densidad_o', 'Material_c': 'Material_c', 'Material_f': 'Material_f', 'Tipologla_': 'Tipologla_', 'Espacios_p': 'Espacios_p', 'Red_camino': 'Red_camino', 'Arq_relig_': 'Arq_relig_', 'Arq_relig1': 'Arq_relig1', 'Arq_relig2': 'Arq_relig2', 'Arq_relig3': 'Arq_relig3', 'Arq_civil_': 'Arq_civil_', 'Arq_civil1': 'Arq_civil1', 'Arq_civil2': 'Arq_civil2', 'Arq_civil3': 'Arq_civil3', 'Arq_pub_es': 'Arq_pub_es', 'Arq_pub_pa': 'Arq_pub_pa', 'Arq_pub_cs': 'Arq_pub_cs', 'Arq_pub_ot': 'Arq_pub_ot', 'Arq_otras_': 'Arq_otras_', 'Arq_otras1': 'Arq_otras1', 'Arq_otras2': 'Arq_otras2', 'Arq_otras3': 'Arq_otras3', 'Veg_auto_c': 'Veg_auto_c', 'Veg_auto_1': 'Veg_auto_1', 'Veg_auto_o': 'Veg_auto_o', 'Veg_aloc_p': 'Veg_aloc_p', 'Veg_aloc_a': 'Veg_aloc_a', 'Veg_aloc_o': 'Veg_aloc_o', 'Veg_jardin': 'Veg_jardin', 'Veg_jardi1': 'Veg_jardi1', 'Veg_jardi2': 'Veg_jardi2', 'Veg_forest': 'Veg_forest', 'Veg_fores1': 'Veg_fores1', 'Veg_fores2': 'Veg_fores2', 'Herreos_s_': 'Herreos_s_', 'Elem_etno_': 'Elem_etno_', 'Elem_etno1': 'Elem_etno1', 'Elem_etno2': 'Elem_etno2', 'Elem_etno3': 'Elem_etno3', 'Elem_etno4': 'Elem_etno4', 'Elem_etno5': 'Elem_etno5', 'Morfologo2': 'Morfologo2', 'Entorno_pr': 'Entorno_pr', 'Calidad_es': 'Calidad_es', 'Calidad_pa': 'Calidad_pa', 'Calidad_co': 'Calidad_co', 'Calidad_ed': 'Calidad_ed', 'Calidad_p1': 'Calidad_p1', 'Propuesta_': 'Propuesta_', 'Observaci1': 'Observaci1', 'GEOMETRY_s': 'GEOMETRY_s', 'ESTADO': 'ESTADO', 'Autor_dato': 'Autor_dato', 'Autor_dat1': 'Autor_dat1', 'Autor_dat2': 'Autor_dat2', 'N_GRUPO': 'N_GRUPO', 'Fecha_dato': 'Fecha_dato', 'TUTOR1': 'TUTOR1', 'TUTOR2': 'TUTOR2', 'links_carp': 'links_carp', 'links_pdf': 'links_pdf', 'links_orto': 'links_orto', 'links_ort1': 'links_ort1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NcleosUrbanos_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'clasif': 'clasif', 'uso_global': 'uso_global', 'nombre': 'nombre', 'etiqueta': 'etiqueta', 'ID_Concejo': 'ID_Concejo', 'INSTRUMENT': 'INSTRUMENT', 'ID_RUA': 'ID_RUA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Concejos_Asturias_OFICIAL_5.set('fieldAliases', {'codigo_ine': 'codigo_ine', 'concejo': 'concejo', 'conceyu': 'conceyu', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Comarcas_6.set('fieldAliases', {'fid': 'fid', 'Comarcas': 'Comarcas', });
lyr_Espacios_RN2000_7.set('fieldAliases', {'SITE_CODE': 'SITE_CODE', 'SITE_NAME': 'SITE_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'TIPO': 'TIPO', 'IG': 'IG', });
lyr_Habitats_Interes_Comunitario_5000_8.set('fieldAliases', {'natura2000': 'natura2000', 'id_pol': 'id_pol', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Parque_Nacional_9.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Nombre': 'Nombre', 'IG': 'IG', });
lyr_Parques_Naturales_10.set('fieldAliases', {'ZONA': 'ZONA', 'SIGLAS': 'SIGLAS', 'IG': 'IG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NOMBRE': 'NOMBRE', });
lyr_Reservas_Naturales_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZONA': 'ZONA', 'IG': 'IG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NOMBRE': 'NOMBRE', });
lyr_Paisajes_Protegidos_12.set('fieldAliases', {'TIPOZONA': 'TIPOZONA', 'IG': 'IG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NOMBRE': 'NOMBRE', });
lyr_Monumentos_Naturales_Poligonos_13.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'IG': 'IG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Número': 'Número', });
lyr_Monumentos_Naturales_Puntos_14.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'IG': 'IG', 'X': 'X', 'Y': 'Y', 'Número': 'Número', });
lyr_Reservas_Biosfera_15.set('fieldAliases', {'nombre': 'nombre', 'zonif': 'zonif', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'IG': 'IG', });
lyr_Humedales_Ramsar_16.set('fieldAliases', {'RAM_CODE': 'RAM_CODE', 'RAM_NAME': 'RAM_NAME', 'RAM_BOE': 'RAM_BOE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'IG': 'IG', });
lyr_BICs_Area_17.set('fieldAliases', {'id': 'id', 'ca_codigo': 'ca_codigo', 'dl_nombre': 'dl_nombre', 'cn_categor': 'cn_categor', 'te_refmini': 'te_refmini', 'te_datacio': 'te_datacio', 'te_usoori': 'te_usoori', 'te_usoact': 'te_usoact', 'te_integri': 'te_integri', 'te_periodo': 'te_periodo', 'cn_tipolog': 'cn_tipolog', 'cn_tipobic': 'cn_tipobic', 'cn_utmz': 'cn_utmz', 'te_acceso': 'te_acceso', 'te_localid': 'te_localid', 'te_parroqu': 'te_parroqu', 'te_municip': 'te_municip', 'te_provinc': 'te_provinc', 'te_autonom': 'te_autonom', 'te_pais': 'te_pais', 'cn_actuaci': 'cn_actuaci', 'te_estadmo': 'te_estadmo', 'te_incoaci': 'te_incoaci', 'te_declara': 'te_declara', 'te_entinco': 'te_entinco', 'te_entdecl': 'te_entdecl', 'te_pblinco': 'te_pblinco', 'te_pbldecl': 'te_pbldecl', 'te_pblento': 'te_pblento', 'te_pblinen': 'te_pblinen', 'cn_estento': 'cn_estento', 'te_estiloa': 'te_estiloa', 'te_cronolo': 'te_cronolo', 'superficie': 'superficie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_BICs_Puntos_18.set('fieldAliases', {'codigo': 'codigo', 'nombre': 'nombre', 'bol_declar': 'bol_declar', 'bol_entorn': 'bol_entorn', 'x_utm_etrs': 'x_utm_etrs', 'y_utm_etrs': 'y_utm_etrs', 'longitud_w': 'longitud_w', 'latitud': 'latitud', 'ficha_bic': 'ficha_bic', 'concejo': 'concejo', 'localidad': 'localidad', });
lyr_BICs_Entorno_19.set('fieldAliases', {'id': 'id', 'ca_codigo': 'ca_codigo', 'dl_nombre': 'dl_nombre', 'cn_categor': 'cn_categor', 'te_refmini': 'te_refmini', 'te_datacio': 'te_datacio', 'cn_tipolog': 'cn_tipolog', 'cn_tipobic': 'cn_tipobic', 'cn_utmz': 'cn_utmz', 'te_acceso': 'te_acceso', 'te_localid': 'te_localid', 'te_parroqu': 'te_parroqu', 'te_municip': 'te_municip', 'te_provinc': 'te_provinc', 'te_autonom': 'te_autonom', 'te_pais': 'te_pais', 'cn_actuaci': 'cn_actuaci', 'te_estadmo': 'te_estadmo', 'te_incoaci': 'te_incoaci', 'te_declara': 'te_declara', 'te_entinco': 'te_entinco', 'te_entdecl': 'te_entdecl', 'te_pblinco': 'te_pblinco', 'te_pbldecl': 'te_pbldecl', 'te_pblento': 'te_pblento', 'te_pblinen': 'te_pblinen', 'cn_estento': 'cn_estento', 'te_estiloa': 'te_estiloa', 'te_cronolo': 'te_cronolo', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Ruta_Plata_20.set('fieldAliases', {'tipo': 'tipo', 'cod': 'cod', 'shape_Leng': 'shape_Leng', });
lyr_BienesIPCAenCaminoCosta_21.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCa': 'nationalCa', 'pos': 'pos', 'layer': 'layer', 'path': 'path', 'Bienes IPC': 'Bienes IPC', 'Bienes I_1': 'Bienes I_1', 'Bienes I_2': 'Bienes I_2', });
lyr_BienesIPCAenRI_22.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCa': 'nationalCa', 'pos': 'pos', 'layer': 'layer', 'path': 'path', 'OBJECTID': 'OBJECTID', 'clasif': 'clasif', 'uso_global': 'uso_global', 'nombre': 'nombre', 'etiqueta': 'etiqueta', 'ID_Concejo': 'ID_Concejo', 'INSTRUMENT': 'INSTRUMENT', 'ID_RUA': 'ID_RUA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Bienes IPC': 'Bienes IPC', 'Bienes I_1': 'Bienes I_1', 'Bienes I_2': 'Bienes I_2', });
lyr_Elementosdeinteres_23.set('fieldAliases', {'id': 'id', 'descripcio': 'descripcio', });
lyr_Injustificado_inexistente_24.set('fieldAliases', {'id': 'id', 'Descripcio': 'Descripcio', });
lyr_Propuesta_Localizaciones_25.set('fieldAliases', {'id': 'id', 'Descripcio': 'Descripcio', });
lyr_Propuesta_VarianteItinerario_26.set('fieldAliases', {'id': 'id', 'Descripcio': 'Descripcio', });
lyr_PuntoN_CrucePeligroso_27.set('fieldAliases', {'id': 'id', });
lyr_PuntosNegros_28.set('fieldAliases', {'id': 'id', 'Descripcio': 'Descripcio', });
lyr_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29.set('fieldAliases', {'ALT': 'ALT', 'CRITERIO': 'CRITERIO', 'VERSION': 'VERSION', 'AREA_HA': 'AREA_HA', 'N_PARTES': 'N_PARTES', });
lyr_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30.set('fieldAliases', {'ALT': 'ALT', 'CRITERIO': 'CRITERIO', 'VERSION': 'VERSION', 'AREA_HA': 'AREA_HA', 'N_PARTES': 'N_PARTES', });
lyr_CaminoEnlace_31.set('fieldAliases', {'etapa': 'etapa', 'tipo': 'tipo', 'etapadenom': 'etapadenom', 'pdf_actu': 'pdf_actu', 'pdf_elem': 'pdf_elem', 'pdf_gene': 'pdf_gene', 'pdf_ruta': 'pdf_ruta', 'pdf_seña': 'pdf_seña', 'codigo': 'codigo', 'grupo': 'grupo', 'plantacion': 'plantacion', 'pdf_etapa': 'pdf_etapa', 'shape_Leng': 'shape_Leng', });
lyr_CaminodelSalvador_32.set('fieldAliases', {'etapa': 'etapa', 'tipo': 'tipo', 'etapadenom': 'etapadenom', 'pdf_actu': 'pdf_actu', 'pdf_elem': 'pdf_elem', 'pdf_gene': 'pdf_gene', 'pdf_ruta': 'pdf_ruta', 'pdf_seña': 'pdf_seña', 'codigo': 'codigo', 'grupo': 'grupo', 'plantacion': 'plantacion', 'pdf_etapa': 'pdf_etapa', 'shape_Leng': 'shape_Leng', });
lyr_CaminoPrimitivo_33.set('fieldAliases', {'etapa': 'etapa', 'tipo': 'tipo', 'etapadenom': 'etapadenom', 'pdf_actu': 'pdf_actu', 'pdf_elem': 'pdf_elem', 'pdf_gene': 'pdf_gene', 'pdf_ruta': 'pdf_ruta', 'pdf_seña': 'pdf_seña', 'codigo': 'codigo', 'grupo': 'grupo', 'plantacion': 'plantacion', 'pdf_etapa': 'pdf_etapa', 'shape_Leng': 'shape_Leng', });
lyr_CaminodelaCosta_34.set('fieldAliases', {'etapa': 'etapa', 'tipo': 'tipo', 'etapadenom': 'etapadenom', 'pdf_actu': 'pdf_actu', 'pdf_elem': 'pdf_elem', 'pdf_gene': 'pdf_gene', 'pdf_ruta': 'pdf_ruta', 'pdf_seña': 'pdf_seña', 'codigo': 'codigo', 'grupo': 'grupo', 'plantacion': 'plantacion', 'pdf_etapa': 'pdf_etapa', 'shape_Leng': 'shape_Leng', });
lyr_AmbitoOrig_35.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCa': 'nationalCa', 'pos': 'pos', 'layer': 'layer', 'path': 'path', 'fid_3': 'fid_3', 'gml_id_2': 'gml_id_2', 'areaValu_1': 'areaValu_1', 'areaValu_2': 'areaValu_2', 'beginLif_1': 'beginLif_1', 'endLifes_1': 'endLifes_1', 'localId_2': 'localId_2', 'namespace_': 'namespace_', 'label_2': 'label_2', 'national_1': 'national_1', 'pos_2': 'pos_2', 'layer_2': 'layer_2', 'path_2': 'path_2', 'OBJECTID': 'OBJECTID', 'clasif': 'clasif', 'uso_global': 'uso_global', 'nombre': 'nombre', 'etiqueta': 'etiqueta', 'ID_Concejo': 'ID_Concejo', 'INSTRUMENT': 'INSTRUMENT', 'ID_RUA': 'ID_RUA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'fid_2': 'fid_2', 'etapa': 'etapa', 'tipo': 'tipo', 'etapadenom': 'etapadenom', 'pdf_actu': 'pdf_actu', 'pdf_elem': 'pdf_elem', 'pdf_gene': 'pdf_gene', 'pdf_ruta': 'pdf_ruta', 'pdf_seña': 'pdf_seña', 'codigo': 'codigo', 'grupo': 'grupo', 'plantacion': 'plantacion', 'pdf_etapa': 'pdf_etapa', 'shape_Le_1': 'shape_Le_1', 'etapa_2': 'etapa_2', 'tipo_2': 'tipo_2', 'etapaden_1': 'etapaden_1', 'pdf_actu_2': 'pdf_actu_2', 'pdf_elem_2': 'pdf_elem_2', 'pdf_gene_2': 'pdf_gene_2', 'pdf_ruta_2': 'pdf_ruta_2', 'pdf_seña_': 'pdf_seña_', 'codigo_2': 'codigo_2', 'grupo_2': 'grupo_2', 'plantaci_1': 'plantaci_1', 'pdf_etapa_': 'pdf_etapa_', 'shape_Le_2': 'shape_Le_2', 'fid_4': 'fid_4', 'pdf_señ_1': 'pdf_señ_1', 'areaValu_3': 'areaValu_3', 'beginLif_2': 'beginLif_2', 'endLifes_2': 'endLifes_2', 'national_2': 'national_2', 'shape_Le_3': 'shape_Le_3', });
lyr_TrazadoOrig_36.set('fieldAliases', {'etapa': 'etapa', 'tipo': 'tipo', 'etapadenom': 'etapadenom', 'pdf_actu': 'pdf_actu', 'pdf_elem': 'pdf_elem', 'pdf_gene': 'pdf_gene', 'pdf_ruta': 'pdf_ruta', 'pdf_seña': 'pdf_seña', 'codigo': 'codigo', 'grupo': 'grupo', 'plantacion': 'plantacion', 'pdf_etapa': 'pdf_etapa', 'shape_Leng': 'shape_Leng', });
lyr_Principalescursosdeagua_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'thematicId': 'TextEdit', 'themaIdSch': 'TextEdit', 'beginLife': 'TextEdit', 'endLife': 'TextEdit', 'predecesId': 'TextEdit', 'predeIdSch': 'TextEdit', 'successoId': 'TextEdit', 'succeIdSch': 'TextEdit', 'wEvolution': 'TextEdit', 'nameTxtInt': 'TextEdit', 'nameText': 'TextEdit', 'nameTxtLan': 'TextEdit', 'desigBegin': 'TextEdit', 'desigEnd': 'TextEdit', 'zoneType': 'TextEdit', 'spZoneType': 'TextEdit', 'legisName': 'TextEdit', 'legisLink': 'TextEdit', 'legisLevel': 'TextEdit', 'rZoneId': 'TextEdit', 'rZoneIdSch': 'TextEdit', 'rTrnsId': 'TextEdit', 'rTrnsIdSch': 'TextEdit', 'sizeValue': 'TextEdit', 'sizeUoM': 'TextEdit', 'meanDepth': 'TextEdit', 'link': 'TextEdit', 'Naturaleza': 'TextEdit', 'Categoria': 'TextEdit', 'Tipo': 'TextEdit', 'LocCodPH3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LONG_m': 'TextEdit', 'LONG_km': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_NucRural_enCamino_3.set('fieldImages', {'ID_n': 'TextEdit', 'Nombre_noc': 'TextEdit', 'Nombre_no1': 'TextEdit', 'Parroquia': 'TextEdit', 'Parroquia_': 'TextEdit', 'Concejo': 'TextEdit', 'Concejo_as': 'TextEdit', 'ID_concejo': 'TextEdit', 'CLASIFICAC': 'TextEdit', 'CALIFICACI': 'TextEdit', 'SUBCATEGOR': 'TextEdit', 'TIPO': 'TextEdit', 'CODIGO': 'TextEdit', 'CLASE_DE_P': 'TextEdit', 'F_ACUERDO': 'DateTime', 'F_BOPA': 'DateTime', 'TEXTO_BOPA': 'DateTime', 'EQUIPO_RED': 'TextEdit', 'EXPTE_OT': 'TextEdit', 'NORMATIVA': 'TextEdit', 'NORMATIVA_': 'TextEdit', 'FICHA': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'MODIFICACI': 'TextEdit', 'Coord_UTM_': 'TextEdit', 'Coord_UTM1': 'TextEdit', 'Coord_long': 'TextEdit', 'Coord_lati': 'TextEdit', 'Altitud': 'TextEdit', 'Unidad_mor': 'TextEdit', 'Unidad_ter': 'TextEdit', 'Unidad_te1': 'TextEdit', 'Orientaci1': 'TextEdit', 'Emplazamie': 'TextEdit', 'Erea': 'TextEdit', 'Poblacimn_': 'TextEdit', 'Dinlmica_a': 'TextEdit', 'Apariencia': 'TextEdit', 'ESP_NAT_LI': 'Range', 'ESP_NAT_RR': 'Range', 'ESP_NAT_ZE': 'Range', 'MorfologZa': 'TextEdit', 'MorfologZ1': 'TextEdit', 'Densidad_o': 'TextEdit', 'Material_c': 'TextEdit', 'Material_f': 'TextEdit', 'Tipologla_': 'TextEdit', 'Espacios_p': 'Range', 'Red_camino': 'TextEdit', 'Arq_relig_': 'Range', 'Arq_relig1': 'Range', 'Arq_relig2': 'Range', 'Arq_relig3': 'TextEdit', 'Arq_civil_': 'Range', 'Arq_civil1': 'Range', 'Arq_civil2': 'Range', 'Arq_civil3': 'TextEdit', 'Arq_pub_es': 'Range', 'Arq_pub_pa': 'Range', 'Arq_pub_cs': 'Range', 'Arq_pub_ot': 'TextEdit', 'Arq_otras_': 'Range', 'Arq_otras1': 'Range', 'Arq_otras2': 'Range', 'Arq_otras3': 'TextEdit', 'Veg_auto_c': 'Range', 'Veg_auto_1': 'Range', 'Veg_auto_o': 'TextEdit', 'Veg_aloc_p': 'Range', 'Veg_aloc_a': 'Range', 'Veg_aloc_o': 'TextEdit', 'Veg_jardin': 'Range', 'Veg_jardi1': 'Range', 'Veg_jardi2': 'TextEdit', 'Veg_forest': 'Range', 'Veg_fores1': 'Range', 'Veg_fores2': 'TextEdit', 'Herreos_s_': 'TextEdit', 'Elem_etno_': 'Range', 'Elem_etno1': 'Range', 'Elem_etno2': 'Range', 'Elem_etno3': 'Range', 'Elem_etno4': 'Range', 'Elem_etno5': 'TextEdit', 'Morfologo2': 'TextEdit', 'Entorno_pr': 'TextEdit', 'Calidad_es': 'TextEdit', 'Calidad_pa': 'TextEdit', 'Calidad_co': 'TextEdit', 'Calidad_ed': 'TextEdit', 'Calidad_p1': 'TextEdit', 'Propuesta_': 'TextEdit', 'Observaci1': 'TextEdit', 'GEOMETRY_s': 'TextEdit', 'ESTADO': 'TextEdit', 'Autor_dato': 'TextEdit', 'Autor_dat1': 'TextEdit', 'Autor_dat2': 'TextEdit', 'N_GRUPO': 'TextEdit', 'Fecha_dato': 'DateTime', 'TUTOR1': 'TextEdit', 'TUTOR2': 'TextEdit', 'links_carp': 'TextEdit', 'links_pdf': 'TextEdit', 'links_orto': 'TextEdit', 'links_ort1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NcleosUrbanos_4.set('fieldImages', {'OBJECTID': '', 'clasif': '', 'uso_global': '', 'nombre': '', 'etiqueta': '', 'ID_Concejo': '', 'INSTRUMENT': '', 'ID_RUA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Concejos_Asturias_OFICIAL_5.set('fieldImages', {'codigo_ine': '', 'concejo': '', 'conceyu': '', 'shape_Leng': '', 'shape_Area': '', });
lyr_Comarcas_6.set('fieldImages', {'fid': '', 'Comarcas': '', });
lyr_Espacios_RN2000_7.set('fieldImages', {'SITE_CODE': 'TextEdit', 'SITE_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'TIPO': 'TextEdit', 'IG': 'TextEdit', });
lyr_Habitats_Interes_Comunitario_5000_8.set('fieldImages', {'natura2000': 'TextEdit', 'id_pol': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parque_Nacional_9.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nombre': 'TextEdit', 'IG': 'TextEdit', });
lyr_Parques_Naturales_10.set('fieldImages', {'ZONA': 'TextEdit', 'SIGLAS': 'TextEdit', 'IG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Reservas_Naturales_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'ZONA': 'TextEdit', 'IG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Paisajes_Protegidos_12.set('fieldImages', {'TIPOZONA': '', 'IG': '', 'Shape_Leng': '', 'Shape_Area': '', 'NOMBRE': '', });
lyr_Monumentos_Naturales_Poligonos_13.set('fieldImages', {'NOMBRE': 'TextEdit', 'IG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Número': 'TextEdit', });
lyr_Monumentos_Naturales_Puntos_14.set('fieldImages', {'NOMBRE': '', 'IG': '', 'X': '', 'Y': '', 'Número': '', });
lyr_Reservas_Biosfera_15.set('fieldImages', {'nombre': 'TextEdit', 'zonif': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'IG': 'TextEdit', });
lyr_Humedales_Ramsar_16.set('fieldImages', {'RAM_CODE': '', 'RAM_NAME': '', 'RAM_BOE': '', 'Shape_Leng': '', 'Shape_Area': '', 'IG': '', });
lyr_BICs_Area_17.set('fieldImages', {'id': '', 'ca_codigo': '', 'dl_nombre': '', 'cn_categor': '', 'te_refmini': '', 'te_datacio': '', 'te_usoori': '', 'te_usoact': '', 'te_integri': '', 'te_periodo': '', 'cn_tipolog': '', 'cn_tipobic': '', 'cn_utmz': '', 'te_acceso': '', 'te_localid': '', 'te_parroqu': '', 'te_municip': '', 'te_provinc': '', 'te_autonom': '', 'te_pais': '', 'cn_actuaci': '', 'te_estadmo': '', 'te_incoaci': '', 'te_declara': '', 'te_entinco': '', 'te_entdecl': '', 'te_pblinco': '', 'te_pbldecl': '', 'te_pblento': '', 'te_pblinen': '', 'cn_estento': '', 'te_estiloa': '', 'te_cronolo': '', 'superficie': '', 'shape_Leng': '', 'shape_Area': '', });
lyr_BICs_Puntos_18.set('fieldImages', {'codigo': '', 'nombre': '', 'bol_declar': '', 'bol_entorn': '', 'x_utm_etrs': '', 'y_utm_etrs': '', 'longitud_w': '', 'latitud': '', 'ficha_bic': '', 'concejo': '', 'localidad': '', });
lyr_BICs_Entorno_19.set('fieldImages', {'id': 'TextEdit', 'ca_codigo': 'TextEdit', 'dl_nombre': 'TextEdit', 'cn_categor': 'TextEdit', 'te_refmini': 'TextEdit', 'te_datacio': 'TextEdit', 'cn_tipolog': 'TextEdit', 'cn_tipobic': 'TextEdit', 'cn_utmz': 'TextEdit', 'te_acceso': 'TextEdit', 'te_localid': 'TextEdit', 'te_parroqu': 'TextEdit', 'te_municip': 'TextEdit', 'te_provinc': 'TextEdit', 'te_autonom': 'TextEdit', 'te_pais': 'TextEdit', 'cn_actuaci': 'TextEdit', 'te_estadmo': 'TextEdit', 'te_incoaci': 'TextEdit', 'te_declara': 'TextEdit', 'te_entinco': 'TextEdit', 'te_entdecl': 'TextEdit', 'te_pblinco': 'TextEdit', 'te_pbldecl': 'TextEdit', 'te_pblento': 'TextEdit', 'te_pblinen': 'TextEdit', 'cn_estento': 'TextEdit', 'te_estiloa': 'TextEdit', 'te_cronolo': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Ruta_Plata_20.set('fieldImages', {'tipo': '', 'cod': '', 'shape_Leng': '', });
lyr_BienesIPCAenCaminoCosta_21.set('fieldImages', {'fid': '', 'gml_id': '', 'areaValue': '', 'areaValue_': '', 'beginLifes': '', 'endLifespa': '', 'localId': '', 'namespace': '', 'label': '', 'nationalCa': '', 'pos': '', 'layer': '', 'path': '', 'Bienes IPC': '', 'Bienes I_1': '', 'Bienes I_2': '', });
lyr_BienesIPCAenRI_22.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'pos': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'OBJECTID': 'TextEdit', 'clasif': 'TextEdit', 'uso_global': 'TextEdit', 'nombre': 'TextEdit', 'etiqueta': 'TextEdit', 'ID_Concejo': 'TextEdit', 'INSTRUMENT': 'TextEdit', 'ID_RUA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Bienes IPC': 'TextEdit', 'Bienes I_1': 'TextEdit', 'Bienes I_2': 'TextEdit', });
lyr_Elementosdeinteres_23.set('fieldImages', {'id': 'TextEdit', 'descripcio': 'TextEdit', });
lyr_Injustificado_inexistente_24.set('fieldImages', {'id': '', 'Descripcio': '', });
lyr_Propuesta_Localizaciones_25.set('fieldImages', {'id': '', 'Descripcio': '', });
lyr_Propuesta_VarianteItinerario_26.set('fieldImages', {'id': '', 'Descripcio': '', });
lyr_PuntoN_CrucePeligroso_27.set('fieldImages', {'id': '', });
lyr_PuntosNegros_28.set('fieldImages', {'id': '', 'Descripcio': '', });
lyr_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29.set('fieldImages', {'ALT': 'TextEdit', 'CRITERIO': 'TextEdit', 'VERSION': 'TextEdit', 'AREA_HA': 'TextEdit', 'N_PARTES': 'TextEdit', });
lyr_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30.set('fieldImages', {'ALT': 'TextEdit', 'CRITERIO': 'TextEdit', 'VERSION': 'TextEdit', 'AREA_HA': 'TextEdit', 'N_PARTES': 'TextEdit', });
lyr_CaminoEnlace_31.set('fieldImages', {'etapa': '', 'tipo': '', 'etapadenom': '', 'pdf_actu': '', 'pdf_elem': '', 'pdf_gene': '', 'pdf_ruta': '', 'pdf_seña': '', 'codigo': '', 'grupo': '', 'plantacion': '', 'pdf_etapa': '', 'shape_Leng': '', });
lyr_CaminodelSalvador_32.set('fieldImages', {'etapa': '', 'tipo': '', 'etapadenom': '', 'pdf_actu': '', 'pdf_elem': '', 'pdf_gene': '', 'pdf_ruta': '', 'pdf_seña': '', 'codigo': '', 'grupo': '', 'plantacion': '', 'pdf_etapa': '', 'shape_Leng': '', });
lyr_CaminoPrimitivo_33.set('fieldImages', {'etapa': '', 'tipo': '', 'etapadenom': '', 'pdf_actu': '', 'pdf_elem': '', 'pdf_gene': '', 'pdf_ruta': '', 'pdf_seña': '', 'codigo': '', 'grupo': '', 'plantacion': '', 'pdf_etapa': '', 'shape_Leng': '', });
lyr_CaminodelaCosta_34.set('fieldImages', {'etapa': 'TextEdit', 'tipo': 'TextEdit', 'etapadenom': 'TextEdit', 'pdf_actu': 'TextEdit', 'pdf_elem': 'TextEdit', 'pdf_gene': 'TextEdit', 'pdf_ruta': 'TextEdit', 'pdf_seña': 'TextEdit', 'codigo': 'TextEdit', 'grupo': 'TextEdit', 'plantacion': 'TextEdit', 'pdf_etapa': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_AmbitoOrig_35.set('fieldImages', {'fid': '', 'gml_id': '', 'areaValue': '', 'areaValue_': '', 'beginLifes': '', 'endLifespa': '', 'localId': '', 'namespace': '', 'label': '', 'nationalCa': '', 'pos': '', 'layer': '', 'path': '', 'fid_3': '', 'gml_id_2': '', 'areaValu_1': '', 'areaValu_2': '', 'beginLif_1': '', 'endLifes_1': '', 'localId_2': '', 'namespace_': '', 'label_2': '', 'national_1': '', 'pos_2': '', 'layer_2': '', 'path_2': '', 'OBJECTID': '', 'clasif': '', 'uso_global': '', 'nombre': '', 'etiqueta': '', 'ID_Concejo': '', 'INSTRUMENT': '', 'ID_RUA': '', 'Shape_Leng': '', 'Shape_Area': '', 'fid_2': '', 'etapa': '', 'tipo': '', 'etapadenom': '', 'pdf_actu': '', 'pdf_elem': '', 'pdf_gene': '', 'pdf_ruta': '', 'pdf_seña': '', 'codigo': '', 'grupo': '', 'plantacion': '', 'pdf_etapa': '', 'shape_Le_1': '', 'etapa_2': '', 'tipo_2': '', 'etapaden_1': '', 'pdf_actu_2': '', 'pdf_elem_2': '', 'pdf_gene_2': '', 'pdf_ruta_2': '', 'pdf_seña_': '', 'codigo_2': '', 'grupo_2': '', 'plantaci_1': '', 'pdf_etapa_': '', 'shape_Le_2': '', 'fid_4': '', 'pdf_señ_1': '', 'areaValu_3': '', 'beginLif_2': '', 'endLifes_2': '', 'national_2': '', 'shape_Le_3': '', });
lyr_TrazadoOrig_36.set('fieldImages', {'etapa': '', 'tipo': '', 'etapadenom': '', 'pdf_actu': '', 'pdf_elem': '', 'pdf_gene': '', 'pdf_ruta': '', 'pdf_seña': '', 'codigo': '', 'grupo': '', 'plantacion': '', 'pdf_etapa': '', 'shape_Leng': '', });
lyr_Principalescursosdeagua_2.set('fieldLabels', {'OBJECTID': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'thematicId': 'no label', 'themaIdSch': 'no label', 'beginLife': 'no label', 'endLife': 'no label', 'predecesId': 'no label', 'predeIdSch': 'no label', 'successoId': 'no label', 'succeIdSch': 'no label', 'wEvolution': 'no label', 'nameTxtInt': 'no label', 'nameText': 'no label', 'nameTxtLan': 'no label', 'desigBegin': 'no label', 'desigEnd': 'no label', 'zoneType': 'no label', 'spZoneType': 'no label', 'legisName': 'no label', 'legisLink': 'no label', 'legisLevel': 'no label', 'rZoneId': 'no label', 'rZoneIdSch': 'no label', 'rTrnsId': 'no label', 'rTrnsIdSch': 'no label', 'sizeValue': 'no label', 'sizeUoM': 'no label', 'meanDepth': 'no label', 'link': 'no label', 'Naturaleza': 'no label', 'Categoria': 'no label', 'Tipo': 'no label', 'LocCodPH3': 'no label', 'Shape_Leng': 'no label', 'LONG_m': 'no label', 'LONG_km': 'no label', 'Shape_STLe': 'no label', });
lyr_NucRural_enCamino_3.set('fieldLabels', {'ID_n': 'no label', 'Nombre_noc': 'no label', 'Nombre_no1': 'no label', 'Parroquia': 'no label', 'Parroquia_': 'no label', 'Concejo': 'no label', 'Concejo_as': 'no label', 'ID_concejo': 'no label', 'CLASIFICAC': 'no label', 'CALIFICACI': 'no label', 'SUBCATEGOR': 'no label', 'TIPO': 'no label', 'CODIGO': 'no label', 'CLASE_DE_P': 'no label', 'F_ACUERDO': 'no label', 'F_BOPA': 'no label', 'TEXTO_BOPA': 'no label', 'EQUIPO_RED': 'no label', 'EXPTE_OT': 'no label', 'NORMATIVA': 'no label', 'NORMATIVA_': 'no label', 'FICHA': 'no label', 'OBSERVACIO': 'no label', 'MODIFICACI': 'no label', 'Coord_UTM_': 'no label', 'Coord_UTM1': 'no label', 'Coord_long': 'no label', 'Coord_lati': 'no label', 'Altitud': 'no label', 'Unidad_mor': 'no label', 'Unidad_ter': 'no label', 'Unidad_te1': 'no label', 'Orientaci1': 'no label', 'Emplazamie': 'no label', 'Erea': 'no label', 'Poblacimn_': 'no label', 'Dinlmica_a': 'no label', 'Apariencia': 'no label', 'ESP_NAT_LI': 'no label', 'ESP_NAT_RR': 'no label', 'ESP_NAT_ZE': 'no label', 'MorfologZa': 'no label', 'MorfologZ1': 'no label', 'Densidad_o': 'no label', 'Material_c': 'no label', 'Material_f': 'no label', 'Tipologla_': 'no label', 'Espacios_p': 'no label', 'Red_camino': 'no label', 'Arq_relig_': 'no label', 'Arq_relig1': 'no label', 'Arq_relig2': 'no label', 'Arq_relig3': 'no label', 'Arq_civil_': 'no label', 'Arq_civil1': 'no label', 'Arq_civil2': 'no label', 'Arq_civil3': 'no label', 'Arq_pub_es': 'no label', 'Arq_pub_pa': 'no label', 'Arq_pub_cs': 'no label', 'Arq_pub_ot': 'no label', 'Arq_otras_': 'no label', 'Arq_otras1': 'no label', 'Arq_otras2': 'no label', 'Arq_otras3': 'no label', 'Veg_auto_c': 'no label', 'Veg_auto_1': 'no label', 'Veg_auto_o': 'no label', 'Veg_aloc_p': 'no label', 'Veg_aloc_a': 'no label', 'Veg_aloc_o': 'no label', 'Veg_jardin': 'no label', 'Veg_jardi1': 'no label', 'Veg_jardi2': 'no label', 'Veg_forest': 'no label', 'Veg_fores1': 'no label', 'Veg_fores2': 'no label', 'Herreos_s_': 'no label', 'Elem_etno_': 'no label', 'Elem_etno1': 'no label', 'Elem_etno2': 'no label', 'Elem_etno3': 'no label', 'Elem_etno4': 'no label', 'Elem_etno5': 'no label', 'Morfologo2': 'no label', 'Entorno_pr': 'no label', 'Calidad_es': 'no label', 'Calidad_pa': 'no label', 'Calidad_co': 'no label', 'Calidad_ed': 'no label', 'Calidad_p1': 'no label', 'Propuesta_': 'no label', 'Observaci1': 'no label', 'GEOMETRY_s': 'no label', 'ESTADO': 'no label', 'Autor_dato': 'no label', 'Autor_dat1': 'no label', 'Autor_dat2': 'no label', 'N_GRUPO': 'no label', 'Fecha_dato': 'no label', 'TUTOR1': 'no label', 'TUTOR2': 'no label', 'links_carp': 'no label', 'links_pdf': 'no label', 'links_orto': 'no label', 'links_ort1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_NcleosUrbanos_4.set('fieldLabels', {'OBJECTID': 'no label', 'clasif': 'no label', 'uso_global': 'no label', 'nombre': 'no label', 'etiqueta': 'no label', 'ID_Concejo': 'no label', 'INSTRUMENT': 'no label', 'ID_RUA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Concejos_Asturias_OFICIAL_5.set('fieldLabels', {'codigo_ine': 'no label', 'concejo': 'no label', 'conceyu': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_Comarcas_6.set('fieldLabels', {'fid': 'no label', 'Comarcas': 'no label', });
lyr_Espacios_RN2000_7.set('fieldLabels', {'SITE_CODE': 'no label', 'SITE_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'TIPO': 'no label', 'IG': 'no label', });
lyr_Habitats_Interes_Comunitario_5000_8.set('fieldLabels', {'natura2000': 'no label', 'id_pol': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Parque_Nacional_9.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Nombre': 'no label', 'IG': 'no label', });
lyr_Parques_Naturales_10.set('fieldLabels', {'ZONA': 'no label', 'SIGLAS': 'no label', 'IG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NOMBRE': 'no label', });
lyr_Reservas_Naturales_11.set('fieldLabels', {'OBJECTID': 'no label', 'ZONA': 'no label', 'IG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NOMBRE': 'no label', });
lyr_Paisajes_Protegidos_12.set('fieldLabels', {'TIPOZONA': 'no label', 'IG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NOMBRE': 'no label', });
lyr_Monumentos_Naturales_Poligonos_13.set('fieldLabels', {'NOMBRE': 'no label', 'IG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Número': 'no label', });
lyr_Monumentos_Naturales_Puntos_14.set('fieldLabels', {'NOMBRE': 'no label', 'IG': 'no label', 'X': 'no label', 'Y': 'no label', 'Número': 'no label', });
lyr_Reservas_Biosfera_15.set('fieldLabels', {'nombre': 'no label', 'zonif': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'IG': 'no label', });
lyr_Humedales_Ramsar_16.set('fieldLabels', {'RAM_CODE': 'no label', 'RAM_NAME': 'no label', 'RAM_BOE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'IG': 'no label', });
lyr_BICs_Area_17.set('fieldLabels', {'id': 'no label', 'ca_codigo': 'no label', 'dl_nombre': 'no label', 'cn_categor': 'no label', 'te_refmini': 'no label', 'te_datacio': 'no label', 'te_usoori': 'no label', 'te_usoact': 'no label', 'te_integri': 'no label', 'te_periodo': 'no label', 'cn_tipolog': 'no label', 'cn_tipobic': 'no label', 'cn_utmz': 'no label', 'te_acceso': 'no label', 'te_localid': 'no label', 'te_parroqu': 'no label', 'te_municip': 'no label', 'te_provinc': 'no label', 'te_autonom': 'no label', 'te_pais': 'no label', 'cn_actuaci': 'no label', 'te_estadmo': 'no label', 'te_incoaci': 'no label', 'te_declara': 'no label', 'te_entinco': 'no label', 'te_entdecl': 'no label', 'te_pblinco': 'no label', 'te_pbldecl': 'no label', 'te_pblento': 'no label', 'te_pblinen': 'no label', 'cn_estento': 'no label', 'te_estiloa': 'no label', 'te_cronolo': 'no label', 'superficie': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_BICs_Puntos_18.set('fieldLabels', {'codigo': 'no label', 'nombre': 'no label', 'bol_declar': 'no label', 'bol_entorn': 'no label', 'x_utm_etrs': 'no label', 'y_utm_etrs': 'no label', 'longitud_w': 'no label', 'latitud': 'no label', 'ficha_bic': 'no label', 'concejo': 'no label', 'localidad': 'no label', });
lyr_BICs_Entorno_19.set('fieldLabels', {'id': 'no label', 'ca_codigo': 'no label', 'dl_nombre': 'no label', 'cn_categor': 'no label', 'te_refmini': 'no label', 'te_datacio': 'no label', 'cn_tipolog': 'no label', 'cn_tipobic': 'no label', 'cn_utmz': 'no label', 'te_acceso': 'no label', 'te_localid': 'no label', 'te_parroqu': 'no label', 'te_municip': 'no label', 'te_provinc': 'no label', 'te_autonom': 'no label', 'te_pais': 'no label', 'cn_actuaci': 'no label', 'te_estadmo': 'no label', 'te_incoaci': 'no label', 'te_declara': 'no label', 'te_entinco': 'no label', 'te_entdecl': 'no label', 'te_pblinco': 'no label', 'te_pbldecl': 'no label', 'te_pblento': 'no label', 'te_pblinen': 'no label', 'cn_estento': 'no label', 'te_estiloa': 'no label', 'te_cronolo': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_Ruta_Plata_20.set('fieldLabels', {'tipo': 'no label', 'cod': 'no label', 'shape_Leng': 'no label', });
lyr_BienesIPCAenCaminoCosta_21.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'pos': 'no label', 'layer': 'no label', 'path': 'no label', 'Bienes IPC': 'no label', 'Bienes I_1': 'no label', 'Bienes I_2': 'no label', });
lyr_BienesIPCAenRI_22.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'pos': 'no label', 'layer': 'no label', 'path': 'no label', 'OBJECTID': 'no label', 'clasif': 'no label', 'uso_global': 'no label', 'nombre': 'no label', 'etiqueta': 'no label', 'ID_Concejo': 'no label', 'INSTRUMENT': 'no label', 'ID_RUA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Bienes IPC': 'no label', 'Bienes I_1': 'no label', 'Bienes I_2': 'no label', });
lyr_Elementosdeinteres_23.set('fieldLabels', {'id': 'no label', 'descripcio': 'no label', });
lyr_Injustificado_inexistente_24.set('fieldLabels', {'id': 'no label', 'Descripcio': 'no label', });
lyr_Propuesta_Localizaciones_25.set('fieldLabels', {'id': 'no label', 'Descripcio': 'no label', });
lyr_Propuesta_VarianteItinerario_26.set('fieldLabels', {'id': 'no label', 'Descripcio': 'no label', });
lyr_PuntoN_CrucePeligroso_27.set('fieldLabels', {'id': 'no label', });
lyr_PuntosNegros_28.set('fieldLabels', {'id': 'no label', 'Descripcio': 'no label', });
lyr_ALT2_MODERADA_AMBITO_COMPLETO_V1_SHP_29.set('fieldLabels', {'ALT': 'no label', 'CRITERIO': 'no label', 'VERSION': 'no label', 'AREA_HA': 'no label', 'N_PARTES': 'no label', });
lyr_ALT1_RESTRICTIVA_AMBITO_COMPLETO_V1_SHP_30.set('fieldLabels', {'ALT': 'no label', 'CRITERIO': 'no label', 'VERSION': 'no label', 'AREA_HA': 'no label', 'N_PARTES': 'no label', });
lyr_CaminoEnlace_31.set('fieldLabels', {'etapa': 'no label', 'tipo': 'no label', 'etapadenom': 'no label', 'pdf_actu': 'no label', 'pdf_elem': 'no label', 'pdf_gene': 'no label', 'pdf_ruta': 'no label', 'pdf_seña': 'no label', 'codigo': 'no label', 'grupo': 'no label', 'plantacion': 'no label', 'pdf_etapa': 'no label', 'shape_Leng': 'no label', });
lyr_CaminodelSalvador_32.set('fieldLabels', {'etapa': 'no label', 'tipo': 'no label', 'etapadenom': 'no label', 'pdf_actu': 'no label', 'pdf_elem': 'no label', 'pdf_gene': 'no label', 'pdf_ruta': 'no label', 'pdf_seña': 'no label', 'codigo': 'no label', 'grupo': 'no label', 'plantacion': 'no label', 'pdf_etapa': 'no label', 'shape_Leng': 'no label', });
lyr_CaminoPrimitivo_33.set('fieldLabels', {'etapa': 'no label', 'tipo': 'no label', 'etapadenom': 'no label', 'pdf_actu': 'no label', 'pdf_elem': 'no label', 'pdf_gene': 'no label', 'pdf_ruta': 'no label', 'pdf_seña': 'no label', 'codigo': 'no label', 'grupo': 'no label', 'plantacion': 'no label', 'pdf_etapa': 'no label', 'shape_Leng': 'no label', });
lyr_CaminodelaCosta_34.set('fieldLabels', {'etapa': 'no label', 'tipo': 'no label', 'etapadenom': 'no label', 'pdf_actu': 'no label', 'pdf_elem': 'no label', 'pdf_gene': 'no label', 'pdf_ruta': 'no label', 'pdf_seña': 'no label', 'codigo': 'no label', 'grupo': 'no label', 'plantacion': 'no label', 'pdf_etapa': 'no label', 'shape_Leng': 'no label', });
lyr_AmbitoOrig_35.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_': 'no label', 'beginLifes': 'no label', 'endLifespa': 'no label', 'localId': 'no label', 'namespace': 'no label', 'label': 'no label', 'nationalCa': 'no label', 'pos': 'no label', 'layer': 'no label', 'path': 'no label', 'fid_3': 'no label', 'gml_id_2': 'no label', 'areaValu_1': 'no label', 'areaValu_2': 'no label', 'beginLif_1': 'no label', 'endLifes_1': 'no label', 'localId_2': 'no label', 'namespace_': 'no label', 'label_2': 'no label', 'national_1': 'no label', 'pos_2': 'no label', 'layer_2': 'no label', 'path_2': 'no label', 'OBJECTID': 'no label', 'clasif': 'no label', 'uso_global': 'no label', 'nombre': 'no label', 'etiqueta': 'no label', 'ID_Concejo': 'no label', 'INSTRUMENT': 'no label', 'ID_RUA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'fid_2': 'no label', 'etapa': 'no label', 'tipo': 'no label', 'etapadenom': 'no label', 'pdf_actu': 'no label', 'pdf_elem': 'no label', 'pdf_gene': 'no label', 'pdf_ruta': 'no label', 'pdf_seña': 'no label', 'codigo': 'no label', 'grupo': 'no label', 'plantacion': 'no label', 'pdf_etapa': 'no label', 'shape_Le_1': 'no label', 'etapa_2': 'no label', 'tipo_2': 'no label', 'etapaden_1': 'no label', 'pdf_actu_2': 'no label', 'pdf_elem_2': 'no label', 'pdf_gene_2': 'no label', 'pdf_ruta_2': 'no label', 'pdf_seña_': 'no label', 'codigo_2': 'no label', 'grupo_2': 'no label', 'plantaci_1': 'no label', 'pdf_etapa_': 'no label', 'shape_Le_2': 'no label', 'fid_4': 'no label', 'pdf_señ_1': 'no label', 'areaValu_3': 'no label', 'beginLif_2': 'no label', 'endLifes_2': 'no label', 'national_2': 'no label', 'shape_Le_3': 'no label', });
lyr_TrazadoOrig_36.set('fieldLabels', {'etapa': 'no label', 'tipo': 'no label', 'etapadenom': 'no label', 'pdf_actu': 'no label', 'pdf_elem': 'no label', 'pdf_gene': 'no label', 'pdf_ruta': 'no label', 'pdf_seña': 'no label', 'codigo': 'no label', 'grupo': 'no label', 'plantacion': 'no label', 'pdf_etapa': 'no label', 'shape_Leng': 'no label', });
lyr_TrazadoOrig_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});