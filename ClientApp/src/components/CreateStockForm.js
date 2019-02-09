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
  background-color: ${props => props.theme.secondaryColor};

  &:hover {
    background-color: ${props => props.theme.button.secondaryHover};
  }
`;

const inputFields = [
  {
    id: 'name',
    placeholder: 'Enter Company\'s Name',
    type: 'text',
    label: 'Name'
  },
  {
    id: 'code',
    placeholder: 'Enter 3-Letter Ticker Code',
    type: 'text',
    label: 'Code'
  },
  {
    id: 'description',
    placeholder: 'Enter Description',
    type: 'text',
    label: 'Company Description'
  }
];

const initialValues = {
  name: '',
  code: '',
  description: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, 'Too long!')
    .required('Required'),
  code: Yup.string()
    .min(3, 'Too short!')
    .max(3, 'Too long!')
    .required('Required'),
  description: Yup.string()
    .max(355, 'Too long!')
    .required('Required')
});

const CreateStockForm = ({
  onSubmit
}) => {
  return (
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
};

export default withTheme(CreateStockForm);
