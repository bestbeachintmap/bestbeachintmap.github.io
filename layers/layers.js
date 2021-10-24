var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Koliinacijanobakterija_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Količina cijanobakterija",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Koliinacijanobakterija_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1520777.129935, 5577321.551944, 1568326.562938, 5618428.196037]
                            })
                        });
var lyr_Morskavegetacija_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Morska vegetacija",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Morskavegetacija_2.png",
    attributions: ' &middot; <a href="https://www.sentinel-hub.com/tos/">Sentinel Hub</a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1520777.129935, 5577321.551944, 1568326.562938, 5618428.196037]
                            })
                        });
var lyr_Zagaenje_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Zagađenje",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Zagaenje_3.png",
    attributions: ' &middot; <a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Copernicus</a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1520777.129935, 5577321.551944, 1568326.562938, 5618428.196037]
                            })
                        });

lyr_GoogleHybrid_0.setVisible(true);lyr_Koliinacijanobakterija_1.setVisible(true);lyr_Morskavegetacija_2.setVisible(true);lyr_Zagaenje_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Koliinacijanobakterija_1,lyr_Morskavegetacija_2,lyr_Zagaenje_3];
