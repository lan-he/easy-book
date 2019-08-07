import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store'
import { userLogOut } from '../../pages/signIn/store/actionCreators'
import '../../statics/iconfont/iconfont.css';
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoItem,
  InputIcon,
  UserOptions,
  ServiceList,
  SignInFront,
} from './style';

class Header extends Component {
  getListArea() {
    const { focused, labelList, page, totalPage, handerMouseEnter, handerMouseLeave, mouseIn, handerChangePage} = this.props;
    const newPage = labelList.toJS();
    const pageList = [];
    if (newPage.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newPage[i]}>
            <a href="/" className="item-a">{newPage[i]}</a>
          </SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handerMouseEnter}
          onMouseLeave={handerMouseLeave}
        >
          <SearchInfoTitle>
            <Container>热门搜索</Container>
            <Container className="search-change" onClick={() => handerChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont icon-change">&#xe63f;</i> 
              换一批
            </Container>
          </SearchInfoTitle>
          {pageList}
        </SearchInfo>
      )
    } else {
      return null;
    } 
  }
  judgingLoginStatus() {
    const { whetherSignIn, userLogOut } = this.props;
    if (!whetherSignIn) {
      return (
        <SignInFront>
          <Link to="/sign_in">
            <Button className="log-in">登录</Button>
          </Link>
          <Button className="sign-up">注册</Button>
        </SignInFront>
      )
    } else {
      return (
        <UserOptions>
          <img alt="" src="https://cdn2.jianshu.io/assets/default_avatar/9-cceda3cf5072bcdd77e8ca4f21c40998.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"/>
          <i className="iconfont">&#xe603;</i>
          <ServiceList className="service-list">
            <Link to="/">
              <span>我的主页</span>
            </Link>
            <Link to="/" onClick={userLogOut}>
              <span>退出登陆</span>
            </Link>
          </ServiceList>
        </UserOptions>
      )
    }
  }
  render() {
    if (this.props.showHeader) {
      return (
        <HeaderWrapper>
          <Link to="/">
            <Logo/>
          </Link>
          <Nav>
            <Container>
              <NavOption className="active"><MenuPic/>首页</NavOption>
              <NavOption className="app-download"><AppPic/>下载App</NavOption>
              <NavSearch className={this.props.focused ? 'focused' : 'blured'}>
                <NavInput
                  className="nav-input"
                  onFocus={() => this.props.headerInputFocus(this.props.labelList)}
                  onBlur={this.props.headerInputBlur}
                />
                <InputIcon className="input-icon">
                  <i className="iconfont search-icon">&#xe737;</i> 
                </InputIcon>
                {this.getListArea()}
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
            {this.judgingLoginStatus()}
            <Link to="/write">
              <Button className="write-btn"><FeatherPenPic/>写文章</Button>
            </Link>
          </Addition>
        </HeaderWrapper>
      )
    } else {
      return null
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    showHeader: state.getIn(['header', 'showHeader']),
    focused: state.getIn(['header', 'focused']),
    labelList: state.getIn(['header', 'labelList']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    whetherSignIn: state.getIn(['signIn', 'whetherSignIn']),
  }
}

const mapDispathToProps = (despatch) => {
  return {
    headerInputFocus(labelList) {
      (labelList.size === 0) && despatch(actionCreators.getLabelList());
      despatch(actionCreators.searchFocus());
    },
    headerInputBlur() {
      despatch(actionCreators.searchBlur());
    },
    handerMouseEnter() {
      despatch(actionCreators.mouseEnter());
    },
    handerMouseLeave() {
      despatch(actionCreators.mouseLeave());
    },
    handerChangePage(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = 'rotate('+(originAngle + 360)+'deg)';
      if (page < totalPage) {
        despatch(actionCreators.changePageList(page + 1));
      } else {
        despatch(actionCreators.changePageList(1));
      }
    },
    userLogOut() {
      despatch(userLogOut());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);