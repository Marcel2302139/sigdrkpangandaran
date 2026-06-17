var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KABUPATENPANGANDARAN_1 = new ol.format.GeoJSON();
var features_KABUPATENPANGANDARAN_1 = format_KABUPATENPANGANDARAN_1.readFeatures(json_KABUPATENPANGANDARAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KABUPATENPANGANDARAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KABUPATENPANGANDARAN_1.addFeatures(features_KABUPATENPANGANDARAN_1);
var lyr_KABUPATENPANGANDARAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KABUPATENPANGANDARAN_1, 
                style: style_KABUPATENPANGANDARAN_1,
                popuplayertitle: 'KABUPATEN PANGANDARAN',
                interactive: true,
                title: '<img src="styles/legend/KABUPATENPANGANDARAN_1.png" /> KABUPATEN PANGANDARAN'
            });
var format_Desa_2 = new ol.format.GeoJSON();
var features_Desa_2 = format_Desa_2.readFeatures(json_Desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_2.addFeatures(features_Desa_2);
var lyr_Desa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_2, 
                style: style_Desa_2,
                popuplayertitle: 'Desa',
                interactive: true,
                title: '<img src="styles/legend/Desa_2.png" /> Desa'
            });
var format_KECAMATAN_3 = new ol.format.GeoJSON();
var features_KECAMATAN_3 = format_KECAMATAN_3.readFeatures(json_KECAMATAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_3.addFeatures(features_KECAMATAN_3);
var lyr_KECAMATAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATAN_3, 
                style: style_KECAMATAN_3,
                popuplayertitle: 'KECAMATAN',
                interactive: true,
                title: '<img src="styles/legend/KECAMATAN_3.png" /> KECAMATAN'
            });
var format_RSUD_4 = new ol.format.GeoJSON();
var features_RSUD_4 = format_RSUD_4.readFeatures(json_RSUD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSUD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSUD_4.addFeatures(features_RSUD_4);
var lyr_RSUD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSUD_4, 
                style: style_RSUD_4,
                popuplayertitle: 'RSUD',
                interactive: true,
                title: '<img src="styles/legend/RSUD_4.png" /> RSUD'
            });
var format_jalanarteri_5 = new ol.format.GeoJSON();
var features_jalanarteri_5 = format_jalanarteri_5.readFeatures(json_jalanarteri_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanarteri_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanarteri_5.addFeatures(features_jalanarteri_5);
var lyr_jalanarteri_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanarteri_5, 
                style: style_jalanarteri_5,
                popuplayertitle: 'jalanarteri',
                interactive: true,
                title: '<img src="styles/legend/jalanarteri_5.png" /> jalanarteri'
            });
var format_jalankolektor_6 = new ol.format.GeoJSON();
var features_jalankolektor_6 = format_jalankolektor_6.readFeatures(json_jalankolektor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalankolektor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalankolektor_6.addFeatures(features_jalankolektor_6);
var lyr_jalankolektor_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalankolektor_6, 
                style: style_jalankolektor_6,
                popuplayertitle: 'jalankolektor',
                interactive: true,
                title: '<img src="styles/legend/jalankolektor_6.png" /> jalankolektor'
            });
var format_jalanlokal_7 = new ol.format.GeoJSON();
var features_jalanlokal_7 = format_jalanlokal_7.readFeatures(json_jalanlokal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanlokal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanlokal_7.addFeatures(features_jalanlokal_7);
var lyr_jalanlokal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanlokal_7, 
                style: style_jalanlokal_7,
                popuplayertitle: 'jalanlokal',
                interactive: true,
                title: '<img src="styles/legend/jalanlokal_7.png" /> jalanlokal'
            });
var format_BLACKLINKSHP_8 = new ol.format.GeoJSON();
var features_BLACKLINKSHP_8 = format_BLACKLINKSHP_8.readFeatures(json_BLACKLINKSHP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLACKLINKSHP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKLINKSHP_8.addFeatures(features_BLACKLINKSHP_8);
var lyr_BLACKLINKSHP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKLINKSHP_8, 
                style: style_BLACKLINKSHP_8,
                popuplayertitle: 'BLACK LINK SHP',
                interactive: true,
    title: 'BLACK LINK SHP<br />\
    <img src="styles/legend/BLACKLINKSHP_8_0.png" /> JALAN RAYA BANJAR-PANGANDARAN<br />\
    <img src="styles/legend/BLACKLINKSHP_8_1.png" /> JALAN RAYA CIJULANG<br />\
    <img src="styles/legend/BLACKLINKSHP_8_2.png" /> JALAN RAYA PANGANDARAN-KALIPUCANG<br />' });
var format_BlackSpot_9 = new ol.format.GeoJSON();
var features_BlackSpot_9 = format_BlackSpot_9.readFeatures(json_BlackSpot_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlackSpot_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlackSpot_9.addFeatures(features_BlackSpot_9);
var lyr_BlackSpot_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlackSpot_9, 
                style: style_BlackSpot_9,
                popuplayertitle: 'BlackSpot',
                interactive: true,
                title: '<img src="styles/legend/BlackSpot_9.png" /> BlackSpot'
            });
