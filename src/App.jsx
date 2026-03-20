

import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())



function App() {


  return (
    <div className='appContainer'>
      <h1>React World on the go</h1>

      <Suspense fallback={<h1>Countries are coming soon...</h1>}>
      <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

    </div>
  )
}

export default App
