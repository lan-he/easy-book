import styled from 'styled-components';

export const SignInWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 999;
  background-color: #f1f1f1;
`
export const Logo = styled.div`
`
export const SingInMain = styled.div`
  width: 400px;
  background-color: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 50px 50px 30px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  margin: 90px auto;
`
export const SingTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #969696;
  font-size: 18px;
  margin-bottom: 50px;
  a {
    padding: 10px 0;
  }
  span {
    padding: 10px;
    color: #969696;
    cursor: pointer;
    :hover{
      border-bottom: 2px solid #ea6f5a;
    }
  }
  b {
    padding: 10px;
    font-weight: 100;
    margin: 0 5px;
  }
  .active {
    color: #ea6f5a;
    font-weight: 700;
    border-bottom: 2px solid #ea6f5a;
  }
`
export const SingInInput = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    font-size: 14px;
    outline: none;
  }
  .input-name {
    border-radius: 4px 4px 0 0;
  }
  .input-account {
    border-top: none;
  }
  .input-password {
    border-radius: 0 0 4px 4px;
    border-top: none;
  }
`
export const SingUpButton = styled.div`
  button {
    background: #3db922;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
`
export const Clause = styled.div`
  margin: 10px 0;
  padding: 0;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: #969696;
  a {
    color: #3194d0;
  }
`
export const CommunityAccount = styled.div`
  display: flex;
  flex-direction: column;
`
export const Partitionline = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #b5b5b5;
  span {
    display: block;
    margin: 0 25px;
  }
  em {
    display: block;
    width: 60px;
    height: 1px;
    background-color: #b5b5b5;
  }
`
export const LinkWrap = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  i {
    font-size: 28px;
  }
  .weibo {
    color: #e05244;
  }
  .weixin {
    color: #00bb29;
  }
  .qq {
    color: #498ad5;
  }
`
export const MessageTips = styled.div`
  width: 310px;
  height: 38px;
  background-color: #fff;
  line-height: 38px;
  text-align: center;
  border: 1px solid #ea6f5a;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 66px;
`
