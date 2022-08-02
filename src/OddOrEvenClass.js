import React, { Component } from 'react'

export class OddOrEvenClass extends Component {
  render() {
    const {count, pickedValue} = this.props
    return (
      <div>
        <h2>Counter</h2>
        <p>{count % 2 === 0 ? 'Even' : 'Odd'}</p>
        <h2>Card Num</h2>
        {pickedValue ?  <p>{pickedValue % 2 === 0 ? 'Even': 'Odd'}</p> : <p>You Haven't picked A Number </p> }
       
      </div>
    )
  }
}

export default OddOrEvenClass