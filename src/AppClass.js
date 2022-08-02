import React, { Component } from "react";
import CardNumClass from "./CardNumClass";
import { OddOrEvenClass } from "./OddOrEvenClass";

export class AppClass extends Component {

  constructor(props){
    super(props)
    this.incerementCount = this.incerementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
    this.resetCount = this.resetCount.bind(this) 
  }

state = {
  count : 0,
  randomCards: [30,33,37,42],
  pickedValue: null
}

incerementCount(){
console.log('Incremented');
// this.setState({
//   count : this.state.count + 1
// })
this.setState((prevState)=>{
  return {
    count: prevState.count + 1
  }})

}

decrementCount(){
  console.log('Decremented');
this.setState((prevState)=>{
  return {
    count : prevState.count - 1
  }
})
}


resetCount(){
  console.log('Reseted');
  this.setState({
    count : 0
  })
} 

pickedCardParent=(cardNum)=>{
  this.setState({
    pickedValue : cardNum
  })
}

  render() {
    // console.log(this);
    const {count,randomCards, pickedValue} = this.state
    return (
      <div>
        <h2> কিরে সোদানির পোয়া?</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incerementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.resetCount}>Reset</button>
        <OddOrEvenClass count={count} pickedValue={pickedValue} />
        {randomCards.map((cardNum)=>{ return(
          <CardNumClass cardNum={cardNum} key={cardNum} pickedCardParent={this.pickedCardParent} />)
        })}
        
      </div>
    );
  }
}

export default AppClass;
