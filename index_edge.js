/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'ubuntu, sans-serif': '<script src=\"http://use.edgefonts.net/ubuntu:n4,i4,n7,i7,n3,i3,n5,i5:all.js\"></script>',
            'ubuntu-condensed, sans-serif': '<script src=\"http://use.edgefonts.net/ubuntu-condensed:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'selectedPartTxt',
                            type: 'text',
                            rect: ['532px', '-34px', '242px', '28px', 'auto', 'auto'],
                            text: "Text",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'russia_copy',
                            type: 'image',
                            rect: ['-1px', '23px', '858px', '583px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"russia%20copy.svg",'0px','0px']
                        },
                        {
                            id: 'selectedPartTxt2',
                            type: 'text',
                            rect: ['591px', '94px', '242px', '28px', 'auto', 'auto'],
                            text: "Ya",
                            font: ['ubuntu, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['591px', '66px', '242px', '28px', 'auto', 'auto'],
                            text: "Ya",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'selectedPartTxt3',
                            type: 'text',
                            rect: ['591px', '121px', '242px', '28px', 'auto', 'auto'],
                            text: "Ya",
                            font: ['ubuntu-condensed, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['-743px', '-794px', '1182px', '80px', 'auto', 'auto'],
                            text: "ыыыыы<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '856px', '613px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-43901856");
