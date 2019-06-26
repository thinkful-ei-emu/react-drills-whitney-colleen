import React from 'react';

class Accordion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowing: null
    }
  }
  static defaultProps = {
    sections: []
  }
  
  handleClick = (event) => {
    this.setState({
      isShowing: +event.currentTarget.id
    })
    console.log(event.currentTarget);
  }


  render() {
    let buttonList = this.props.sections.map((section, index) => {
      console.log(index, this.state.isShowing)
      return (
        <li key={index} id={index} onClick={this.handleClick}>
          <button >{section.title}</button>
          {this.state.isShowing === index && <p>{section.content}</p>}
        </li>
      )
    })

    return(
      <ul>
        {buttonList}
      </ul>
    );
  }
}

export default Accordion;