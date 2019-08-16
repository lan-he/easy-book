import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import ArticleItem from '../../../common/articleListItem'
import {
  ArticleListWrapper,
  LoadMore
} from '../style.js';

class ArticleList extends PureComponent {
  render() {
    const { homeList, loadMore, showLoading, nightPattern } = this.props;
    return (
      <ArticleListWrapper>
        {
          homeList.map((item, index) => {
            return (
              <Link to='/detail' key={index}>
                <ArticleItem item={item} nightPattern={nightPattern}/>
              </Link>
            )
          })
        }
        {
          showLoading ? <ArticleItem type='loading'/> : <LoadMore onClick={loadMore}>加载更多</LoadMore>
        }
      </ArticleListWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    homeList: state.getIn(['home', 'homeList']),
    showLoading: state.getIn(['home', 'showLoading']),
    nightPattern: state.getIn(['header', 'nightPattern']),
  }
}

const mapDispath = (despatch) => {
  return {
    loadMore() {
      despatch(actionCreators.getMoreList());
    }
  }
}

export default connect(mapState, mapDispath)(ArticleList);