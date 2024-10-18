import React, { Component } from 'react'

export default class Collatz extends Component {

    state = {
        list: []
    }


    componentDidMount = () => {
        let num = this.props.num
        let collatzList = [];

        this.setState({
            list: []
        })

        while (num != 1) {
            if(num%2 == 0){
                collatzList.push(num)
                num = num / 2
            } else{
                collatzList.push(num)
                num = (num * 3) + 1
            }
        }

        collatzList.push(1)

        this.setState({
            list: collatzList
        })
    }

  render() {
    return (
      <div>
        <h1>Collatz del {this.props.num}</h1>
        <ul>
            {this.state.list.map((num, index) => {
                return(<li key={index}>{num}</li>)
            })}
        </ul>
      </div>
    )
  }
}
