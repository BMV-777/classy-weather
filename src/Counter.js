import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };

    this.handelIncrement = this.handelIncrement.bind(this);
    this.handelDecrement = this.handelDecrement.bind(this);
  }

  handelIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  handelDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handelIncrement}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.handelDecrement}>-</button>
      </div>
    );
  }
}
export default Counter;

//14/178
