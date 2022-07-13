import React from 'react'
import Chart1 from './components/Chart1'
import Chart2 from './components/Chart2'
import Search from './components/Search'
import './flexible'

export default function App() {
  return (
    <div className='background'>
        <Search/>
        <Chart1/>
        <Chart2/>
    </div>
  )
}
