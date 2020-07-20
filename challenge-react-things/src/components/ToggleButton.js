import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false,
    };
  }

  handleClick = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
