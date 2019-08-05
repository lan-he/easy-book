import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthorsWrapper, AuthorsTitle, AuthorsItem, AuthorsAll} from '../style.js';

class Authors extends Component {
  render() {
    return (
      <AuthorsWrapper>
        <AuthorsTitle>
          <div>推荐作者</div>
          <div>换一批</div>
        </AuthorsTitle>
        {
          this.props.authorList.map((item) => {
            return(
              <AuthorsItem key={item.get('id')}>
                <img alt="" src={item.get('avatar_source')}/>
                <div className="authors-item-left">
                  <div className="name-follow">
                    <span className="name">{item.get('nickname')}</span>
                    <span className="follow">+关注</span>
                  </div>
                  <div className="information">写了{item.get('total_wordage')}字 · {item.get('total_likes_count')}喜欢</div>
                </div>
              </AuthorsItem>
            )
          })
        }
        <AuthorsAll>
          查看全部
        </AuthorsAll>
      </AuthorsWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    authorList: state.getIn(['home', 'authorList'])
  }
}

export default connect(mapState, null)(Authors);