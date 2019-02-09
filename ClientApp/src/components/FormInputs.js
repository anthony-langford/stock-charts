import React from 'react';
import styled from 'styled-components';
import { ErrorMessage } from 'formik';

// Import components
import { default as TextBase } from './Text';

const Row = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  padding: ${props => props.padded ? '0 0 24px 0' : null};
  justify-content: center;
  align-items: start;
`;

const ErrorText = styled(TextBase)`
  padding: 0 8px;
  min-height: 18px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  border: ${props => props.border || '1px solid #E2E5ED'};
  background-color: #fff;
  text-overflow: ellipsis;

  @media (min-width: 350px) {
    width: 250px
  }
`;

const Label = styled.label`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  @media (min-width: 600px) {
    padding: 0 32px 0 0;
  }
  align-items: center;
  height: 40px;
`;

const FormInputs = ({
  inputFields,
  values,
  handleChange,
  handleBlur,
  errors,
  touched
}) => (
  inputFields.map(inputData => (
    <Row padded key={inputData.id}>
      <Label htmlFor='name'>
        Company Name
      </Label>

      <InputWrapper>
        <Input
          id={inputData.id}
          placeholder={inputData.placeholder}
          type={inputData.type}
          value={values[inputData.id]}
          onChange={handleChange}
          onBlur={handleBlur}
          border={
            errors[inputData.id] && touched[inputData.id] ? '1px solid red' : null
          }
        />

      <ErrorText color={'red'}>
        <ErrorMessage name={inputData.id}>
          {errorMessage => errorMessage}
        </ErrorMessage>
      </ErrorText>
    </InputWrapper>
  </Row>
  ))
);

export default FormInputs;
