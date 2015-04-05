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
         // insert code to be run when the composition is fully loaded here
         
         /*
         d3.json("Node.json", function(error, root) {
         	var node = svg.selectAll(".node")
         
         	node.append("circle")
         	   .attr("x", 10)//function(d) { return d.value; })
         	   .attr("y", 10)//function(d) { return d.value; })
         	   .attr("r","10px")
               .style("fill", "aaaaaa");
         
         });
         */
         
         .chart div {
           font: 10px sans-serif;
           background-color: steelblue;
           text-align: right;
           padding: 3px;
           margin: 1px;
           color: white;
         }
         
         </style>
         <div class="chart">
           <div style="width: 40px;">4</div>
           <div style="width: 80px;">8</div>
           <div style="width: 150px;">15</div>
           <div style="width: 160px;">16</div>
           <div style="width: 230px;">23</div>
           <div style="width: 420px;">42</div>
         </div>

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-12071162");