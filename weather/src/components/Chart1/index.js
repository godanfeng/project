import React from 'react'
import PubSub from 'pubsub-js'
import * as echarts from 'echarts'
import './index.css'

const data = {
    "code": 1,
    "msg": "数据返回成功！",
    "data": {
        "address": "广东省 深圳市",
        "cityCode": "440300",
        "temp": "28℃",
        "weather": "阴",
        "windDirection": "北",
        "windPower": "5级",
        "humidity": "82%",
        "reportTime": "2022-07-04 16:30:35"
    }
}

export default function Chart1() {
    React.useEffect(()=>{
        const token = PubSub.subscribe('data_weather',(msg,data)=>{
          setChart(data)
        })
        setChart(data)
        return ()=>{
          PubSub.unsubscribe(token)
        }
    },[])
    const chart_pie = React.useRef()

    function setChart(data){
        const {temp,weather,windPower,humidity,windDirection} = data.data
        const mychart = echarts.init(chart_pie.current)
        const option = {
            series: [
              {
                name: 'weather',
                type: 'pie',
                radius: ['40%', '70%'],
                center:['50%','50%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '25',
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: 25, name: '当前温度：'+temp },
                  { value: 25, name: '当前天气：'+weather },
                  { value: 25, name: '当前湿度：'+ humidity},
                  { value: 25, name: '当前风力：' + windDirection+' '+windPower}
                ]
              }
            ]
          };
          mychart.setOption(option)
          window.addEventListener('resize',()=>{mychart.resize()})
    }
    return (
        <>
            <div className='chart1'>
                <main ref={chart_pie}>
                    
                </main>
            </div>
        </>
    )
}
