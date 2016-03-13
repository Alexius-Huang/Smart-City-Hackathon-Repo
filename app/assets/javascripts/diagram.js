(function (window) {


	function exampleData() {
		  return  [
		      { 
		        "label": "反對",
		        "value" : 64
		      } , 
		      { 
		        "label": "贊成",
		        "value" : 36
		      } 
		    ];
		}

		function exampleData2() {
		  return  [
		      { 
		        "label": "> 300",
		        "value" : 29.76
		      } , 
		      { 
		        "label": "100 - 300",
		        "value" : 30
		      } , 
		      { 
		        "label": "70 - 100",
		        "value" : 32.807
		      } , 
		      { 
		        "label": "40 - 70",
		        "value" : 196.459
		      } , 
		      { 
		        "label": "< 40",
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
		        .datum(data)
		        .transition().duration(350)
		        .call(chart);

		  return chart;
		});

	}


	window.drawAllCart = function() {
		drawPieChart('.static_contaier svg',  exampleData());
        drawPieChart('.static_contaier2 svg', exampleData2());
	}

})(window)