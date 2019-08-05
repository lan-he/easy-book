import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import '../../../statics/iconfont/iconfont.css';
import {
  ArticleListWrapper,
  ArticleListItem,
  ListItemLeft,
  ListItemLeftContent,
  Meta,
  ListItemRight,
  LoadMore
} from '../style.js';

class ArticleList extends PureComponent {
  render() {
    const { homeList, loadMore } = this.props;
    return (
      <ArticleListWrapper>
        {
          homeList.map((item, index) => {
            return (
              <Link key={index} to='/detail' className="asdsadas">
                <ArticleListItem>
                  <ListItemLeft>
                    <ListItemLeftContent>
                      <span className="content-title">{item.get('title')}</span>
                      <span className="content-details">{item.get('content')}</span>
                    </ListItemLeftContent>
                    <Meta>
                      <div className="diamonds"><i className="iconfont">&#xe6b2;</i><span>{item.get('metaNumber')}</span></div>
                      <div className="author">{item.get('author')}</div>
                      <div className="comment"><i className="iconfont">&#xe684;</i><span>{item.get('commentNumber')}</span></div>
                      <div className="like"><i className="iconfont">&#xe641;</i><span>{item.get('likeNumber')}</span></div>
                    </Meta>
                  </ListItemLeft>
                  <ListItemRight>
                    <img alt="" src={item.get('imageUrl')}/>
                  </ListItemRight>
                </ArticleListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={loadMore}>加载更多</LoadMore>
      </ArticleListWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    homeList: state.getIn(['home', 'homeList']),
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