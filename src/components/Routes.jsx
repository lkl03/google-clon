import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

//Components
import Search from './Search'
import Results from './Results'

const Routes = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path="/" element={<Search/>} />
        <Route exact path='/search' element={<Results/>} />
        <Route exact path='/images' element={<Results/>} />
        <Route exact path='/news' element={<Results/>} />
        <Route exact path='/videos' element={<Results/>} />
      </Switch>
    </div>
  )
}

export default Routes