import styled from 'styled-components';

export const WriteWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  background-color: #FFF;
  .for-container{
    flex: 1;
    border-radius: 0px;
  }
  .for-editor-edit {
    border-right: 1px solid #ddd;
  }
  .for-editor {
    height: 115%;
  }
  .for-editor {
    flex: 1;
  }
`
export const WriteBackHome = styled.div`
  width: 100%;
  height: 64px;
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  input {
    width: 1000px;
    height: 64px;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    padding-left: 20px;
    border: none;
    outline: none;
  }
`
export const PublishArticles = styled.div`
  width: 200px;
  height: 64px;
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    white-space: nowrap;
    color: #007fff;
    cursor: pointer;
  }
  .back-home {
    display: block;
    margin-right: 20px;
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: 30px;
  }
`
