import React from 'react'
import './index.css'
import PubSub from 'pubsub-js'
import axios from 'axios'
import { APP_ID, APP_SECRET } from '../../constant'
import {debounce} from 'lodash'

export default function Search() {
  const ref_input = React.useRef()
  // const flag_timer = true

  function sendData() {
    // const timer = setTimeout(() => {
      
      const add = debounce(function(){
        if (ref_input.current.value.match(/.+市/) == null) {
          alert('输入不合法！正确实例：深圳市')
          return
        }
        axios.get(`https://www.mxnzp.com/api/weather/current/${ref_input.current.value}?app_id=${APP_ID}&app_secret=${APP_SECRET}`, {}).then((res) => {
          PubSub.publish('data_weather', { data: res.data.data, flag: 2 })
        })
        setTimeout(() => {
          new Promise((resove, reject) => {
            PubSub.publish('data_weather_flag', { flag: 3 })
            resove()
          }).then(() => {
            axios.get(`https://www.mxnzp.com/api/weather/forecast/${ref_input.current.value}?app_id=${APP_ID}&app_secret=${APP_SECRET}`, {}).then((res) => {
              PubSub.publish('data_weather2', { data: res.data.data })
            })
          })
    
        }, 2900)
      },3000)

      add()
      
      // clearTimeout(timer)
    // }, 3000)
    // setTimeout(() => {
    //   axios.get(`https://www.mxnzp.com/api/weather/forecast/${ref_input.current.value}?app_id=${APP_ID}&app_secret=${APP_SECRET}`, {}).then((res) => {
    //     PubSub.publish('data_weather2', { data: res.data.data })   
    //   })
    // }, 3000)
  }
  return (
    <>
      <div className='search'>
        <input ref={ref_input} />
        <button onClick={sendData}><svg t="1657035280263" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1687" width="60%" height="100%"><path d="M192 448c0-141.152 114.848-256 256-256s256 114.848 256 256-114.848 256-256 256-256-114.848-256-256z m710.624 409.376l-206.88-206.88A318.784 318.784 0 0 0 768 448c0-176.736-143.264-320-320-320S128 271.264 128 448s143.264 320 320 320a318.784 318.784 0 0 0 202.496-72.256l206.88 206.88 45.248-45.248z" fill="#707070" p-id="1688"></path></svg></button>
      </div>
    </>
  )
}
