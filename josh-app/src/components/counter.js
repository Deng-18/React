import React, { Component } from 'react';


class Counter extends Component {

    render() { 
        return (
        <div>
            
            <span style={{fontSize:14}} className={this.getBadgeClasses()} >{this.myFormat()}</span>
             <button onClick={() => this.props.onIncrement(this.props.counter)} 
             className="btn btn-secondary btn-sm">+
              </button>
             <button onClick={() => this.props.onDecrement(this.props.counter)} 
             className="btn btn-secondary btn-sm m-2">-
              </button>
              <button onClick={
                   () => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">
                    Delete
              </button>
              
             
        </div>
               
);
}
getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning": "success" 
        return classes;
}

myFormat () {
 const {value} = this.props.counter
  return   value === 0 ? "zero":value;
}
}
export default Counter;