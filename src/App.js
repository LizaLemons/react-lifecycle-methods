
import React, { Component } from 'react';
import './App.css';

// * import components * //
import ClickMe from './components/ClickMe';
import DisplayHowMany from './components/DisplayHowMany';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0
    }

    this.increaseCountFxn = this.increaseCountFxn.bind(this);
    this.decreaseCountFxn = this.decreaseCountFxn.bind(this);
  }

  increaseCountFxn(e){
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseCountFxn(e){
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    console.log('render called');

    return (
      <div className="App">
        <h1>Lifecycle Methods in React</h1>
        <hr />
        <ClickMe
          increaseCount={this.increaseCountFxn}
          decreaseCount={this.decreaseCountFxn}
        />
        <hr />
        <DisplayHowMany count={this.state.count} />
      </div>
    );
  }

  componentWillMount(){
    console.log('componentWillMount called')
  }

  componentDidMount() {
    console.log('componentDidMount called')
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps called')
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate called');
    return true
  }

  componentWillUpdate(){
    console.log('componentWillUpdate called')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate called');
  }

}

export default App;
