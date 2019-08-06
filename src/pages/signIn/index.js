import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import {
  SignInWrapper,
  Logo,
  SingInMain,
  SingTitle,
  SingInInput,
  SingInButton
} from './style';

class Home extends PureComponent {
  
  render() {
    if (this.props.whetherSignIn) {
      return <Redirect to="/"/>
    }
    return (
      <SignInWrapper>
        <Logo/>
        <SingInMain>
          <SingTitle>
            <span className="active">登陆</span>
            <b>·</b>
            <span>注册</span>
          </SingTitle>
          <SingInInput>
            <input className="input-account" placeholder="手机号或邮箱"/>
            <input className="input-password" placeholder="密码"/>
          </SingInInput>
          <SingInButton>
            <button onClick={this.props.signInEvent}>登陆</button>
          </SingInButton>
        </SingInMain>
      </SignInWrapper>
    )
  }

}
const mapState = (state) => {
  return {
    whetherSignIn: state.getIn(['signIn', 'whetherSignIn'])
  }
};
const mapDispath = (despatch) => {
  return {
    signInEvent() {
      despatch(actionCreators.getSignIn());
    },
  }
}

export default connect(mapState, mapDispath)(Home);