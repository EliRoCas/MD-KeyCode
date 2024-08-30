import { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.countIncrement = this.countIncrement.bind(this);
  }

  countIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidCatch(error, info) {
    console.log("Error", error);
    console.log("Info", info);
  }

  componentWillUnmount(){
    console.log('The component has been removed')
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.countIncrement}></button>
      </div>
    );
  }
}

export default MyClassComponent;
