/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Load Edge Commons
         yepnope({
         	load:	"http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	complete: function() {
         
         		// Setup store to save data
         		var stage = sym;
         		stage.setVariable("store", {});
      var selectedPartPrev;
      var cntr=0;
         		// Enable SVG access
         		EC.SVG.accessSVG(sym.$("russia_copy")).done(
         			function(svgDocument){
      
         				// Add event listener
         				svgDocument.addEventListener("hover", function(event) {
      
         					// Remember selected part
         					sym.setVariable("selectedPart", event.target);
      
      
         					// Get selected part of the svg 
      						var selectedPart = sym.getVariable("selectedPart");
      
         					// Set the color of the selected part
         					$(selectedPart).css("fill", "00BCDD");
      
      if(cntr>0){   					
         					$(selectedPartPrev).css("fill", "B7B7B7");
         					}
      						selectedPartPrev = selectedPart;
      cntr++;
      
         				// Show the id of the selected part in the textfield
         					sym.$("selectedPartTxt").html( event.target.id );
      
      						if (event.target.id == "RU-KO")
      						{
      						sym.$("selectedPartTxt2").html( "Республика Коми" );
      						sym.$("selectedPartTxt3").html( "http://minfin.rkomi.ru/minfin_rkomi/minfin_rbudj/budjet/" );
      						}
      
      						if (event.target.id == "RU-KEM")
      						{
      						sym.$("selectedPartTxt2").html( "Республика Марий Эл" );
      						sym.$("selectedPartTxt3").html( "http://mari-el.gov.ru/minfin/Pages/Budjprojekt.aspx" );
      						}
      
      						if (event.target.id == "RU-SA")
      						{sym.$("selectedPartTxt2").html( "Республика Саха" );
      						sym.$("selectedPartTxt3").html( "http://sakha.gov.ru/node/16970" );
      						}
      
      						if (event.target.id == "RU-SE")
      						{sym.$("selectedPartTxt2").html( "Республика Северная Осетия-Алания" );
      						sym.$("selectedPartTxt3").html( "http://www.mfrno-a.ru/login/otkrytyy_byudzhet.php" );
      						}
      
      						if (event.target.id == "RU-SPE")
      						{sym.$("selectedPartTxt2").html( "Санкт-Петербург" );
      						sym.$("selectedPartTxt3").html( "http://www.fincom.spb.ru/comfin/openbudjet/opendata.htm" );
      						}
      
      						if (event.target.id == "RU-SAR")
      						{sym.$("selectedPartTxt2").html( "Саратовская область" );
      						sym.$("selectedPartTxt3").html( "http://saratov.ifinmon.ru" );
      						}
      
      
      
      						//stage.getVariable("changeColor"));
      
         // Call global "changeColor()" function to set new color
         //var stage = sym.getComposition().getStage();
         //var changeColor = stage.getVariable("changeColor");
         //changeColor( $(e.currentTarget).css("background-color") );
      
      
      
         				});
         		});
      
         		// Define global function on stage level to change color
         		sym.setVariable("changeColor", function(color) {
      
         			// Get selected part of the svg 
         			var selectedPart = sym.getVariable("selectedPart");
      
         			// Set the color of the selected part
         			$(selectedPart).css("fill", color);
      
         			// Save to store
         			var store = sym.getComposition().getStage().getVariable("store");
         			store[selectedPart.id] = color;
         		});
      
         	}
         });
      

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-43901856");