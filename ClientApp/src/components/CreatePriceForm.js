import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Import components
import Button from './Button';
import FormInputs from './FormInputs';

const Wrapper = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  margin: 32px 0;
  width: 200px;
  height: 40px;
  background-color: #3A71EF;
`;

const inputFields = [
  {
    id: 'value',
    placeholder: 'Enter Value',
    type: 'number',
    label: 'Name'
  },
  {
    id: 'currency',
    placeholder: 'Enter 3-Letter Currency Code',
    type: 'text',
    label: 'Currency Code'
  }
];

const initialValues = {
  value: '',
  currency: 'CAD'
};

const validationSchema = Yup.object().shape({
  value: Yup.number()
    .positive('Number must be positive!')
    .required('Required'),
  currency: Yup.string()
    .min(3, 'Too short!')
    .max(3, 'Too long!')
    .required('Required')
});

const CreatePriceForm = ({
  onSubmit
}) => (
  <Wrapper>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          // dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          // handleReset,
        } = props;
        return (
          <Form onSubmit={handleSubmit}>
            <FormInputs
              inputFields={inputFields}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            <ButtonWrapper>
              <SubmitButton
                type='submit'
                disabled={isSubmitting}
              >
                Save and Continue
              </SubmitButton>
            </ButtonWrapper>
          </Form>
        );
      }}
    </Formik>
  </Wrapper>
);

export default withTheme(CreatePriceForm);
