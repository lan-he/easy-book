import React, {Component} from 'react';
import '../../statics/iconfont/iconfont.css'
import {
  HeaderWrapper,
  Logo,
  Nav,
  Container,
  NavOption,
  NavSearch,
  BatePic,
  Addition,
  Button,
  MenuPic,
  FeatherPenPic,
  AppPic,
  NavInput,
  InputIcon
} from './style'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    }
    this.headerInputFocus = this.headerInputFocus.bind(this);
    this.headerInputBlur = this.headerInputBlur.bind(this);
  }
  
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <Container>
              <NavOption className="active"><MenuPic/>首页</NavOption>
              <NavOption className="app-download"><AppPic/>下载App</NavOption>
              <NavSearch className={this.state.focused ? 'focused' : ''}>
                <NavInput 
                  className="nav-input"
                  onFocus={this.headerInputFocus}
                  onBlur={this.headerInputBlur}
                />
                <InputIcon className="input-icon">
                  <i className="iconfont search-icon">&#xe737;</i> 
                </InputIcon>
              </NavSearch>
            </Container>
            <Container>
              <NavOption> 
                <i className="iconfont typeface">&#xe76a;</i> 
              </NavOption>
              <BatePic/>
            </Container>
          </Nav>
          <Addition>
            <Button className="log-in">登录</Button>
            <Button className="sign-up">注册</Button>
            <Button className="write-btn"><FeatherPenPic/>写文章</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }

  headerInputFocus() {
    this.setState({
      focused: true
    })
  }

  headerInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;