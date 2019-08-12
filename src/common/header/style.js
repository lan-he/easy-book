import styled from 'styled-components';
import logoPic from '../../statics/image/header/logo.png';
import bataPic from '../../statics/image/header/bata.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 58px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  position: fixed;
  z-index: 2;
  top: 0;
  border-bottom: 1px solid #F0F0F0;
`
export const Logo = styled.div`
  width: 100px;
  height: 56px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 945px;
  height: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.search-change {
    font-size: 13px;
    color: #969696;
    transition: .4s;
    cursor: pointer;
  }
  &.search-change:hover{ 
    color: #333333;
  }
  .icon-change {
    display: block;
    font-size: 14px;
    transition: .4s;
    transform-origin: center center;
  }
`
export const NavOption = styled.div`
  font-size: 17px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  i {
    font-size: 20px;
    display: block;
    margin-right: 5px;
  }
  &.active {
    width: 90px;
    height: 56px;
    color: #ea6f5a;
    margin-left: 100px;
  }
  &.app-download {
    width: 100px;
    height: 56px;
    line-height: 56px;
    text-align: center;
  }
  &.app-download:hover{ 
    background-color: #f5f5f5;
  }
  .typeface {
    color: #969696;
    font-size: 25px;
  }
`
export const NavSearch = styled.div`
  width: 240px;
  height: 38px;
  border-radius: 40px;
  background: #eee;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  margin-left: 30px;
  transition: 0.5s;
  .input-icon {
    background-color: transparent;
    width: 30px;
    height: 30px;
    transition: 0.5s;
  }
  &.focused {
    width: 320px;
    .input-icon {
      background-color: #777777;
    }
    .search-icon {
      color: #fff;
    }
    .nav-input {
      width: 280px;
    }
  }
`
export const NavInput = styled.input.attrs({placeholder: "搜索"})`
  width: 200px;
  height: 36px;
  font-size: 14px;
  background-color: transparent;
  padding-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  transition: 0.5s;
  &::placeholder {
    color: #999;
  }
`
export const SearchInfo = styled.div`
  width: 250px;
  box-sizing: border-box;
  font-size: 17px;
  position: absolute;
  top: 49px;
  padding: 20px 20px 10px 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
  user-select: none;
`
export const SearchInfoTitle = styled.div`
  width: 210px;
  height: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoItem = styled.span`
  display: inline-block;
  margin-left: 5px;
  text-decoration: none;
  line-height: 28px;
  cursor: pointer;
  .item-a {
    display: inline;
    padding: 2px 6px;
    box-sizing: border-box;
    border-radius: 3px;
    color: #787878;
    text-decoration: none;
    border: 1px solid #ddd;
    font-size: 12px;
    transition: 0.5s;
  }
  .item-a:hover { 
    border: 1px solid #787878;
  }
`
export const InputIcon = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  cursor: pointer;
  .search-icon {
    color: #969696;
  }
`
export const BatePic = styled.div`
  width: 57px;
  height: 25px;
  cursor: pointer;
  margin-left: 20px;
  background: url(${bataPic}) no-repeat;
  background-size: contain;
`
export const Addition = styled.div`
  width: 400px;
  height: 58px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Button = styled.div`
  font-size: 15px;
  cursor: pointer;
  &.log-in {
    color: #969696;
  }
  &.sign-up {
    width: 80px;
    height: 38px;
    color: #ea6f5a;
    line-height: 38px;
    text-align: center;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    transition: 0.5s;
  }
  &.sign-up:hover {
    background-color: #fef7f6;
  }
  &.write-btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ea6f5a;
  }
`

export const SignInFront = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const UserOptions = styled.div`
  width: 80px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  :hover {
    background-color: #f5f5f5;
  }
  :hover .service-list{
    display: block;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`
export const ServiceList = styled.div`
  width: 160px;
  position: absolute;
  left: 1px;
  top: 57px;
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  border: 1px solid #F0F0F0;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  display: none;
  a {
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #333;
    :hover {
      background-color: #f5f5f5;
    }
  }
`