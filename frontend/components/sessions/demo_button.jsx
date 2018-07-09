import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const DemoButton = props => {

  const handleDemoLogin = () => {
    event.preventDefault();
    const user = { username: 'friend', password: 'password' };
    props.login(user);
  };

  return (
    <input
      onClick={handleDemoLogin}
      className='submit-button'
      type='button'
      value='Demo Login' />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(DemoButton);
