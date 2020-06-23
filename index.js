import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <div>
      <Counter/>
      </div>
    );
  }
}


render(<Provider store={store}><App /></Provider>, document.getElementById('root'));