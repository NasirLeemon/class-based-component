import React, { Component } from 'react'

export class CardNumClass extends Component {

  pickedCardNum=()=>{
    this.props.pickedCardParent(this.props.cardNum)
  }
  render() {
    return (
      <p onClick={this.pickedCardNum}>{this.props.cardNum}</p>
    )
  }
}

export default CardNumClass