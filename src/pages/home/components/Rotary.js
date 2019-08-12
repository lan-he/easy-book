import React, { PureComponent } from 'react';
import '../../../statics/iconfont/iconfont.css';
import {
  RotaryWrapper,
  RotaryContainer,
  LRButtons,
  ChoiceButtons
} from '../style.js';

class Rotary extends PureComponent {
  constructor() {
    super();
    this.state = {
      wheelImgs: [{
        src: "https://upload.jianshu.io/admin_banners/web_images/4686/b0c8770725de15714a4cb894f0ecdbc16f216008.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        url: ""
      },{
        src: "https://upload.jianshu.io/admin_banners/web_images/4701/54f265e313c8cd6abc2e03e28d183653e22ce8f3.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        url: ""
      },{
        src: "https://upload.jianshu.io/admin_banners/web_images/4688/b566e8cd6e7c0b15b1cc510fdc596ac501e97a96.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        url: ""
      }],
      wheelPage: 1,
    }
    this.leftTurning = this.leftTurning.bind(this);
    this.rightTurning = this.rightTurning.bind(this);
  }
  render() {
    return (
      <RotaryWrapper>
        <RotaryContainer>
          {
            this.state.wheelImgs.map((item, index) => {
              console.log("sada");
              return <img className={index === this.state.wheelPage ? "top-img" : ""} key={item.src} alt="" src={item.src}/>
            })
          }
        </RotaryContainer>
        <LRButtons>
          <div className="switch-left block" onClick={this.leftTurning}>
            <i className="iconfont">&#xe625;</i>
          </div>
          <div className="switch-right block" onClick={this.rightTurning}>
            <i className="iconfont">&#xe623;</i>
          </div>
        </LRButtons>
        <ChoiceButtons>
        </ChoiceButtons>
      </RotaryWrapper>
    )
  }

  leftTurning() {
    console.log("leftTurning");
    this.setState((PrevState) => {
      const imgLength = PrevState.wheelImgs.length - 1;
      if (PrevState.wheelPage === 0) {
        return {
          wheelPage: imgLength
        }
      } else {
        return {
          wheelPage: PrevState.wheelPage - 1
        }
      }
    });
  }

  rightTurning() {
    this.setState((PrevState) => {
      const imgLength = PrevState.wheelImgs.length - 1;
      if (PrevState.wheelPage === imgLength) {
        return {
          wheelPage: 0
        }
      } else {
        return {
          wheelPage: PrevState.wheelPage + 1
        }
      }
    });
  }
}

export default Rotary;