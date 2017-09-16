var dataFororange = [];
var dataForred=[];
var dataForblue=[];

function calling(plot_data, color, row_num){
    if (color==1)
        dataFororange[row_num]=plot_data;        
    if (color==2) 
        dataForred[row_num]=plot_data;
    if (color==3) 
        dataForblue[row_num]=plot_data;
}

window.onload = function(e){ 
      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(onChartLoad);
}

function onChartLoad() { 
    for(var i=0; i<20; i++){
        drawOrangeColor(dataFororange[i], i);
        drawRedColor(dataForred[i], i);
        drawBlueColor(dataForblue[i], i);
    }   
}

function drawOrangeColor(amount, counter) {
    
    var dataA = new google.visualization.DataTable();
    dataA.addColumn('date', 'X');
    dataA.addColumn('number', 'price');
    
    for(var i= 0; i<amount.X.length; i++){
        var date_string = amount.X[i];
        var year=date_string.slice(6,10);
        var month=date_string.slice(3,5);
        var day=date_string.slice(0,2);
        var dataY = amount.Y[i];
        dataA.addRows([[new Date(parseInt(year), parseInt(month)-1, parseInt(day)), dataY]]);
    }
	var optionA = {
		legend: 'none',
        vAxis: { baselineColor: 'none',
        		 gridlineColor: 'none',
        		 textPosition: 'none' },
		hAxis: { baselineColor: 'none',
				gridlineColor: 'none',
				textPosition: 'none' },
                format: 'dd/MM/yyyy',
        backgroundColor: 'none',
		colors:['#ff8800']
	};
    var pos = "A_chart"+counter;
    var selected = document.getElementById(pos);
    var chart = new google.visualization.LineChart(selected);
    chart.draw(dataA, optionA);
}

////////////////////////////////////
function drawRedColor(amount, counter) {
	var dataB = new google.visualization.DataTable();
    dataB.addColumn('date', 'X');
    dataB.addColumn('number', 'price');
    for(var i= 0; i<amount.X.length; i++){
        var date_string = amount.X[i];
        var year=date_string.slice(6,10);
        var month=date_string.slice(3,5);
        var day=date_string.slice(0,2);
        var dataY = amount.Y[i];
        dataB.addRows([[new Date(parseInt(year), parseInt(month)-1, parseInt(day)), dataY]]);
    }
	var optionB = {
		legend: 'none',
        vAxis: { baselineColor: 'none',
        		 gridlineColor: 'none',
        		 textPosition: 'none' },
		hAxis: { baselineColor: 'none',
				gridlineColor: 'none',
                format: 'dd/MM/yyyy',
				textPosition: 'none' },
        backgroundColor: 'none',
		colors:['red']
	};
    var pos = "B_chart"+counter;
    var selected = document.getElementById(pos);
    var chart = new google.visualization.LineChart(selected);
    chart.draw(dataB, optionB);
}
	///////////
function drawBlueColor(amount, counter) {
	var dataC = new google.visualization.DataTable();
    dataC.addColumn('date', 'X');
    dataC.addColumn('number', 'price');
    for(var i= 0; i<amount.X.length; i++){
        var date_string = amount.X[i];
        var year=date_string.slice(6,10);
        var month=date_string.slice(3,5);
        var day=date_string.slice(0,2);
        var dataY = amount.Y[i];
        dataC.addRows([[new Date(parseInt(year), parseInt(month)-1, parseInt(day)), dataY]]);
    }
	var optionC = {
		legend: 'none',
        vAxis: { baselineColor: 'none',
        		 gridlineColor: 'none',
        		 textPosition: 'none' },
		hAxis: { baselineColor: 'none',
				gridlineColor: 'none',
                format: 'dd/MM/yyyy',
				textPosition: 'none' },
        backgroundColor: 'none',
		colors:['blue']
	};
    var pos = "C_chart"+counter;
    var selected = document.getElementById(pos);
    var chart = new google.visualization.LineChart(selected);
    chart.draw(dataC, optionC);
}

function onUKChartLoad() {    
    drawOrangeColor(test_data);
    drawRedColor(test_data);
    drawBlueColor(test_data);
}