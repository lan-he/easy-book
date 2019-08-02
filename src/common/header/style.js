import styled from 'styled-components';
import logoPic from '../../statics/image/header/logo.png'
import bataPic from '../../statics/image/header/bata.png'
import menuPic from '../../statics/image/header/menu.png'
import featherPen from '../../statics/image/header/feather-pen.png'
import appPic from '../../statics/image/header/app.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #F0F0F0;
`
export const Logo = styled.a.attrs({href: '/'})`
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
  justify-content: space-between;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
`
export const NavOption = styled.div`
  font-size: 17px;
  margin: 0 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    color: #ea6f5a;
    margin-left: 100px;
  }
  &.app-download {
    width: 120px;
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
  transition: 0.5s;
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
  height: 38px;
  font-size: 14px;
  background-color: transparent;
  padding-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  &::placeholder {
    color: #999;
  }
`
export const InputIcon = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  .search-icon {
    color: #969696;
  }
`
export const BatePic = styled.div`
  width: 57px;
  height: 25px;
  background: url(${bataPic}) no-repeat;
  background-size: contain;
`
export const Addition = styled.div`
  width: 300px;
  height: 58px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const MenuPic = styled.div`
  width: 20px;
  height: 20px;
  background: url(${menuPic}) no-repeat;
  background-size: contain;
  margin-right: 10px;
`
export const Button = styled.div`
  font-size: 15px;
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
    transform: 0.5s;
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
export const FeatherPenPic = styled.div`
  width: 20px;
  height: 20px;
  background: url(${featherPen}) no-repeat;
  background-size: contain;
  margin-right: 10px;
`
export const AppPic = styled.div`
  width: 20px;
  height: 20px;
  background: url(${appPic}) no-repeat;
  background-size: contain;
  margin-right: 10px;
`