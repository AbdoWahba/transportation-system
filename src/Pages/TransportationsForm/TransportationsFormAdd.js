import React, { useEffect, useState } from 'react';
import CompanyDataForm from '../../Components/CompanyDataForm';
import BusDataForm from '../../Components/BusDataForm';
import './TransportationsForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';
import Client from '../../API';
const getRange = (lowEnd, highEnd) => {
  var list = [];
  for (var i = lowEnd; i <= highEnd; i++) {
    list.push(i);
  }
  return list;
};
const yearsArray = getRange(1980, new Date(Date.now()).getFullYear());

const validateBusForm = (values) => {
  for (let i = 0; i < values.length; i++) {
    if (!values[i].BusTypeID) return false;
    if (!values[i].Brand) return false;
    if (!values[i].Number_Of_Seats) return false;
    if (!values[i].Number_Of_Seats_Per_Raw) return false;
    if (!values[i].Total_Number_Of_Buses) return false;
    if (!values[i].Notes) return false;
    if (!values[i].YearModel) return false;
    if (!values[i].Description) return false;
  }

  return true;
};
const validateCompanyForm = (values) => {
  if (!values.Name) return false;
  if (!values.Address) return false;
  if (!values.Country) return false;
  if (!values.City) return false;
  if (!values.TelephoneNumber) return false;
  if (!values.ContactPerson_Name) return false;
  if (!values.ContactPerson_TelephoneNumber) return false;
  if (!values.ContactPerson_Email) return false;

  return true;
};

function TransportationsFormAdd() {
  const formValues = useSelector((state) => state.form);

  const dispatch = useDispatch();
  const [busNum, setBusNum] = useState(getRange(0, 1));
  console.log(getRange(0, busNum - 1));
  const addHandler = () => {
    // debugger;
    setBusNum([...busNum, busNum[busNum.length - 1] + 1]);
  };
  const removeHandler = (id) => {
    // debugger;
    setBusNum(busNum.filter((num) => num != id));
  };
  const clearHandler = () => {
    dispatch(reset('companyForm'));
    busNum.forEach((id) => {
      dispatch(reset(`busForm${id + 1}`));
    });
  };
  const submitHandler = () => {
    debugger;
    const busForm = busNum.map((id) => formValues[`busForm${id + 1}`].values);
    const companyForm = formValues.companyForm.values;
    if (
      companyForm &&
      validateCompanyForm(companyForm) &&
      validateBusForm(busForm)
    ) {
      Client.post('/TransportationCompany/Add', {
        ID: 0,
        ...companyForm,
        TransportationCompanyBuses: busForm,
        Masked_ID: 'string',
      });
    } else {
      console.log(
        'EEEEEEEEEEEEEEERRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRR'
      );
    }
  };
  console.log(busNum);
  return (
    <div>
      <CompanyDataForm />
      {busNum.map((ids, ind, arr) => {
        return (
          <BusDataForm
            key={ids + 1}
            id={ind + 1}
            yearsArray={yearsArray}
            form={'busForm' + (ids + 1)}
            canAdd={ind + 1 === arr.length}
            canRemove={arr.length - 1}
            addHandler={addHandler}
            removeHandler={() => removeHandler(ids)}
          />
        );
      })}
      <div>
        <button className='form__button' onClick={clearHandler}>
          Clear
        </button>

        <button className='form__button' onClick={submitHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default TransportationsFormAdd;
