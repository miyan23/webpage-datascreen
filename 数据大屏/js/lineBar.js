// 基于准备好的dom，初始化echarts实例
var myChartLine = echarts.init(document.getElementById('lineBar'), null, {});

let data1 =
	[
		18.85, 18.85, 5.39, 5.39, 14.81, 14.81, 20.2, 30.97, 35.01, 49.82, 57.9,
		86.17, 115.79, 115.79, 125.21, 79.44, 61.93, 37.7, 24.24, 18.85, 18.85,
		13.46, 4.04, 13.46, 10.85
	]
let data2 =
	[
		14.81, 14.81, 4.04, 4.04, 13.46, 13.46, 17.5, 26.93, 29.62, 41.74, 49.82,
		75.4, 98.29, 98.29, 107.71, 67.32, 53.86, 32.31, 20.2, 14.81, 14.81, 12.12,
		4.04, 12.12, 8.42
	]
let data3 = []
for (let i = 0; i < data1.length; i++) {
	data1[i] = Math.floor((data1[i] * 500) / 120)
	data2[i] = Math.floor((data2[i] * 500) / 120)
	data3[i] = Math.floor(((data1[i] / 2 + data2[i] / 2) / 2) * 0.1)
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
	grid:
	{
		top: 18,
		left: 26,
		right: 26,
		bottom: 16,
	},
	xAxis:
		[
			{
				type: 'category',
				data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00',
					'10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
					'20:00', '21:00', '22:00', '23:00', '24:00'],
				axisPointer:
				{
					type: 'shadow'
				},
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
			}
		],
	yAxis:
		[
			{
				type: 'value',
				name: '压力：N/cm2',
				nameGap: 8,
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
						type: 'dashed',
						width: 1,
						// 透明度
						opacity: 0.1
					}
				},
				min: 0,
				max: 500,
				// 数据间隔
				interval: 100,
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
			{
				type: 'value',
				name: '力矩：Nm',
				nameGap: 8,
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
						type: 'dashed',
						width: 1,
						// 透明度
						opacity: 0.1
					}
				},
				min: 0,
				max: 50,
				interval: 10,
				axisLabel:
				{
					// 调整字体
					textStyle:
					{
						color: '#A1C7E1',
						fontSize: '8'
					}
				}
			}
		],
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
				// 调整渐变
				itemStyle:
				{
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
						[
							{ offset: 0, color: '#EDDEAC' },
							{ offset: 1, color: '#D3893D' },
						])
				},
				data: data1
			},
			{
				type: 'bar',
				itemStyle:
				{
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
						[
							{ offset: 0, color: '#6D623C' },
							{ offset: 1, color: 'rgba(109, 98, 60, 0)' },
						])
				},
				data: data2
			},
			{
				type: 'line',
				yAxisIndex: 1,
				// 调整节点大小
				symbolSize: 6,
				// 调整节点样式
				itemStyle:
				{
					color: '#EDDEAC',
				},
				lineStyle:
				{
					color: '#FFE8C1',
				},
				data: data3
			}
		]
};

// 数据浮动
setInterval(function () {
	for (let i = 0; i < data1.length; i++) {
		data1[i] = data1[i] + (Math.floor(Math.random() * 200) - 100)
		data2[i] = data2[i] + (Math.floor(Math.random() * 200) - 100)
		if (data1[i] < 0) {
			data1[i] = 0
		}
		else if (data1[i] > 500) {
			data1[i] = 500
		}
		if (data2[i] < 0) {
			data2[i] = 0
		}
		else if (data2[i] > 500) {
			data2[i] = 500
		}
		data3[i] = Math.floor(((data1[i] / 2 + data2[i] / 2) / 2) * 0.1)
	}
	myChartLine.setOption(
		{
			series:
				[
					{
						data: data1
					},
					{
						data: data2
					},
					{
						data: data3
					}
				]
		});
}, 500);

// 使用刚指定的配置项和数据显示图表。
myChartLine.setOption(option)