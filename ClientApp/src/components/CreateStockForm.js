import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from './Button';
import { default as TextBase } from './Text';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  padding: ${props => props.padded ? '0 0 24px 0' : null};
  justify-content: center;
  align-items: center;
`;

const Text = styled(TextBase)`
  padding: 0 8px;
  width: 80px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 296px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  border: ${props => props.border || '1px solid #E2E5ED'};
  background-color: #fff;
`;

const Label = styled.label`
  padding: 0 32px 0 0;
  width: 150px;
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

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 500);
};

const initialValues = {
  name: '',
  code: '',
  description: '',
  timestamp: null
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
    .required('Required'),
  timestamp: Yup.date()
    .max(355, 'Too long!')
});

const CreateStockForm = () => {
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
              <Row padded>
                <Label htmlFor='name'>
                  Company Name
                </Label>

                <Input
                  id='name'
                  placeholder={'Enter Company\'s Name'}
                  type='text'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  border={
                    errors.name && touched.name ? '1px solid red' : null
                  }
                />

                <Text color={'red'}>
                  {errors.name && touched.name && errors.name}
                </Text>
              </Row>

              <Row padded>
                <Label htmlFor='code'>
                  Company Code
                </Label>

                <Input
                  id='code'
                  placeholder='Enter 3-Letter Ticker Code'
                  type='text'
                  value={values.code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  border={
                    errors.code && touched.code ? '1px solid red' : null
                  }
                />

                <Text color={'red'}>
                  {errors.code && touched.code && errors.code}
                </Text>
                </Row>

                <Row padded>
                <Label htmlFor='description'>
                  Company Description
                </Label>

                <Input
                  id='description'
                  placeholder='Enter Description'
                  type='text'
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  border={
                    errors.description && touched.description ? '1px solid red' : null
                  }
                />

                  <Text color={'red'}>
                    {errors.description && touched.description && errors.description}
                  </Text>
                </Row>
{/*
                <RowItem>
                  <Label htmlFor='startDate'>
                    Timeline *
                  </Label>
                  <Row>
                    <RowItem>
                      <InputSmall
                        id='startDate'
                        placeholder='Start Date'
                        type='text'
                        value={values.startDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        border={
                          errors.startDate && touched.startDate ? '1px solid red' : null
                        }
                      /> */}
                      
                      {/* {errors.string && touched.name && 
                        <Text color={'red'}>{errors.string}</Text>
                      } */}
                    {/* </RowItem>

                    <RowItem>
                      <Text>to</Text>
                    </RowItem>

                    <RowItem>
                      <InputSmall
                        id='endDate'
                        placeholder='End Date'
                        type='text'
                        value={values.endDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        border={
                          errors.endDate && touched.endDate ? '1px solid red' : null
                        }
                      /> */}

                      {/* {errors.string && touched.name && 
                        <Text color={'red'}>{errors.string}</Text>
                      } */}
                    {/* </RowItem>
                  </Row>
                </RowItem>
              </Row> */}
{/* 
              <Row>
                <RowItem>
                  <Label htmlFor='sector'>
                    Sector *
                  </Label>

                  <Input
                    id='sector'
                    placeholder='Enter Project Sector'
                    type='text'
                    value={values.sector}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    border={
                      errors.sector && touched.sector ? '1px solid red' : null
                    }
                  /> */}

                  {/* {errors.string && touched.name && 
                    <Text color={'red'}>{errors.string}</Text>
                  } */}
                {/* </RowItem> */}
{/* 
                <RowItem>
                  <Label htmlFor='budgetMin'>
                    Budget Range *
                  </Label>
                  <Row>
                    <RowItem>
                      <InputSmall
                        id='budgetMin'
                        placeholder='$'
                        type='number'
                        value={values.budgetMin}
                        onChange={e => {
                          handleChange(e);
                          setBudgetMin(e.currentTarget.value);
                        }}
                        onBlur={handleBlur}
                        border={
                          errors.budgetMin && touched.budgetMin ? '1px solid red' : null
                        }
                      />
                      
                      {errors.budgetMin && touched.budgetMin && 
                        <Text color={'red'}>{errors.budgetMin}</Text>
                      }
                    </RowItem>

                    <RowItem>
                      <Text>to</Text>
                    </RowItem> */}
{/* 
                    <RowItem>
                      <InputSmall
                        id='budgetMax'
                        placeholder='$'
                        type='number'
                        value={values.budgetMax}
                        onChange={e => {
                          handleChange(e);
                          setBudgetMax(e.currentTarget.value);
                        }}
                        onBlur={handleBlur}
                        border={
                          errors.budgetMax && touched.budgetMax ? '1px solid red' : null
                        }
                      />

                      {errors.budgetMax && touched.budgetMax && 
                        <Text color={'red'}>{errors.budgetMax}</Text>
                      }
                    </RowItem>
                  </Row>
                </RowItem>
              </Row> */}

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
