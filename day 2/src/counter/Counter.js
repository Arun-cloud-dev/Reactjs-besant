import React, { Component } from "react";

// define the component using class syntax
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //methord to increment
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  //to reset counter using new methord called handleReset
  handleReset = () => {
    this.setState({ count: 0 });
  };

  componentDidMount() {
    console.log("Counter component mounted");
  }

  componentDidUpdate() {
    console.log("Counter component updated");
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
