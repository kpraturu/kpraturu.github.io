/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

particlesJS("particles-js", 
	{"particles":
		{"number": 
			{"value":50,"density":
				{"enable":true,"value_area":800}
		},
	"color":{"value":"#ffffc6"},"shape":
							{"type":"circle","stroke":{"width":0,"color":"#000000"},
							"polygon":{"nb_sides":5},
							"image":{"src":"img/github.svg",
							"width":100,"height":100}},
							"opacity": {"value":0.5,
							"random":true,
							 "anim": {"enable":false,
							 		"speed":1,"opacity_min":0.1,"sync":false}
						 				},
			 				"size": {"value":10,"random":true,"anim":
			 						{"enable":false,"speed":40,"size_min":0.1,"sync":false}
			 						},
	 						"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},
	 						"move":{"enable":true,"speed":1.3,"direction":"bottom","random":false,
	 								"straight":false,"out_mode":"out","bounce":false,"attract":
	 										{"enable":false,"rotateX":600,"rotateY":1200}
 									}
		},
	"interactivity":{"detect_on":"canvas","events":
						{"onhover":{"enable":true,"mode":"bubble"},
					"onclick":{"enable":false,"mode":"repulse"},
					"resize":true
						},
					"modes":{
					"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},
					"repulse":{"distance":200,"duration":0.4}}
					},
	"retina_detect":true});