var format_PUSKESMAS_10 = new ol.format.GeoJSON();
var features_PUSKESMAS_10 = format_PUSKESMAS_10.readFeatures(json_PUSKESMAS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_10.addFeatures(features_PUSKESMAS_10);
var lyr_PUSKESMAS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_10, 
                style: style_PUSKESMAS_10,
                popuplayertitle: 'PUSKESMAS',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_10.png" /> PUSKESMAS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KABUPATENPANGANDARAN_1.setVisible(true);lyr_Desa_2.setVisible(true);lyr_KECAMATAN_3.setVisible(true);lyr_RSUD_4.setVisible(true);lyr_jalanarteri_5.setVisible(true);lyr_jalankolektor_6.setVisible(true);lyr_jalanlokal_7.setVisible(true);lyr_BLACKLINKSHP_8.setVisible(true);lyr_BlackSpot_9.setVisible(true);lyr_PUSKESMAS_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KABUPATENPANGANDARAN_1,lyr_Desa_2,lyr_KECAMATAN_3,lyr_RSUD_4,lyr_jalanarteri_5,lyr_jalankolektor_6,lyr_jalanlokal_7,lyr_BLACKLINKSHP_8,lyr_BlackSpot_9,lyr_PUSKESMAS_10];
lyr_KABUPATENPANGANDARAN_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Kecamatan': 'Kecamatan', 'Jumlah Kejadian': 'Jumlah Kejadian', 'Jumlah Korban': 'Jumlah Korban', 'MD': 'MD', 'LB': 'LB', 'LR': 'LR', });
lyr_Desa_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'DESA': 'DESA', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'PROVINSI': 'PROVINSI', 'L_DESA_Ha': 'L_DESA_Ha', 'SumberData': 'SumberData', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas': 'Luas', });
lyr_KECAMATAN_3.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'Jumlah Kejadian': 'Jumlah Kejadian', 'Jumlah Korban': 'Jumlah Korban', 'MD': 'MD', 'LB': 'LB', 'LR': 'LR', });
lyr_RSUD_4.set('fieldAliases', {'NO': 'NO', 'Nama Rumah': 'Nama Rumah', 'Alamat': 'Alamat', 'Status RS': 'Status RS', 'Direktur': 'Direktur', 'NO_1': 'NO_1', 'Nama Labor': 'Nama Labor', 'Titik Koor': 'Titik Koor', 'field_9': 'field_9', });
lyr_jalanarteri_5.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_jalankolektor_6.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_jalanlokal_7.set('fieldAliases', {'Status_Jln': 'Status_Jln', 'Nama_Jln': 'Nama_Jln', 'Fungsi_Jln': 'Fungsi_Jln', 'SumberData': 'SumberData', 'Pjg_Jln_M': 'Pjg_Jln_M', 'Shape_Leng': 'Shape_Leng', });
lyr_BLACKLINKSHP_8.set('fieldAliases', {'id': 'id', 'NAMA JALAN': 'NAMA JALAN', 'PANJANG M': 'PANJANG M', });
lyr_BlackSpot_9.set('fieldAliases', {'NO': 'NO', 'TGL/BLN/TH': 'TGL/BLN/TH', 'WAKTU (WIB': 'WAKTU (WIB', 'KENDARAAN': 'KENDARAAN', 'TIPE TABRA': 'TIPE TABRA', 'PENYEBAB K': 'PENYEBAB K', 'MD': 'MD', 'LB': 'LB', 'LR': 'LR', 'KRONOLOGI': 'KRONOLOGI', 'TITIK KOOR': 'TITIK KOOR', 'field_12': 'field_12', });
lyr_PUSKESMAS_10.set('fieldAliases', {'NO': 'NO', 'Nama Puskesmas': 'Nama Puskesmas', 'Kabupaten': 'Kabupaten', 'Alamat Puskesmas': 'Alamat Puskesmas', 'Jenis Layanan': 'Jenis Layanan', 'Jumlah Tempat Tidur': 'Jumlah Tempat Tidur', 'Jumlah Ambulans': 'Jumlah Ambulans', 'Gambar': 'Gambar', 'Y': 'Y', 'X': 'X', });
lyr_KABUPATENPANGANDARAN_1.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Kecamatan': 'TextEdit', 'Jumlah Kejadian': 'TextEdit', 'Jumlah Korban': 'TextEdit', 'MD': 'TextEdit', 'LB': 'TextEdit', 'LR': 'TextEdit', });
lyr_Desa_2.set('fieldImages', {'OBJECTID_1': 'Range', 'DESA': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'PROVINSI': 'TextEdit', 'L_DESA_Ha': 'TextEdit', 'SumberData': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas': 'TextEdit', });
lyr_KECAMATAN_3.set('fieldImages', {'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Jumlah Kejadian': 'TextEdit', 'Jumlah Korban': 'TextEdit', 'MD': 'TextEdit', 'LB': 'TextEdit', 'LR': 'TextEdit', });
lyr_RSUD_4.set('fieldImages', {'NO': 'CheckBox', 'Nama Rumah': 'TextEdit', 'Alamat': 'TextEdit', 'Status RS': 'TextEdit', 'Direktur': 'TextEdit', 'NO_1': '', 'Nama Labor': '', 'Titik Koor': '', 'field_9': 'TextEdit', });
lyr_jalanarteri_5.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_jalankolektor_6.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_jalanlokal_7.set('fieldImages', {'Status_Jln': 'TextEdit', 'Nama_Jln': 'TextEdit', 'Fungsi_Jln': 'TextEdit', 'SumberData': 'TextEdit', 'Pjg_Jln_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_BLACKLINKSHP_8.set('fieldImages', {'id': 'TextEdit', 'NAMA JALAN': 'TextEdit', 'PANJANG M': 'TextEdit', });
lyr_BlackSpot_9.set('fieldImages', {'NO': 'Range', 'TGL/BLN/TH': '', 'WAKTU (WIB': '', 'KENDARAAN': '', 'TIPE TABRA': '', 'PENYEBAB K': '', 'MD': 'TextEdit', 'LB': 'TextEdit', 'LR': 'TextEdit', 'KRONOLOGI': 'TextEdit', 'TITIK KOOR': '', 'field_12': 'TextEdit', });
lyr_PUSKESMAS_10.set('fieldImages', {'NO': 'TextEdit', 'Nama Puskesmas': 'TextEdit', 'Kabupaten': 'TextEdit', 'Alamat Puskesmas': 'TextEdit', 'Jenis Layanan': 'TextEdit', 'Jumlah Tempat Tidur': 'TextEdit', 'Jumlah Ambulans': 'TextEdit', 'Gambar': 'ExternalResource', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_KABUPATENPANGANDARAN_1.set('fieldLabels', {'KDCPUM': 'inline label - visible with data', 'KDPKAB': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'PROVINSI': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Jumlah Kejadian': 'inline label - visible with data', 'Jumlah Korban': 'inline label - visible with data', 'MD': 'inline label - visible with data', 'LB': 'inline label - visible with data', 'LR': 'inline label - visible with data', });
lyr_Desa_2.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'DESA': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'PROVINSI': 'inline label - visible with data', 'L_DESA_Ha': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'Luas': 'inline label - visible with data', });
lyr_KECAMATAN_3.set('fieldLabels', {'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'Jumlah Kejadian': 'inline label - visible with data', 'Jumlah Korban': 'inline label - visible with data', 'MD': 'inline label - visible with data', 'LB': 'inline label - visible with data', 'LR': 'inline label - visible with data', });
lyr_RSUD_4.set('fieldLabels', {'NO': 'inline label - visible with data', 'Nama Rumah': 'inline label - visible with data', 'Alamat': 'inline label - visible with data', 'Status RS': 'inline label - visible with data', 'Direktur': 'inline label - visible with data', 'NO_1': 'inline label - visible with data', 'Nama Labor': 'inline label - visible with data', 'Titik Koor': 'inline label - visible with data', 'field_9': 'inline label - visible with data', });
lyr_jalanarteri_5.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_jalankolektor_6.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_jalanlokal_7.set('fieldLabels', {'Status_Jln': 'inline label - visible with data', 'Nama_Jln': 'inline label - visible with data', 'Fungsi_Jln': 'inline label - visible with data', 'SumberData': 'inline label - visible with data', 'Pjg_Jln_M': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', });
lyr_BLACKLINKSHP_8.set('fieldLabels', {'id': 'inline label - visible with data', 'NAMA JALAN': 'inline label - visible with data', 'PANJANG M': 'inline label - visible with data', });
lyr_BlackSpot_9.set('fieldLabels', {'NO': 'inline label - visible with data', 'TGL/BLN/TH': 'inline label - visible with data', 'WAKTU (WIB': 'inline label - visible with data', 'KENDARAAN': 'inline label - visible with data', 'TIPE TABRA': 'inline label - visible with data', 'PENYEBAB K': 'inline label - visible with data', 'MD': 'inline label - visible with data', 'LB': 'inline label - visible with data', 'LR': 'inline label - visible with data', 'KRONOLOGI': 'inline label - visible with data', 'TITIK KOOR': 'inline label - visible with data', 'field_12': 'inline label - visible with data', });
lyr_PUSKESMAS_10.set('fieldLabels', {'NO': 'inline label - visible with data', 'Nama Puskesmas': 'inline label - visible with data', 'Kabupaten': 'inline label - visible with data', 'Alamat Puskesmas': 'inline label - visible with data', 'Jenis Layanan': 'inline label - visible with data', 'Jumlah Tempat Tidur': 'inline label - visible with data', 'Jumlah Ambulans': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'X': 'inline label - visible with data', });
lyr_PUSKESMAS_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});