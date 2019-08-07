import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  WriteWrapper
} from './style';

class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  
  render() {
    if (!this.props.whetherSignIn) {
      return <Redirect to="/sign_in"/>
    }
    return (
      <WriteWrapper>
      </WriteWrapper>
    )

  }

  handleChange(value) {
    this.setState({
      value
    })
  }

}
const mapState = (state) => {
  return {
    whetherSignIn: state.getIn(['signIn', 'whetherSignIn'])
  }
};
const mapDispath = (despatch) => {
  return {
  }
}

export default connect(mapState, mapDispath)(Home);