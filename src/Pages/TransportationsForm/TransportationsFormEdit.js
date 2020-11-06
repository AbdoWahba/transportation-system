import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CompanyDataForm from '../../Components/CompanyDataForm';
import BusDataForm from '../../Components/BusDataForm';
import './TransportationsForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';
import Client from '../../API';
import { getCompanyData } from '../../store/actions';
const getRange = (lowEnd, highEnd) => {
  var list = [];
  for (var i = lowEnd; i <= highEnd; i++) {
    list.push(i);
  }
  return list;
};
const yearsArray = getRange(1980, new Date(Date.now()).getFullYear());

function TransportationsFormEdit() {
  const history = useHistory();
  const formValues = useSelector((state) => state.form);
  const selectedCompany = useSelector((state) => state.selectedCompany);
  const param = useParams();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    dispatch(getCompanyData(param.id));
  }, []);
  useEffect(() => {
    setBusNum(
      getRange(
        0,
        selectedCompany.TransportationCompanyBuses
          ? selectedCompany.TransportationCompanyBuses.length - 1
          : 0
      )
    );
  }, [selectedCompany]);
  const [busNum, setBusNum] = useState(getRange(0, 1));
  console.log(selectedCompany);
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
    const busForm = busNum.map((id) => formValues[`busForm${id + 1}`].values);
    const companyForm = formValues.companyForm.values;
    console.log(
      JSON.stringify({
        ...companyForm,
        TransportationCompanyBuses: busForm,
        Masked_ID: 'string',
      })
    );
    Client.put('/TransportationCompany/Update', {
      ...companyForm,
      TransportationCompanyBuses: busForm,
      Masked_ID: 'string',
    })
      .then((res) => {
        if (res.data.Status == 1) {
          history.push('/');
        } else {
          setErrorMsg('Something Went Wrong');
          setTimeout(() => {
            setErrorMsg('');
          }, 3000);
        }
      })
      .catch((err) => {
        setErrorMsg('Something Went Wrong: ' + err.Message);
        setTimeout(() => {
          setErrorMsg('');
        }, 3000);
      });
  };
  console.log(busNum);
  return selectedCompany.ID == param.id ? (
    <div>
      <CompanyDataForm initialValues={selectedCompany} />
      {busNum.map((ids, ind, arr) => {
        return (
          <BusDataForm
            initialValues={selectedCompany.TransportationCompanyBuses[ids]}
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
        <div
          className='alert alert-danger'
          role='alert'
          style={{ display: errorMsg ? 'block' : 'none' }}>
          <strong>ERROR!!! </strong>
          {errorMsg}
        </div>
        <button className='form__button' onClick={clearHandler}>
          Clear
        </button>

        <button className='form__button' onClick={submitHandler}>
          Save
        </button>
      </div>
    </div>
  ) : (
    <div className=''></div>
  );
}

export default TransportationsFormEdit;
