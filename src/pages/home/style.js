import styled from 'styled-components';
import boardImagea from '../../statics/image/home/board-imagea.png';
import boardImageb from '../../statics/image/home/board-imageb.png';
import boardImagec from '../../statics/image/home/board-imagec.png';
import boardImaged from '../../statics/image/home/board-imaged.png';
import advert from '../../statics/image/home/advert.png';

export const HomeWrapper = styled.div`
  width: 945px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`
export const HomeWrapperLeft = styled.div`
  width: 625px;
`
export const HomeWrapperRight = styled.div`
  width: 280px;
`
//左侧上半部轮播图
export const RotaryWrapper = styled.div`
  width: 625px;
  height: 270px;
  margin-top: 93px;
  margin-bottom: 35px;
  img {
    width: 625px;
    height: 270px;
  }
`
//左侧下半部文章列表
export const ArticleListWrapper = styled.div`
  width: 625px;
  a {
    text-decoration: none;
  }
`
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
    margin-bottom: 10px;
    color: #000;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    :hover{
      text-decoration: underline;
    }
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
    color: #ea6f5a;
    margin-right: 10px;
    i {
      font-size: 16px;
    }
  }
  .author {
    color: #b4b4b4;
    margin-right: 10px;
    display: block;
  }
  .comment {
    color: #b4b4b4;
    margin-right: 10px;
    display: block;
    i {
      font-size: 12px;
    }
  }
  .like {
    font-size: 12px;
    font-weight: 400;
    color: #b4b4b4;
    margin-right: 10px;
    i {
      font-size: 12px;
    }
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  margin: 30px auto 60px;
  color: #ffffff;
  background-color: #9b9b9b;
`
//右侧上半部链接
export const BoardWrapper = styled.div`
  width: 280px;
  margin-top: 90px;
  margin-bottom: 32px;
`
export const BoardImage = styled.a`
  width: 280px;
  height: 50px;
  display: block;
  margin: 8px 0;
  &.board-imagea {
    background: url(${boardImagea});
    background-size: contain;
  }
  &.board-imageb {
    background: url(${boardImageb});
    background-size: contain;
  }
  &.board-imagec {
    background: url(${boardImagec});
    background-size: contain;
  }
  &.board-imaged {
    background: url(${boardImaged});
    background-size: contain;
  }
`
export const BoardQRcode = styled.a`
  width: 280px;
  height: 82px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 10px 22px;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  img {
    width: 60px;
    height: 60px;
  }
  div {
    margin-left: 14px;
  }
  .qrcode-title {
    display: block;
    font-size: 15px;
    color: #333;
  }
  .qrcode-details {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    color: #999;
  }
`
export const BoardAdvert = styled.a`
  width: 280px;
  height: 160px;
  display: block;
  border-radius: 6px;
  background: url(${advert}) no-repeat;
  background-size: contain;
`
//右侧下半部优秀作者
export const AuthorsWrapper = styled.div`
  width: 280px;
  height: 302px;
`
export const AuthorsTitle = styled.div`
  width: 280px;
  font-size: 14px;
  color: #969696;
  display: flex;
  justify-content: space-between;
`
export const AuthorsItem = styled.div`
  width: 280px;
  height: 47px;
  margin-top: 15px;
  display: flex;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .authors-item-left {
    flex: 1;
  }
  .name-follow {
    display: flex;
    justify-content: space-between;
  }
  .name {
    color: #333;
    font-size: 14px;
  }
  .follow {
    font-size: 13px;
    color: #42c02e;
  }
  .information {
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
`
export const AuthorsAll = styled.div`
  height: 35px;
  line-height: 33px;
  text-align: center;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 25px;
  cursor: pointer;
`
export const BackTop = styled.div`
  width: 50px;
  height: 50px;
  line-height: 48px;
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 50px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  transition: .5s;
  cursor: pointer;
  :hover {
    background-color: #dcdcdc;
  }
`
