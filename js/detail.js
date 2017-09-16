var dataForbar;
var dataForline;
function Chart(chart_data, style){
    if (style=='bar')
        dataForbar=chart_data;        
    if (style=='line') 
        dataForline=chart_data;
}
window.onload = function(e){ 
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(onChartLoad);
}

function onChartLoad() {
    drawBarchart(dataForbar);
    drawLinechart(dataForline);
}

function drawBarchart(amount) {
    var tl='';
    var xlabel='';
    var ylabel='';	
    var tl = amount.TITLE;
    var xlabel = amount.X_LABEL;
    var ylabel = amount.Y_LABEL;
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'amount');
    for(var i= 0; i<amount.X.length; i++){
    	var date_string = amount.X[i];
    	var year=date_string.slice(6,10);
    	var month=date_string.slice(3,5);
    	var day=date_string.slice(0,2);
        var dataY=amount.Y[i];
    	data.addRows([[new Date(parseInt(year), parseInt(month)-1, parseInt(day)), dataY]]);
    }
    
    var options = {
        legend: 'none',
        title: tl,
        titleTextStyle: {
				color: 'gray',
  				fontSize: '24'
			},
        chartArea: {width: '50%'},
        hAxis: {
        	gridlineColor: 'none',
        	title: xlabel,
		    format: 'dd/MM/yyyy',
			titleTextStyle: {
				color: 'gray',
  				fontSize: '22',
                italic: 'false'
			}
        },
        vAxis: {
        	title: ylabel,
        	titleTextStyle: {
                color: 'gray',
                fontSize: '22',
                italic: 'false'
            }
        },
        backgroundColor: '#eee'
     };
    var chart = new google.visualization.ColumnChart(document.getElementById('bar_Chart'));
    chart.draw(data, options);
}

/////////////////////////////////
function drawLinechart(amount) {
	var tl='';
    var xlabel='';
    var ylabel='';

    var tl = amount.TITLE;
    var xlabel = amount.X_LABEL;
    var ylabel = amount.Y_LABEL;
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time of Day');
    data.addColumn('number', 'amount');
    for(var i= 0; i<amount.X.length; i++){
        var date_string = amount.X[i];
        var year=date_string.slice(6,10);
        var month=date_string.slice(3,5);
        var day=date_string.slice(0,2);
        var dataY=amount.Y[i];
        data.addRows([[new Date(parseInt(year), parseInt(month)-1, parseInt(day)), dataY]]);
    }
    var optionB= {
    	title: tl,
    	titleTextStyle: {
				color: 'gray',
  				fontSize: '24'
			},
        lineWidth: '4',
        legend: 'none',
        hAxis: {
			title: xlabel,
		    format: 'dd/MM/yyyy',
			titleTextStyle: {
                color: 'gray',
                fontSize: '22',
                italic: 'false'
            }           
		},
		vAxis: {
			title: ylabel,
        	minValue: 0,
			titleTextStyle: {
                color: 'gray',
                fontSize: '22',
                italic: 'false'
            }
        },
        backgroundColor: '#eee'
    };

    var chart = new google.visualization.LineChart(document.getElementById('line_Chart'));
    chart.draw(data, optionB);
}
