import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

//Components
import Results from './Results'
import Welcome from './Welcome'

const Routes = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path="/" element={<Welcome/>} />
        <Route exact path='/search' element={<Results/>} />
        <Route exact path='/image' element={<Results/>} />
        <Route exact path='/news' element={<Results/>} />
        <Route exact path='/video' element={<Results/>} />
      </Switch>
    </div>
  )
}

export default Routes