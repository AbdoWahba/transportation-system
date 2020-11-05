import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import './CompanyDataForm.scss';
import { getCity } from '../../store/actions';
const validate = (values) => {
  const errors = {};
  if (!values.Name) {
    errors.Name = 'Required';
  }
  if (!values.Address) {
    errors.Address = 'Required';
  }
  if (!values.Country) {
    errors.Country = 'Required';
  }
  if (!values.City) {
    errors.City = 'Required';
  }
  if (!values.TelephoneNumber) {
    errors.TelephoneNumber = 'Required';
  }
  if (!values.ContactPerson_Name) {
    errors.ContactPerson_Name = 'Required';
  }
  if (!values.ContactPerson_TelephoneNumber) {
    errors.ContactPerson_TelephoneNumber = 'Required';
  }
  if (!values.ContactPerson_Email) {
    errors.ContactPerson_Email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      values.ContactPerson_Email
    )
  ) {
    errors.ContactPerson_Email = 'Invalid email address';
  }

  return errors;
};
const renderSelector = ({
  input,
  label,
  data,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <select class='form-control' {...input}>
      <option selected value=''>
        Choose
      </option>
      {data
        ? data.map((item) => (
            <option key={item.ID} value={item.ID}>
              {item.Value}
            </option>
          ))
        : ''}
    </select>
    {touched &&
      ((error && <span style={{ color: 'red' }}>{error}</span>) ||
        (warning && <span style={{ color: 'yellow' }}>{warning}</span>))}
    {touched &&
      ((error && <span style={{ color: 'red' }}>{error}</span>) ||
        (warning && <span style={{ color: 'yellow' }}>{warning}</span>))}
  </div>
);

const renderField = ({
  input,
  readOnly,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        className='form-control'
        readOnly={readOnly}
      />
      {touched &&
        ((error && <span style={{ color: 'red' }}>{error}</span>) ||
          (warning && <span style={{ color: 'yellow' }}>{warning}</span>))}
    </div>
  </div>
);

function CompanyDataForm() {
  const formValues = useSelector((state) => state.form);

  const countries = useSelector((state) => state.countries);
  const cities = useSelector((state) => state.cities);

  console.log(cities);
  const dispatch = useDispatch();
  const fetchCities = (e) => {
    if (!(cities[e.target.value] && cities[e.target.value].length))
      dispatch(getCity(e.target.value));
  };
  return (
    <div className='company-form'>
      <h6 className='company-form__title'>Company Data</h6>
      <div className='form-row'>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            type='text'
            label='Company ID #'
            name='ID'
            readOnly={true}
            component={renderField}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            type='text'
            label='Company Name'
            name='Name'
            component={renderField}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            type='text'
            label='Company Address'
            name='Address'
            component={renderField}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            type='text'
            label='Country'
            name='Country'
            component={renderSelector}
            onChange={fetchCities}
            data={countries ? countries : []}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            data={
              cities[formValues.companyForm?.values?.Country]
                ? cities[formValues.companyForm.values?.Country]
                : []
            }
            type='text'
            label='City'
            name='City'
            component={renderSelector}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            type='text'
            label='Company Telephone Num.'
            name='TelephoneNumber'
            component={renderField}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            type='text'
            label='Contact Person Name'
            name='ContactPerson_Name'
            component={renderField}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            type='text'
            label='Contact Person Tele. Num.'
            name='ContactPerson_TelephoneNumber'
            component={renderField}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 company-form__input--container'>
          <Field
            type='text'
            label='Contact Person Email'
            name='ContactPerson_Email'
            component={renderField}
          />
        </div>
      </div>
    </div>
  );
}

export default reduxForm({ form: 'companyForm', validate })(CompanyDataForm);
