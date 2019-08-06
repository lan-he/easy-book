import styled from 'styled-components';

export const SignInWrapper = styled.div`
  width: 100%;
  min-height: 750px;
  position: absolute;
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
  span {
    padding: 10px;
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
  .input-account {
    border-radius: 4px 4px 0 0;
  }
  .input-password {
    border-radius: 0 0 4px 4px;
    border-top: 0 solid #c8c8c8;
  }
`
export const SingInButton = styled.div`
  button {
    background: #3194d0;
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
