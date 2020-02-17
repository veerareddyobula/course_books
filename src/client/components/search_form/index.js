import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './styles.scss';
import AutoCompleteTextBox from '../auto_complete_text_box';

const SearchForm = (props) => {
  const { submitHandler } = props;
  console.log('--== SearchForm ', props);

  return (
    <Formik
      initialValues={{
        queryString: ''
      }}
      validationSchema={Yup.object().shape({
        queryString: Yup.string()
          .required('This field is required'),
      })}
      onSubmit={(values, { setValues }) => {
        console.log(values);
        submitHandler({ query: values.queryString });
        setValues({ queryString: '' });
      }}
    >
      {({
        errors, touched, values, dirty, setValues
      }) => (
        <Form>
          <div className="search-form">
            <AutoCompleteTextBox val={values.queryString} onChangeHandler={setValues}>
              <Field name="queryString" />
              {errors.queryString && touched.queryString && dirty ? (
                <div className="warning">{errors.queryString}</div>
              ) : null}
            </AutoCompleteTextBox>
            <div>
              <button type="submit" className="btn-primary" disabled={!dirty}>
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

SearchForm.propTypes = {
  submitHandler: PropTypes.func.isRequired
};

export default SearchForm;
