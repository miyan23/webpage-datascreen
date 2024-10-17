// 基于准备好的dom，初始化echarts实例
var myChartPie = echarts.init(document.getElementById('pie'), null, {});

// 指定图表的配置项和数据
option =
{
  series:
    [
      {
        type: 'gauge',
        // 调整饼图与div之间的留白
        center: ['50%', '54%'],
        // 调整饼图大小
        radius: '100%',
        axisLine:
        {
          lineStyle:
          {
            width: 10,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer:
        {
          itemStyle:
          {
            color: 'auto'
          }
        },
        // 小刻度线
        axisTick:
        {
          distance: -10,
          length: 3,
          lineStyle:
          {
            color: '#fff',
            width: 1
          }
        },
        // 大刻度线
        splitLine:
        {
          distance: -10,
          length: 10,
          lineStyle:
          {
            color: '#fff',
            width: 2
          }
        },
        axisLabel:
        {
          color: 'inherit',
          distance: 20,
          fontSize: 12
        },
        detail:
        {
          valueAnimation: true,
          formatter: '{value} km/h',
          color: 'inherit',
          fontSize: 12,
        },
        data:
          [
            {
              value: 70
            }
          ]
      }
    ]
};

// 数据浮动
setInterval(function () {
  myChartPie.setOption(
    {
      series:
        [
          {
            data:
              [
                {
                  value: +(Math.random() * 100).toFixed(2)
                }
              ]
          }
        ]
    });
}, 2000);

// 使用刚指定的配置项和数据显示图表。
myChartPie.setOption(option)