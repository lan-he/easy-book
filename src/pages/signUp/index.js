import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { actionCreators } from './store';
import {
  SignInWrapper,
  Logo,
  SingInMain,
  SingTitle,
  SingInInput,
  SingUpButton,
  Clause,
  CommunityAccount,
  Partitionline,
  LinkWrap
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
            <Link to="/sign_in">
              <span>登陆</span>
            </Link>
            <b>·</b>
            <span className="active">注册</span>
          </SingTitle>
          <SingInInput>
            <input className="input-name" placeholder="你的昵称"/>
            <input className="input-account" placeholder="手机号"/>
            <input className="input-password" placeholder="设置密码"/>
          </SingInInput>
          <SingUpButton>
            <button onClick={this.props.signInEvent}>注册</button>
          </SingUpButton>
          <Clause>
            点击 “注册” 即表示您同意并愿意遵守简书 <br/>
            <Link to="/">用户协议</Link>&nbsp;和&nbsp;<Link to="/">隐私政策</Link>
          </Clause>
          <CommunityAccount>
            <Partitionline>
              <em></em>
              <span>社交帐号直接注册</span>
              <em></em>
            </Partitionline>
            <LinkWrap>
              <i className="iconfont weibo">&#xe608;</i>
              <i className="iconfont weixin">&#xe65d;</i>
              <i className="iconfont qq">&#xe61d;</i>
            </LinkWrap>
          </CommunityAccount>
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