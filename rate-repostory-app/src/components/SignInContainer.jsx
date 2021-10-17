import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  submitButton: {
    padding: 15,
    backgroundColor: '#0366d6',
    borderRadius: 4,
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="username"
            placeholder="Username"
            testID="usernameField"
          />

          <FormikTextInput
            name="password"
            placeholder="Password)"
            secureTextEntry
            testID="passwordField"
          />

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text
              fontWeight="bold"
              style={styles.submitButtonText}
              testID="submitButton"
            >
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignInContainer;
