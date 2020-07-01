import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Editor from 'for-editor';
import {
  WriteWrapper,
  WriteBackHome,
  PublishArticles
} from './style';

class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      value: '',
      toolbar: {
        h1: true, // h1
        h2: true, // h2
        h3: true, // h3
        h4: true, // h4
        img: true, // 图片
        link: true, // 链接
        code: true, // 代码块
        preview: true, // 预览
        expand: false, // 全屏
        undo: true, // 撤销
        redo: true, // 重做
        save: true, // 保存
        subfield: true, // 单双栏模式
      },
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }
  
  render() {
    if (!this.props.whetherSignIn) {
      return <Redirect to="/sign_in"/>
    }
    const { value, toolbar } = this.state;
    return (
      <WriteWrapper>
        <WriteBackHome>
          <input placeholder="请输入文章标题..."/>
          <PublishArticles>
            <Link to="/">
              <span className="back-home">回首页</span>
            </Link>
            <span>发布</span>
            <img alt="" src="https://user-gold-cdn.xitu.io/2019/3/18/1699037a6f8c50ee?imageView2/1/w/64/h/64/q/85/interlace/1"/>
          </PublishArticles>
        </WriteBackHome>
        <Editor
          value={value}
          placeholder="开始你的创作..."
          toolbar={toolbar}
          lineNum={false}
          preview={true}
          subfield={true}
          onChange={this.handleChange}
          onSave={this.handleOnSave}
        />
      </WriteWrapper>
    )
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  handleOnSave(e) {
    console.log(this.state.value);
  }

}
const mapState = (state) => {
  return {
    whetherSignIn: state.getIn(['login', 'whetherSignIn'])
  }
};
const mapDispath = (despatch) => {
  return {
  }
}

export default connect(mapState, mapDispath)(Home);