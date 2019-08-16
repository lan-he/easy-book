import styled from 'styled-components';
//左侧下半部文章列表
export const ArticleListItem = styled.div`
  width: 625px;
  height: 110px;
  padding: 15px 0 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
`
export const ListItemLeft = styled.div`
  width: 458px;
`
export const ListItemRight = styled.div`
  width: 150px;
  height: 100px;
  img {
    width: 150px;
    height: 100px;
  }
`
export const ListItemLeftContent = styled.div`
  width: 458px;
  display: block;
  .content-title {
    display: block;
    color: #000;
    margin-bottom: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    :hover{
      text-decoration: underline;
    }
  }
  .nigcolor {
    color: #969696;
  }
  .content-details {
    font-size: 13px;
    line-height: 24px;
    color: #999;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`
export const Meta = styled.div`
  width: 458px;
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  .diamonds {
    font-size: 12px;
    font-weight: 400;
    margin-right: 10px;
    i, span {
      font-size: 12px;
      color: #ea6f5a;
    }
    i {
      font-size: 17px;
    }
  }
  .author {
    color: #b4b4b4;
    margin-right: 10px;
    display: block;
  }
  .comment {
    margin-right: 10px;
    display: block;
    i, span {
      font-size: 12px;
      color: #b4b4b4;
    }
  }
  .like {
    font-size: 12px;
    font-weight: 400;
    margin-right: 10px;
    i, span {
      font-size: 12px;
      color: #b4b4b4;
    }
  }
`
export const ArticleLoading = styled.div`
  width: 625px;
  height: 110px;
  display: flex;
  justify-content: space-between;
`
export const LoadingLeft = styled.div`
  width: 600px;
  height: 110px;
  div {
    width: 230px;
    height: 16px;
    margin-top: 10px;
    background-color: #eaeaea;
  }
  .loading-content {
    animation: myfirst 1s infinite;
  }
  .last {
    animation: myfirstlast 1s infinite;
  }
  @keyframes myfirst{
    0%   {width: 240px;}
    50%  {width: 450px;}
    100% {width: 240px;}
  }
  @keyframes myfirstlast{
    0%   {width: 450px;}
    50%  {width: 240px;}
    100% {width: 450px;}
  }
`

export const LoadingRight = styled.div`
  width: 150px;
  height: 90px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #eaeaea;
`