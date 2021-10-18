import React from 'react';
import { useHistory } from 'react-router-native';

import SignInContainer from './SignInContainer';

import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const response = await signIn({ username, password });
      console.log(response);

      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
