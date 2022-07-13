import React from 'react'
import PubSub from 'pubsub-js'
import * as echarts from 'echarts'
import axios from 'axios'
import './index.css'

const week = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']

let humidity_2 = '75'

export default function Chart2() {
  const [flag, setFlag] = React.useState(1)
  React.useEffect(() => {
    

    const token3 = PubSub.subscribe('data_weather_flag', (msg, data) => {
      setFlag(data.flag)
    })
    const token1 = PubSub.subscribe('data_weather', (msg, data) => {
      humidity_2 = data.data.humidity.slice(0, data.data.humidity.length - 1)
      setFlag(data.flag)
      setChart4()
    })
    const token2 = PubSub.subscribe('data_weather2', (msg, data) => {
      setChart(data)
      setChart2(data)
      setChart3(data)
      setChart4()
    })
    // setChart(data)
    // setChart2(data)
    // setChart3(data)
    // setChart4()
    return () => {
      axios.get('https://www.mxnzp.com/api/weather/forecast/长沙市?app_id=mvlfjphoggyenbrf&app_secret=M1lpN2pGM3lMdyt2anlmaUZiYzVLdz09'
    ).then(res=>{
      setChart(res.data)
      setChart2(res.data)
      setChart3(res.data)
      setChart4()
    })
      PubSub.unsubscribe(token1)
      PubSub.unsubscribe(token2)
      PubSub.unsubscribe(token3)
    }
  }, [])
  const chart_line1 = React.useRef()
  const chart_line2 = React.useRef()
  const chart_line3 = React.useRef()
  const chart_line4 = React.useRef()

  function setChart(data) {
    const { forecasts } = data.data
    const mychart = echarts.init(chart_line1.current)
    const option = {
      title: {
        text: '未来几天天气预报折线图',
        textStyle: {
          color: 'white'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top: '10%',
        right: 0,
        textStyle: {
          color: 'white',
          fontSize: 15
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '3%',
        top: '20%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          fontSize: 12,
          color: '#00BFFF'
        },
        data: forecasts.map((obj) => {
          return week[obj.dayOfWeek - 1]
        })
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      },
      series: [
        {
          name: '白天温度',
          type: 'line',
          lineStyle: {
            color: 'blue',
            width: 5
          },
          itemStyle: {
            color: '#00BFFF',
            borderWidth: 8,
            borderColor: '#00BFFF30'
          },
          symbol: 'diamond',
          symbolSize: 8,
          data: forecasts.map((obj) => {
            let str = obj.dayTemp
            return obj.dayTemp.slice(0, str.length - 1)
          })
        },
        {
          name: '晚上温度',
          type: 'line',
          lineStyle: {
            color: 'red',
            width: 5
          },
          symbol: 'rent',
          symbolSize: 8,
          itemStyle: {
            color: '#FF1493',
            borderWidth: 8,
            borderColor: 'rgba(255,255,255,.2)'
          },
          data: forecasts.map((obj) => {
            let str = obj.nightTemp
            return obj.nightTemp.slice(0, str.length - 1)
          })
        }
      ]
    };
    mychart.setOption(option)
    window.addEventListener('resize', () => { mychart.resize() })
  }
  function setChart2(data) {
    const { forecasts } = data.data
    const mychart = echarts.init(chart_line2.current)
    const option = {
      title: {
        text: '未来几天天气预报折线堆叠图',
        textStyle: {
          color: 'white'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top: '10%',
        right: 0,
        textStyle: {
          color: 'white',
          fontSize: 15
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '3%',
        top: '20%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          fontSize: 12,
          color: '#00BFFF'
        },
        data: forecasts.map((obj) => {
          return week[obj.dayOfWeek - 1]
        })
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      },
      series: [
        {
          name: '白天温度',
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [
              {
                offset: '0',
                color: '#FF149390'
              }, {
                offset: '1',
                color: '#FF000090'
              }
            ],
              false
            )
          },
          lineStyle: {
            color: 'blue',
            width: 5
          },
          itemStyle: {
            color: '#00BFFF',
            borderWidth: 8,
            borderColor: '#00BFFF30'
          },
          symbol: 'diamond',
          symbolSize: 8,
          data: forecasts.map((obj) => {
            let str = obj.dayTemp
            return obj.dayTemp.slice(0, str.length - 1)
          })
        },
        {
          name: '晚上温度',
          type: 'line',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [
              {
                offset: '0',
                color: '#00BFFF90'
              }, {
                offset: '1',
                color: '#0000FF90'
              }
            ],
              false
            )
          },
          lineStyle: {
            color: 'red',
            width: 5
          },
          symbol: 'rent',
          symbolSize: 8,
          itemStyle: {
            color: '#FF1493',
            borderWidth: 8,
            borderColor: 'rgba(255,255,255,.2)'
          },
          data: forecasts.map((obj) => {
            let str = obj.nightTemp
            return obj.nightTemp.slice(0, str.length - 1)
          })
        }
      ]
    };
    mychart.setOption(option)
    window.addEventListener('resize', () => { mychart.resize() })
  }
  function setChart3(data) {
    const { forecasts } = data.data
    const mychart = echarts.init(chart_line3.current)
    const option = {
      title: {
        text: '未来几天天气预报直方图',
        textStyle: {
          color: 'white'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      color: ['blue'],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            fontSize: 12,
            color: '#00BFFF'
          },
          data: forecasts.map((obj) => {
            return week[obj.dayOfWeek - 1]
          })
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          }
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          label: {
            show: true,
            fontSize: 15,
            color: 'red',
            position: 'top'
          },
          data: forecasts.map((obj) => {
            let str = obj.dayTemp
            return obj.dayTemp.slice(0, str.length - 1)
          })
        }
      ]
    };
    mychart.setOption(option)
    window.addEventListener('resize', () => { mychart.resize() })
  }
  function setChart4() {
    const mychart = echarts.init(chart_line4.current)
    const option = {
      title: {
        text: '湿度图',
        textStyle: {
          color: 'white'
        }
      },
      series: [
        {
          type: 'gauge',
          progress: {
            show: true,
            width: 18,
          },
          axisLine: {
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            length: 5,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 18
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10
            }
          },
          detail: {
            show: true,
            valueAnimation: true,
            fontSize: 55,
            color: 'blue',
            offsetCenter: [0, '95%']
          },
          min: 0,
          max: 100,
          data: [
            {
              // value: humidity.slice(0, humidity.length - 1)
              value: humidity_2
            }
          ]
        }
      ]
    };
    mychart.setOption(option)
    window.addEventListener('resize', () => { mychart.resize() })
  }
  return (
    <>
      <div className='chart2'>
        {
          flag == 2 ? <div className='loading'>加载中</div> :
            <>
              <div></div>
              <div className="day1" ref={chart_line1}></div>
              <div className="day2" ref={chart_line2}></div>
              <div className="day3" ref={chart_line3}></div>
              <div className="day4" ref={chart_line4}></div>
            </>
        }
      </div>
    </>
  )
}