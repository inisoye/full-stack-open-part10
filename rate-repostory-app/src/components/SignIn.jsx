import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

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

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />

          <FormikTextInput
            name="password"
            placeholder="Password)"
            secureTextEntry
          />

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text fontWeight="bold" style={styles.submitButtonText}>
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
