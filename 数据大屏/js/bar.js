// 基于准备好的dom，初始化echarts实例
var myChartBar = echarts.init(document.getElementById('bar'), null, {});

// 指定图表的配置项和数据
let dataAxis =
	[
		'10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
		'11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
		'12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
		'13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
		'14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
		'15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
		'16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
		'17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
		'18:00'
	];
let data4 =
	[
		35.08, 37.78, 37.78, 29.68, 26.99, 26.99, 28.34, 37.78, 39.13, 47.23,
		51.27, 51.27, 56.67, 66.12, 71.51, 72.86, 72.86, 66.12, 60.72, 53.97,
		47.23, 33.73, 18.89, 14.84, 18.89, 22.94, 22.94, 21.59, 13.49, 10.79,
		14.84, 10.79, 10.79, 10.79, 10.79, 13.49, 21.59, 28.34, 35.08, 45.88,
		51.27, 53.97, 56.67, 56.67, 56.67, 59.37, 62.07, 66.12, 72.86,
	]
for (let i = 0; i < data4.length; i++) {
	// 向下取整
	data4[i] = Math.floor((data4[i] * 640) / 120)
}
let yMax = 400;
let dataShadow = [];
for (let i = 0; i < data4.length; i++) {
	dataShadow.push(yMax);
}

option =
{
	// 鼠标悬浮数据提示
	tooltip:
	{
		trigger: 'axis',
		axisPointer:
		{
			type: 'cross',
			label:
			{
				backgroundColor: '#283b56'
			}
		}
	},
	// 调整图表与div间上下左右留白
	grid:
	{
		left: 26,
		top: 18,
		right: 7,
		bottom: 14
	},
	xAxis:
	{
		data: dataAxis,
		axisLabel:
		{
			// 调整字体
			textStyle:
			{
				color: '#A1C7E1',
				fontSize: '8'
			}
		},
		// 刻度线
		axisTick:
		{
			show: false,
		},
		// x轴
		axisLine:
		{
			lineStyle:
			{
				color: '#7CBCCD',
				width: 2,
				type: 'solid'
			}
		}
	},
	yAxis:
	{
		// y轴单位
		name: '功率：W',
		// y轴name与横坐标轴线的间距
		nameGap: 8,
		// name样式调整
		nameTextStyle:
		{
			color: '#A1C7E1',
			fontSize: '8'
		},
		// 调整背景横线
		splitLine:
		{
			show: true,
			lineStyle:
			{
				color: '#8BE6FF',
				width: 1,
				// 透明度
				opacity: 0.1
			}
		},
		axisLabel:
		{
			// 调整字体
			textStyle:
			{
				color: '#A1C7E1',
				fontSize: '8'
			}
		}
	},
	// 控制缩放
	dataZoom: [
		{
			type: 'inside'
		}
	],
	series:
		[
			{
				type: 'bar',
				// 柱状图颜色渐变
				itemStyle:
				{
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
						[
							{ offset: 0, color: '#D8C058' },
							{ offset: 0.56, color: 'rgba(220, 222, 116, 0.5274)' },
							{ offset: 1, color: 'rgba(206, 216, 159, 0)' }
						])
				},
				data: data4
			}
		]
};

// 数据浮动
setInterval(function () {
	for (let i = 0; i < data4.length; i++) {
		data4[i] = data4[i] + (Math.floor(Math.random() * 200) - 100)
		if (data4[i] < 0) {
			data4[i] = 0
		}
		if (data4[i] > 400) {
			data4[i] = 400
		}
	}
	myChartBar.setOption(
		{
			series:
				[
					{
						data: data4
					}
				]
		});
}, 500);

// 使用刚指定的配置项和数据显示图表。
myChartBar.setOption(option)