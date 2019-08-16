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
  SingInButton,
  SingInRemember,
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
            <i>
              <span className="active">登陆</span>
            </i>
            <b>·</b>
            <Link to="/sign_up">
              <span>注册</span>
            </Link>
          </SingTitle>
          <SingInInput>
            <input className="input-account" placeholder="手机号或邮箱"/>
            <input className="input-password" placeholder="密码"/>
          </SingInInput>
          <SingInButton>
            <SingInRemember>
              <label>
                <input type="checkbox"/>
                记住我
              </label>
              <span>登录遇到问题 ？</span>
            </SingInRemember>
            <button onClick={this.props.signInEvent}>登陆</button>
          </SingInButton>
          <CommunityAccount>
            <Partitionline>
              <em></em>
              <span>社交帐号登录</span>
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