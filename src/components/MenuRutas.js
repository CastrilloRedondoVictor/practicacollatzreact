import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h2><a href="/">Home</a></h2>
        <h3><a href="/collatz/5">Collatz del 5</a></h3>
        <h3><a href="/collatz/111">Collatz del 111</a></h3>
        <h3><a href="/enlaceErroneo">Enlace erroneo</a></h3>
      </div>
    )
  }
}
