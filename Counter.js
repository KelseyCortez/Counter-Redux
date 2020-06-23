import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';


class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick= {()=> {this.props.decrement(5)}}>-5</button>
          <button onClick={()=> {this.props.decrement(1)}}>-1</button>
          <span>{this.props.counterValue}</span>
          <button onClick= {() => {this.props.increment(1)}}>+1</button>
          <button onClick= {() => {this.props.increment(5)}}>+5</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
   return {
     counterValue: state.count
   }
  }

  const mapDispatchToProps = {
    increment,
    decrement

  }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);