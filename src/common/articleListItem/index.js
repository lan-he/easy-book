import React from 'react';
import {
  ArticleListItem,
  ListItemLeft,
  ListItemLeftContent,
  Meta,
  ListItemRight,
  ArticleLoading,
  LoadingLeft,
  LoadingRight
} from './style.js';
const ArticleItem = (props) => {
  if (props.type === 'loading') {
    return (
      <ArticleLoading>
        <LoadingLeft>
          <div></div>
          <div className="loading-content"></div>
          <div className="loading-content last"></div>
          <div></div>
        </LoadingLeft>
        <LoadingRight></LoadingRight>
      </ArticleLoading>
    )
  } else {
    return (
      <ArticleListItem>
        <ListItemLeft>
          <ListItemLeftContent>
            <span className={props.nightPattern ? 'content-title nigcolor' : 'content-title'}>{props.item.get('title')}</span>
            <span className="content-details">{props.item.get('content')}</span>
          </ListItemLeftContent>
          <Meta>
            <div className="diamonds"><i className="iconfont">&#xe6b2;</i><span>{props.item.get('metaNumber')}</span></div>
            <div className="author">{props.item.get('author')}</div>
            <div className="comment"><i className="iconfont">&#xe684;</i><span>{props.item.get('commentNumber')}</span></div>
            <div className="like"><i className="iconfont">&#xe641;</i><span>{props.item.get('likeNumber')}</span></div>
          </Meta>
        </ListItemLeft>
        <ListItemRight>
          <img alt="" src={props.item.get('imageUrl')} />
        </ListItemRight>
      </ArticleListItem>
    )
  }
}
export default ArticleItem;
