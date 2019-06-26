import React from 'react';

class RouletteGun extends React.Component {
  constructor (props) {
    super(props)
    this.state = {spinningTheChamber : false, chamber: null}
  }
  /* spinning the chamber and pulling the trigger! ...
  you're safe!
  BANG!!!! */
  handleTrigger = ()=>{
/*The state should update spinningTheChamber to be true.
A timeout should be registered for 2 seconds.
Within the timeout, a random number between 1 and 8 should be generated.
Within the timeout, the state should be updated so that the generated 
random number is the new value for chamber and the spinningTheChamber should be false.*/
    this.setState(
      {spinningTheChamber:true}
    )
    setTimeout(function(min =1, max =9){
      const value = Math.floor(Math.random() * (max-min)+min)
      this.setState({spinningTheChamber: false, chamber: value})
    }
      ,2000)}

  render(){
    return (<div>
      <p></p>
      <button onClick={this.handleTrigger}>Pull the Trigger</button>
      </div>)
  }
}

export default RouletteGun