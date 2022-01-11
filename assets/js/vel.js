
am4core.useTheme(am4themes_animated);

// create chart
var chart = am4core.create("chartdiv", am4charts.GaugeChart);
chart.innerRadius = -15;

var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = 0;
axis.max = 1000;
axis.strictMinMax = true;

var colorSet = new am4core.ColorSet();

var range0 = axis.axisRanges.create();
range0.value = 0;
range0.endValue = 400;
range0.axisFill.fillOpacity = 1;
range0.axisFill.fill = colorSet.getIndex(0);

var range1 = axis.axisRanges.create();
range1.value = 400;
range1.endValue = 800;
range1.axisFill.fillOpacity = 1;
range1.axisFill.fill = colorSet.getIndex(2);

var range2 = axis.axisRanges.create();
range2.value = 800;
range2.endValue = 1000;
range2.axisFill.fillOpacity = 1;
range2.axisFill.fill = colorSet.getIndex(4);

var hand = chart.hands.push(new am4charts.ClockHand());

setInterval(() => {
  hand.showValue(Math.random() * 1000, 1000, am4core.ease.cubicOut);
}, 2000);
