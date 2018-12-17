import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './components/FormLogin';
import actions from 'redux/login/actions';
import { tokenExist } from '../../utils';

class Login extends Component {
  handleSubmit = (values) => {
    this.props.dispatch(actions.getToken(values));
  }

  componentDidMount() {
    if(!this.props.isLogged){
      tokenExist(this.props);
    }
  }

  render() {
    return (
      <>
        <LoginForm onSubmit={this.handleSubmit} />
      </>
    )
  }
}

const mapStateToProps = ({ general: { isLogged } }) => ({
  isLogged
});

export default connect(mapStateToProps)(Login);
