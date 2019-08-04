import React, { Component } from 'react';
import '../../../statics/iconfont/iconfont.css';
import {
  ArticleListWrapper,
  ArticleListItem,
  ListItemLeft,
  ListItemLeftContent,
  Meta,
  ListItemRight
} from '../style.js';

class ArticleList extends Component {
  render() {
    return (
      <ArticleListWrapper>
        <ArticleListItem>
          <ListItemLeft>
            <ListItemLeftContent>
              <span className="content-title">能喝最烈的酒，也能熬过没有你的深秋</span>
              <span className="content-details">能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋</span>
            </ListItemLeftContent>
            <Meta>
              <div className="diamonds"><i className="iconfont">&#xe6b2;</i><span>26.4</span></div>
              <div className="author">浅岚</div>
              <div className="comment"><i className="iconfont">&#xe684;</i><span>56</span></div>
              <div className="like"><i className="iconfont">&#xe641;</i><span>26.4</span></div>
            </Meta>
          </ListItemLeft>
          <ListItemRight>
            <img alt="" src="https://upload-images.jianshu.io/upload_images/14205181-ddf91ad7c2ff29e8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
          </ListItemRight>
        </ArticleListItem>

        <ArticleListItem>
          <ListItemLeft>
            <ListItemLeftContent>
              <span className="content-title">能喝最烈的酒，也能熬过没有你的深秋</span>
              <span className="content-details">能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋</span>
            </ListItemLeftContent>
            <Meta>
              <div className="diamonds"><i className="iconfont">&#xe6b2;</i><span>26.4</span></div>
              <div className="author">浅岚</div>
              <div className="comment"><i className="iconfont">&#xe684;</i><span>56</span></div>
              <div className="like"><i className="iconfont">&#xe641;</i><span>26.4</span></div>
            </Meta>
          </ListItemLeft>
          <ListItemRight>
            <img alt="" src="https://upload-images.jianshu.io/upload_images/14205181-ddf91ad7c2ff29e8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
          </ListItemRight>
        </ArticleListItem><ArticleListItem>
          <ListItemLeft>
            <ListItemLeftContent>
              <span className="content-title">能喝最烈的酒，也能熬过没有你的深秋</span>
              <span className="content-details">能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋能喝最烈的酒，也能熬过没有你的深秋</span>
            </ListItemLeftContent>
            <Meta>
              <div className="diamonds"><i className="iconfont">&#xe6b2;</i><span>26.4</span></div>
              <div className="author">浅岚</div>
              <div className="comment"><i className="iconfont">&#xe684;</i><span>56</span></div>
              <div className="like"><i className="iconfont">&#xe641;</i><span>26.4</span></div>
            </Meta>
          </ListItemLeft>
          <ListItemRight>
            <img alt="" src="https://upload-images.jianshu.io/upload_images/14205181-ddf91ad7c2ff29e8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
          </ListItemRight>
        </ArticleListItem>
      </ArticleListWrapper>
    )
  }
}

export default ArticleList;