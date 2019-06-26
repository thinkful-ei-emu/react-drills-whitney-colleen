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
    this.timeout = setTimeout(()=>{
      const value = Math.floor(Math.random() * (9-1)+1)
      this.setState({spinningTheChamber: false, chamber: value})
    },2000)

  }

/*   If spinningTheChamber is true, render spinning the chamber and pulling the trigger! ....
If the chamber value in state is the same as the bulletInChamber value in props, render BANG!!!!.
Otherwise, render you're safe!!
If the component is to be unmounted, clear the timeout. */

handleContent = ()=> {
  if(this.state.spinningTheChamber){
    return 'Spinning the chamber and pulling the trigger! ....'
  } else if(this.state.chamber === this.props.bulletInChamber) {
    return 'BANG!!!!'
  } else if(this.state.chamber === null){
    return 'Try your luck!'
  } else{
    return `You're safe!!`
  }

}
componentWillUnmount(){
  clearTimeout(this.timeout);
}

  render(){
    return (<div>
      <p>{this.handleContent()}</p>
      <button onClick={this.handleTrigger}>Pull the Trigger</button>
      </div>)
  }
}

export default RouletteGun