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
  LinkWrap,
  MessageTips
} from './style';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        nickname: '',
        mobile_number: '',
        password: ''
      },
      tipsShow: false
    }
    this.fromChange = this.fromChange.bind(this);
  }
  
  render() {
    if (this.props.whetherSignIn) {
      return <Redirect to="/"/>
    }
    return (
      <SignInWrapper>
        <Logo/>
        {
          this.state.tipsShow ? <MessageTips>手机号格式不正确</MessageTips> : null
        }
        <SingInMain>
          <SingTitle>
            <Link to="/sign_in">
              <span>登陆</span>
            </Link>
            <b>·</b>
            <span className="active">注册</span>
          </SingTitle>
          <SingInInput>
            <input value={this.state.userInfo.nickname} onChange={(e) => {this.fromChange(e, 'nickname')}} className="input-name" placeholder="你的昵称"/>
            <input value={this.state.userInfo.mobile_number} onChange={(e) => {this.fromChange(e, 'mobile_number')}} className="input-account" placeholder="手机号"/>
            <input type="password" value={this.state.userInfo.password}  onChange={(e) => {this.fromChange(e, 'password')}} className="input-password" placeholder="设置密码"/>
          </SingInInput>
          <SingUpButton>
            <button onClick={this.props.signUpEvent.bind(this)}>注册</button>
          </SingUpButton>
          <Clause>
            点击 “注册” 即表示您同意并愿意遵守EasyBook <br/>
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

  fromChange(e, type) {
    const value = e.target.value;
    const preState = this.state;
    if (type === 'nickname') {
      this.setState({
        userInfo: Object.assign({}, preState.userInfo, { nickname: value })
      });
    } else if (type === 'mobile_number') {
      this.setState({
        userInfo: Object.assign({}, preState.userInfo, { mobile_number: value })
      });
    } else if (type === 'password') {
      this.setState({
        userInfo: Object.assign({}, preState.userInfo, { password: value })
      });
    }
  }
}
const mapState = (state) => {
  return {
    whetherSignIn: state.getIn(['signin', 'whetherSignIn'])
  }
};
const mapDispath = (despatch) => {
  return {
    signUpEvent() {
      if (!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/).test(this.state.mobile_number)) {
        this.setState({
          tipsShow: true
        });
        setTimeout(() => {
          this.setState({
            tipsShow: false
          });
        },1000)
        return
      }
      despatch(actionCreators.signUp(this.state.userInfo));
    },
  }
}

export default connect(mapState, mapDispath)(Home);