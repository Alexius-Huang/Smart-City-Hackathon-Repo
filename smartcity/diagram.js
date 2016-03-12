(function (window) {

	function exampleData() {
		  return  [
		      { 
		        "label": "博士",
		        "value" : 29.76
		      } , 
		      { 
		        "label": "碩士",
		        "value" : 30
		      } , 
		      { 
		        "label": "學士",
		        "value" : 32.807
		      } , 
		      { 
		        "label": "高中職",
		        "value" : 196.459
		      } 
		    ];
		}

	window.drawPieChart = function(domStr, data) {
		nv.addGraph(function() {
		  var chart = nv.models.pieChart()
		    	.x(function(d) { return d.label })
		    	.y(function(d) { return d.value })
      			.showLabels(true)     //Display pie labels
      			.labelType("percent"); //Configure what type of data to show in the label. Can be "key", "value" or "percent"

		    d3.select(domStr)
		        .datum(exampleData())
		        .transition().duration(350)
		        .call(chart);

		  return chart;
		});

	}

})(window)