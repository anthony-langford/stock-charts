import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { default as TextBase } from './Text';

const Wrapper = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.padded ? '0 0 24px 0' : null};
`;

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled(TextBase)`
  padding: 0 28px;
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

const InputSmall = styled.input`
  box-sizing: border-box;
  width: 196px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  border: ${props => props.border || '1px solid #E2E5ED'};
  background-color: #fff;
`;

const Label = styled.label`
  padding: 0 0 24px 0;
`;

const SubmitButton = styled.button`
  margin: 40px 0;
`;

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 500);
};

const CreateProjectForm = () => {
  const [budgetMin, setBudgetMin] = useState(null);
  const [budgetMax, setBudgetMax] = useState(null);

  return (
    <Wrapper>
      <Formik
        initialValues={{
          name: '',
          startDate: '',
          endDate: '',
          sector: '',
          budgetMin: '',
          budgetMax: ''
        }}
        onSubmit={onSubmit}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('Required'),
          startDate: Yup.string()
            .required('Required'),
          endDate: Yup.string()
            .required('Required'),
          sector: Yup.string()
            .required('Required'),
          budgetMin: Yup.number()
            .required('Required')
            .positive('Value must be positive')
            .integer('Value must be a whole number')
            .test({
              name: 'budgetMin',
              exclusive: false,
              params: { budgetMax },
              message: `Must be less than ${budgetMax}`,
              test: value => value == null || value <= budgetMax,
            }),
          budgetMax: Yup.number()
            .required('Required')
            .positive('Value must be positive')
            .integer('Value must be a whole number')
            .test({
              name: 'budgetMax',
              exclusive: false,
              params: { budgetMin },
              message: `Must be greater than ${budgetMin}`,
              test: value => value == null || value >= budgetMin,
            }),
        })}
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
                <RowItem>
                  <Label htmlFor='name'>
                    Project Name *
                  </Label>

                  <Input
                    id='name'
                    placeholder='Enter Project Name'
                    type='text'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    border={
                      errors.name && touched.name ? '1px solid red' : null
                    }
                  />

                  {/* {errors.string && touched.name && 
                    <Text color={'red'}>{errors.string}</Text>
                  } */}
                </RowItem>

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
                      />
                      
                      {/* {errors.string && touched.name && 
                        <Text color={'red'}>{errors.string}</Text>
                      } */}
                    </RowItem>

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
                      />

                      {/* {errors.string && touched.name && 
                        <Text color={'red'}>{errors.string}</Text>
                      } */}
                    </RowItem>
                  </Row>
                </RowItem>
              </Row>

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
                  />

                  {/* {errors.string && touched.name && 
                    <Text color={'red'}>{errors.string}</Text>
                  } */}
                </RowItem>

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
                    </RowItem>

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
              </Row>

              <SubmitButton type='submit' disabled={isSubmitting}>
                Save and Continue
              </SubmitButton>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default withTheme(CreateProjectForm);
