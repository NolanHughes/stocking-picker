import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      members: [
        'Jessie',
        'Nolan',
        'Danny',
        'Jacqui',
        'Dave',
        'Diana',
        'Bob',
        'Patty'
      ],
      selectors: [
        'Jessie',
        'Nolan',
        'Danny',
        'Jacqui',
        'Dave',
        'Diana',
        'Bob',
        'Patty'
      ],
      yourStocking: '',
      selector: ''
    }
  }

// Remove person that is selecting from selectors forever.

// Find index of person that is selecting from members.
// Temporarily remove them from members.

  handleClick = (e) => {
    let selectors = this.state.selectors.slice();
    let members = this.state.members.slice();
  
    let selector = document.getElementById("selector").value
    let selectorIndex = selectors.indexOf(selector)

    let pickIndex = Math.floor(Math.random()*members.length);

    if (members[pickIndex] !== selector) {
      selectors.splice(selectorIndex, 1)
      members.splice(pickIndex, 1)

      this.setState({
        selectors: selectors,
        selector: selector,
        yourStocking: `Your pick is: ${this.state.members[pickIndex]}`,
        members: members
      })
    } else {
      this.setState({
        yourStocking: 'You randomly chose yourself. Please pick again.',
        selector: selector
      })
    }
  }

  clearChoice = () => {
    this.setState({
      selector: '',
      yourStocking: ''
    })
  }

  render() {
    let selectMembers = this.state.selectors.map((member, index) => {
      return(<option key={index}>{member}</option>)
    })

    let pickMessage

    if (this.state.selector !== '') {
      pickMessage = <h3>Hello {this.state.selector}! {this.state.yourStocking}</h3>
    }

    return (
      <div className="App">
        <div>
          Stocking Picker
        </div>
        Select who you are:
        <select id="selector">
          {selectMembers}
        </select>
        <button onClick={(e) => this.handleClick(e)}>Pick</button>
        <div>
          {pickMessage}
        </div>
        <button onClick={() => this.clearChoice()}>Clear your choice!</button>
      </div>
    );
  }
}

export default App;
