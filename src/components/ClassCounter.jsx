import React from "react";

export class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count} ClassCounter</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrmenet</button>
      </div>
    );
  }
}
