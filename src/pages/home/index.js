import React, { Component } from 'react';
import Board from './components/Board.js';
import ArticleList from './components/ArticleList.js';
import Authors from './components/Authors.js';
import Rotary from './components/Rotary.js';
import {
  HomeWrapper,
  HomeWrapperLeft,
  HomeWrapperRight
} from './style';

class Home extends Component {
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
      </HomeWrapper>
    )
  }
}

export default Home;