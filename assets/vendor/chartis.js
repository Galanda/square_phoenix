
function loadCharts(){
var data1 = {
  // A labels array that can contain any sort of values
  labels: ['jan', 'Feb', 'Apr', 'Mar', 'May'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 4, 3, 7, 5, 10],
    [3, 2, 9, 5, 4, 6],
    [2, 1, -3, -4, -2, 0]
  ]
};

new Chartist.Line('#chart1', data1);

var data2 = {
	series: [5, 3, 4, 10, 5, 4, 3]
};
var sum = function(a, b) {return a + b };
new Chartist.Pie('#chart2', data2, {
	labelInterpolationFnc: function(value){
		return Math.round(value / data2.series.reduce(sum) * 100) + '%';
	}
});

new Chartist.Bar('#chart3', {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    [5, 4, 3, 7, 5, 10, 3],
    [3, 2, 9, 5, 4, 6, 4]
  ]
}, {
  axisX: {
    // On the x-axis start means top and end means bottom
    position: 'start'
  },
  axisY: {
    // On the y-axis start means left and end means right
    position: 'end'
  }
});}

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        loadCharts();
    }
}
