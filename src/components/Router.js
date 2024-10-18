import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound.js'
import Collatz from './Collatz.js'

export default class Router extends Component {
  render() {

    function GetComponentCollatz () {
        let {num} = useParams()
        return <Collatz num={num} />
    }

    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home /> }></Route>

            <Route path='/collatz/:num' element={ <GetComponentCollatz /> }></Route>

            <Route path='*' element={ <NotFound /> }></Route>

        </Routes>
      </BrowserRouter>
    )
  }
}
