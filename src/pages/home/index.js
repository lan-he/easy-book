import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Board from './components/Board.js';
import ArticleList from './components/ArticleList.js';
import Authors from './components/Authors.js';
import Rotary from './components/Rotary.js';
import {
  HomeWrapper,
  HomeWrapperLeft,
  HomeWrapperRight,
  BackTop
} from './style';

class Home extends PureComponent {
  
  render() {
    return (
      <HomeWrapper>
        <HomeWrapperLeft>
          <Rotary></Rotary>
          <ArticleList></ArticleList>
        </HomeWrapperLeft>
        <HomeWrapperRight>
          <Board></Board>
          <Authors></Authors>
        </HomeWrapperRight>
        {this.props.showScroll ? <BackTop onClick={this.homeScrollTop}><i className="iconfont">&#xe626;</i></BackTop> : null}
      </HomeWrapper>
    )
  }

  homeScrollTop() {
    let scrollToTop = window.setInterval(function() {
      let pos = window.pageYOffset;
      if ( pos > 0 ) {
        window.scrollTo( 0, pos - 40 );
      } else {
        window.clearInterval( scrollToTop );
      }
    }, 2);
  }

  componentDidMount() {
    this.props.getHomeList();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapState = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
};
const mapDispath = (despatch) => {
  return {
    getHomeList() {
      despatch(actionCreators.getHomeArticleList());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 400) {
        despatch(actionCreators.changeTopShow(true));
      } else {
        despatch(actionCreators.changeTopShow(false));
      }
    }
  }
}

export default connect(mapState, mapDispath)(Home);