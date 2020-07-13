import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {

    render() { 
        const { onReset, counters, onDelete, onIncrement, className, onDecrement} = this.props;       
        
        
        return ( 
            <div>
                <button onClick={() => onReset(className)}
                 className="btn btn-primary btn-sm m-2">Reset</button>
              { counters.map(counter =>(
            <Counter 
             key={counter.id}
             onReset={onReset}
             onDelete={onDelete}
             onIncrement={onIncrement}
             onDecrement={onDecrement} 
             counter={counter}
             />
            )) }
            </div>
         );
    }
}
 
export default Counters;

