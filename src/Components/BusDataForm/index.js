import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';
import './BusDataForm.scss';

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
            <option key={item.ID || item} value={item.ID || item}>
              {item.Value || item}
            </option>
          ))
        : ''}
    </select>
    {touched &&
      ((error && <span style={{ color: 'red' }}>{error}</span>) ||
        (warning && <span style={{ color: 'yellow' }}>{warning}</span>))}
  </div>
);

const validate = (values) => {
  const errors = {};
  if (!values.BusTypeID) {
    errors.BusTypeID = 'Required';
  }
  if (!values.Brand) {
    errors.Brand = 'Required';
  }
  if (!values.Number_Of_Seats) {
    errors.Number_Of_Seats = 'Required';
  }
  if (!values.Number_Of_Seats_Per_Raw) {
    errors.Number_Of_Seats_Per_Raw = 'Required';
  }
  if (!values.Total_Number_Of_Buses) {
    errors.Total_Number_Of_Buses = 'Required';
  }
  if (!values.Notes) {
    errors.Notes = 'Required';
  }
  if (!values.YearModel) {
    errors.YearModel = 'Required';
  }
  if (!values.Description) {
    errors.Description = 'Required';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} className='form-control' />
      {touched &&
        ((error && <span style={{ color: 'red' }}>{error}</span>) ||
          (warning && <span style={{ color: 'yellow' }}>{warning}</span>))}
    </div>
  </div>
);

function BusDataForm({
  id,
  canAdd,
  canRemove,
  addHandler,
  removeHandler,
  yearsArray,
}) {
  const vihcleTypes = useSelector((state) => state.vihcleTypes);

  return (
    <div className='bus-form'>
      <h6 className='bus-form__title'>{`Bus ${id} Data`}</h6>
      <div className='form-row'>
        <div className='col-lg-2 col-md-3 col-sm-5 bus-form__input--container'>
          <Field
            type='text'
            label='Vehicle Type 1'
            name='BusTypeID'
            data={vihcleTypes}
            component={renderSelector}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 bus-form__input--container'>
          <Field
            type='text'
            label='Brand'
            name='Brand'
            component={renderField}
          />
        </div>
        <div className='col-lg-2 col-md-3 col-sm-5 bus-form__input--container'>
          <Field
            type='text'
            data={yearsArray}
            label='Year Model'
            name='YearModel'
            component={renderSelector}
          />
        </div>
        <div className='col-lg-4 padLg bus-form__input--container'>
          <Field
            type='text'
            label='Description'
            name='Description'
            component={renderField}
          />
        </div>
        <div className='col-lg-6 marginforlg'>
          <div className='form-row nowrapclass'>
            <div className='col-lg-4 bus-form__input--container'>
              <Field
                type='number'
                label='Total Number of Seats'
                name='Number_Of_Seats'
                component={renderField}
              />
            </div>
            <div className='col-lg-4  bus-form__input--container'>
              <Field
                type='number'
                label='Number of Seats per Row'
                name='Number_Of_Seats_Per_Raw'
                component={renderField}
              />
            </div>
            <div className='col-lg-4 bus-form__input--container'>
              <Field
                type='number'
                label='Total Num. of Buses'
                name='Total_Number_Of_Buses'
                component={renderField}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='col-lg-12  bus-form__input--container'>
              <Field
                type='text'
                label='Notes'
                name='Notes'
                component={renderField}
              />
            </div>
          </div>
        </div>
        <div
          className='col-lg-2  bus-form__input--container'
          style={{ textAlign: 'center' }}>
          Vehicle Layout
          <div style={{ marginTop: '13px', marginBottom: '13px' }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='65.269'
              height='55.978'
              viewBox='0 0 65.269 55.978'>
              <defs>
                <style>{'.a{fill:#66A4CE4D;}'}</style>
              </defs>
              <path
                class='a'
                d='M187.27,109.357a6.521,6.521,0,1,0-6.52-6.52A6.528,6.528,0,0,0,187.27,109.357Zm0-9.217a2.7,2.7,0,1,1-2.7,2.7A2.7,2.7,0,0,1,187.27,100.141Zm0,0'
                transform='translate(-157.708 -84.102)'
              />
              <path
                class='a'
                d='M62.886.5H2.384A2.386,2.386,0,0,0,0,2.883V54.095a2.386,2.386,0,0,0,2.383,2.383h60.5a2.386,2.386,0,0,0,2.383-2.383V2.883A2.386,2.386,0,0,0,62.886.5ZM61.445,4.324V34.588L49.417,22.56a2.014,2.014,0,0,0-2.843,0L29.563,39.572,18.7,28.707a2.011,2.011,0,0,0-2.845,0L3.825,40.733V4.324ZM3.825,52.653V46.141L17.274,32.692,28.139,43.558a2.01,2.01,0,0,0,2.845,0L48,26.547,61.445,40V52.653Zm0,0'
                transform='translate(-0.001 -0.5)'
              />
            </svg>
          </div>
          <div className=''>
            <input type='file' name='file' id='file' class='inputfile' />
            <label for='file'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='31.392'
                height='20.928'
                viewBox='0 0 31.392 20.928'>
                <defs>
                  <style>{'.b{fill:#fff;}'}</style>
                </defs>
                <path
                  class='b'
                  d='M25.316,93.227A9.808,9.808,0,0,0,7,90.611a7.848,7.848,0,0,0,.85,15.65h17a6.525,6.525,0,0,0,.464-13.034Zm-7,3.878v5.232H13.08V97.1H9.156l6.54-6.54,6.54,6.54H18.312Z'
                  transform='translate(0 -85.333)'
                />
              </svg>
              <span style={{ marginLeft: '10px', padding: '6px 0px' }}>
                Upload
              </span>{' '}
            </label>
          </div>
        </div>
      </div>
      {canAdd ? (
        <button className='bus-form__button' onClick={addHandler}>
          Add
        </button>
      ) : (
        ''
      )}
      {canRemove ? (
        <button className='bus-form__button' onClick={removeHandler}>
          Remove
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default reduxForm({ validate })(BusDataForm);
