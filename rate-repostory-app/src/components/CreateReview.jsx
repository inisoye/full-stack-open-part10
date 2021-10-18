import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import useCreateReview from '../hooks/useCreateReview';

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
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating is required and must be a number')
    .min(0)
    .max(100)
    .required('Rating is required'),
  text: yup.string().typeError('Review must contain only text'),
});

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const response = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });

      const reviewedRepositoryId = response?.createReview?.repositoryId;

      history.push(`/repositories/${reviewedRepositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
          />

          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />

          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
            keyboardType="numeric"
          />

          <FormikTextInput name="text" placeholder="Review" />

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text
              fontWeight="bold"
              style={styles.submitButtonText}
              testID="submitButton"
            >
              Create a review
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default CreateReview;
