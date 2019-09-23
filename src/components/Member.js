import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../modules/counter';
import * as memberActions from '../modules/member';

class Member extends Component {

    componentDidMount(){

        const { number, MemberActions } = this.props;
        MemberActions.getMember();
    }

    render(){
        const { CounterActions, number, member, error, loading } = this.props;
        console.log(this.props)
        return(
            <div>
                <p>{number}</p>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                { loading && <h2>로딩중...</h2>}
                
            </div>
        )
    }
}
export default connect(
    (state) => ({
        number: state.counter,
        member: state.member.data,
        loading: state.member.pending,
        error: state.member.error
    }),
    (dispatch) => ({
        CounterActions : bindActionCreators(counterActions, dispatch),
        MemberActions : bindActionCreators(memberActions, dispatch)
    })
)(Member);