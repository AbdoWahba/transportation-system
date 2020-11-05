import React, { useEffect } from 'react';
import Table from '../../Components/Table';
import './CompaniesList.scss';
import { useDispatch } from 'react-redux';
import { fetchAllCompanies } from '../../store/actions';

function CompaniesList() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('START');
    dispatch(fetchAllCompanies());
  }, []);
  return (
    <div>
      <button className='companies-list__button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17.881'
          height='17.881'
          viewBox='0 0 17.881 17.881'>
          <defs>
            <style>{'.a{fill:#fff;}'}</style>
          </defs>
          <path
            className='a'
            d='M16.987,8.046H9.835V.894a.894.894,0,0,0-1.788,0V8.046H.894a.894.894,0,0,0,0,1.788H8.046v7.152a.894.894,0,1,0,1.788,0V9.834h7.152a.894.894,0,1,0,0-1.788Zm0,0'
            transform='translate(0)'
          />
        </svg>
        <span className='companies-list__button--text'>Add Transportation</span>
      </button>
      <Table />
    </div>
  );
}

export default CompaniesList;
