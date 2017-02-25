/**
 * Created by duanguang on 2017/2/24.
 */

import * as React from 'react';
import {CounterIndex} from "../model/counterIndex";
import {connect} from "react-redux";
import Dispatch = Redux.Dispatch;
import {ICounterStore} from "../reducer/todoIndex";
import * as todoIndexActions from '../action/todoIndex';
interface ICounterPropsState{
    countIndex:CounterIndex
}

interface ICounterDispatchProps {
    onChangeCount?:(countIndex:CounterIndex)=>void;
}

@connect<ICounterPropsState,ICounterDispatchProps,void>(
    (state:ICounterStore)=>{
console.log(state.todoIndex.counterIndex)
        return {
            countIndex:state.todoIndex.counterIndex,
        }
    },
    (dispatch:Dispatch)=>{
        return{
            onChangeCount:(countIndex:CounterIndex)=>dispatch(todoIndexActions.changeCount(countIndex)),
        }
    }
)
export default class Counter extends React.Component<ICounterPropsState&ICounterDispatchProps,void>{
    constructor(props){
        super(props);
        console.log(this.props)
    }
    onChange(countIndex:CounterIndex){
        this.props.onChangeCount&&this.props.onChangeCount(countIndex);
    }
    handleChange(even){
        let num=parseInt(even.target.value);
        if(isNaN(num)){
            num=0;
        }
        this.props.countIndex.count=num;
        this.onChange(this.props.countIndex);
    }

    increment(){
        let count=this.props.countIndex.count;
        let countIndex=new CounterIndex();
        countIndex.count=count+1;
        this.onChange(countIndex);
    }

    decrement(){
        let count=this.props.countIndex.count;
        let countIndex=new CounterIndex();
        countIndex.count=count-1;

        this.onChange(countIndex);
    }
    render(){
        const {count} = this.props.countIndex;
        console.log(this.props);
        return(
            <div>
                1111
                <button onClick={this.increment.bind(this)}>
                    Increment+
                </button>
                {' '}
                <button onClick={this.decrement.bind(this)}>
                    Decrement-
                </button>
                <hr />
                <div>
                    <input className="counter-value"  value={count.toString()} onChange={this.handleChange.bind(this)}/>
                    Clicked: {count} times
                </div>
            </div>
        )
    }
}