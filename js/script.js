$(document).ready(function() {
  Morris.Area({
    element: 'myfirstchart',
    data: [
      {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
      {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
      {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
      {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
      {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
      {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
      {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
      {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
      {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
      {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
    ],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    pointSize: 2,
    hideHover: 'auto'
  });

  Morris.Donut({
    element: 'morisdonut',
    data: [
      {label: 'In-Store Sales', value: 30 },
      {label: 'Mail-Store Sales', value: 20 },
      {label: 'Download Sales', value: 12 }
    ],
    formatter: function (y) { return y + "%" }
  });

 Morris.Bar({
 element: 'hero-bar',
 data: [
   {device: 'iPhone', geekbench: 136},
   {device: 'iPhone 3G', geekbench: 137},
   {device: 'iPhone 3GS', geekbench: 275},
   {device: 'iPhone 4', geekbench: 380},
   {device: 'iPhone 4S', geekbench: 655},
   {device: 'iPhone 5', geekbench: 1571}
 ],
 xkey: 'device',
 ykeys: ['geekbench'],
 labels: ['Geekbench'],
 barRatio: 0.4,
 xLabelAngle: 35,
 hideHover: 'auto'
});

$(function () {
 var tax_data = [
      {"period": "2011 Q3", "licensed": 1550},
      {"period": "2011 Q2", "licensed": 550},
      {"period": "2011 Q1", "licensed": 1700},
      {"period": "2010 Q4", "licensed": 1600},
      {"period": "2009 Q4", "licensed": 500},
      {"period": "2008 Q4", "licensed": 1800},
      {"period": "2007 Q4", "licensed": 700},
      {"period": "2006 Q4", "licensed": 650},
      {"period": "2005 Q4", "licensed": 700}
 ];
 Morris.Line({
   element: 'hero-graph',
   data: tax_data,
   xkey: 'period',
   ykeys: ['licensed'],
   labels: ['Licensed', 'Off the road']
 });
});

var data = [
			{ label: "Series1",  data: 10},
			{ label: "Series2",  data: 30},
			{ label: "Series3",  data: 90},
			{ label: "Series4",  data: 70},
		];

$.plot('#pie', data, {
    series: {
        pie: {
            show: true
        }
    }
});


	$(function() {

		var sin = [],
			cos = [];

		for (var i = 0; i < 14; i += 0.5) {
			sin.push([i, Math.sin(i)]);
			cos.push([i, Math.cos(i)]);
		}

		var plot = $.plot("#graf", [
			{ data: sin, label: "sin(x)"},
			{ data: cos, label: "cos(x)"}
		], {
			series: {
				lines: {
					show: true
				},
				points: {
					show: true
				}
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			yaxis: {
				min: -1.2,
				max: 1.2
			}
		});

});
});
