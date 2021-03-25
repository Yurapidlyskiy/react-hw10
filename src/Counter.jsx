import React, { Component } from 'react';
import styles from './Counter.module.css';


export default class Counter extends Component {
    state={
        number: this.props.initialValue,
    }

handleMinus = ()=>{
this.setState((prevState)=> ({
    number: prevState.number -1,
}))
};
handlePlus = ()=>{
    this.setState((prevState)=> ({
        number: prevState.number +1,
    }))
};

    render() {
      
        const { number}=this.state
        return (
            <div className={styles.counter}>
              
               <button className={styles.minus} onClick={this.handleMinus} ><span className={styles.minusText}>Відняти</span></button>
               <span className={styles.numberStyles}>{number}</span>
               <button className={styles.plus} onClick={this.handlePlus}><span className={styles.plusText}>Додати</span></button>
            </div>
        )
    }
}