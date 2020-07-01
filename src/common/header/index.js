import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { userLogOut } from '../../pages/login/store/actionCreators';
import defaultImg from '../../statics/image/header/default.jpg'
import {
  OutermostLayer,
  HeaderWrapper,
  Logo,
  Nav,
  Container,
  NavOption,
  NavSearch,
  BatePic,
  Addition,
  Button,
  NavInput,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoItem,
  InputIcon,
  UserOptions,
  ServiceList,
  SignInFront,
  PopoverModal,
  NightPattern
} from './style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayHiding: false,
    }
    this.setUpSwitch = this.setUpSwitch.bind(this);
  }
  componentDidMount(){
    document.addEventListener('click',(e) => {
      if(e.target.className !== 'night-pattern'){
        this.setState({
          displayHiding: false
        })
      }
    })
  }
  render() {
    const { nightPattern, onNightMode } = this.props;
    if (this.props.showHeader) {
      return (
        <OutermostLayer>
          <HeaderWrapper className={nightPattern ? 'night-color' : ''}>
            <Link to="/">
              <Logo/>
            </Link>
            <Nav>
              {this.loginStatusFind()}
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
            </Nav>
            <Addition>
              <Container>
                <NavOption className="night-pattern">
                  <i className="iconfont typeface" onClick={this.setUpSwitch}>&#xe76a;</i> 
                  {
                    this.state.displayHiding ? (
                    <PopoverModal className={nightPattern ? 'popup-background' : ''}>
                      <NightPattern>
                        <span>夜间模式</span>
                        <div className="switchn">
                          <div className={nightPattern ? 'active switch-left' : 'switch-left'} onClick={() => onNightMode('on')}>开</div>
                          <div className={nightPattern ? 'switch-right' : 'active switch-right'} onClick={() => onNightMode('off')}>关</div>
                        </div>
                      </NightPattern>
                    </PopoverModal>
                    ) : null
                  }
                </NavOption>
                <BatePic/>
              </Container>
              {this.loginStatusHone()}
              <Link to="/write">
                <Button className="write-btn">
                  <i className="iconfont">&#xe616;</i>
                  写文章
                </Button>
              </Link>
            </Addition>
          </HeaderWrapper>
        </OutermostLayer>
      )
    } else {
      return null
    }
  }
  setUpSwitch(e) {
    e.nativeEvent.stopImmediatePropagation()
    this.setState({
      displayHiding: true,
    })
  }
  getListArea() {
    // 热门搜索换一批功能
    const { focused, labelList, page, totalPage, handerMouseEnter, handerMouseLeave, mouseIn, handerChangePage } = this.props;
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
  loginStatusHone() {
    // 判断登陆状态返回不同的顶部信息
    const { whetherSignIn, userLogOut } = this.props;
    if (!whetherSignIn) {
      return (
        <SignInFront>
          <Link to="/sign_in">
            <Button className="log-in">登录</Button>
          </Link>
          <Link to="/sign_up">
            <Button className="sign-up">注册</Button>
          </Link>
        </SignInFront>
      )
    } else {
      return (
        <UserOptions>
          <img alt="" src={defaultImg}/>
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
  loginStatusFind() {
    // 判断登陆状态返回不同的右侧顶部信息
    const { whetherSignIn } = this.props;
    if (!whetherSignIn) {
      return (
        <Container>
          <NavOption className="active">
            <i className="iconfont">&#xe600;</i>
            首页
          </NavOption>
          <NavOption className="app-download">
            <i className="iconfont">&#xe611;</i>
            下载App
          </NavOption>
        </Container>
      )
    } else {
      return (
        <Container>
          <NavOption className="active">
            <i className="iconfont">&#xe613;</i>
            发现
          </NavOption>
          <NavOption className="app-download">
            <i className="iconfont">&#xe612;</i>
            关注
          </NavOption>
          <NavOption className="app-download">
            <i className="iconfont">&#xe627;</i>
            消息
          </NavOption>
        </Container>
      )
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
    nightPattern: state.getIn(['header', 'nightPattern']),
    whetherSignIn: state.getIn(['login', 'whetherSignIn']),
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
    },
    onNightMode(derail) {
      if (derail === 'on') {
        document.body.style.background = '#3f3f3f';
        document.body.style.color = '#969696';
        despatch(actionCreators.onNightMode());
      } else if (derail === 'off') {
        document.body.style.background = '#ffffff';
        document.body.style.color = '#000000';
        despatch(actionCreators.offNightMode());
      }
      
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);