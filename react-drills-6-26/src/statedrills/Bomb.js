import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.count);
      const newCount = this.state.count + 1;
      this.setState({count: newCount})
    }, 1000)
  }

  componentDidUpdate() {
    if (this.state.count > 8) {
    // clearInterval(this.interval);
    this.setState({count: 0});
    }
  }

  displayWord() {
    if (this.state.count % 2 === 0 && this.state.count < 8) {
      return "tick"
    }
    else if (this.state.count >= 8) {
      
      return "BOOM!!!!"
    } else {
      return "tock"
    }
  }

  render() {
    return (
      <div>
        <p>
          {this.displayWord()}
        </p>
      </div>
    );
  }
}

export default Bomb;