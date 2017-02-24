/**
 * Created by duanguang on 2017/2/24.
 */

import * as React from 'react';
interface ICounterPropsState{
    value:any
}

interface ICounterDispatchProps {

}


export default class Counter extends React.Component<ICounterPropsState,void>{
    constructor(props){
        super(props);
        console.log(11)
    }
    render(){
        const {value}=this.props;
        console.log(this.props)
        return(
            <div>
                1111
                <button >
                    Increment
                </button>
                {' '}
                <button >
                    Decrement
                </button>
                <hr />
                <div>
                    Clicked: {value} times
                </div>
            </div>
        )
    }
}