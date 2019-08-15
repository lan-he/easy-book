import React, { PureComponent } from 'react';
import {
  BoardWrapper,
  BoardImage,
  BoardQRcode,
  BoardAdvert
} from '../style.js';

class Board extends PureComponent {
  render() {
    return (
      <BoardWrapper>
        {/* <BoardImage className="board-imagea"></BoardImage>
        <BoardImage className="board-imageb"></BoardImage>
        <BoardImage className="board-imagec"></BoardImage>
        <BoardImage className="board-imaged"></BoardImage> */}
        <BoardQRcode>
          <img alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
          <div>
            <span className="qrcode-title">下载EasyBook手机App</span>
            <span className="qrcode-details">随时随地你的创作</span>
          </div>
        </BoardQRcode>
        <BoardAdvert></BoardAdvert>
      </BoardWrapper>
    )
  }
}

export default Board;