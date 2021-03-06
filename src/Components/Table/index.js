import React, { useState, useEffect } from 'react';
import CheckBox from '../CheckBox';
import './Table.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanyData } from '../../store/actions';
import { useHistory } from 'react-router-dom';
function Table() {
  const [selected, setSelected] = useState({});
  const companiesList = useSelector((state) => state.companiesList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (companiesList.length > 0)
      setSelected(
        companiesList.reduce(
          (c, { ID }) => ({
            ...c,
            [ID]: false,
          }),
          {}
        )
      );
  }, [companiesList]);

  const selectChild = (e, id) => {
    setSelected({ ...selected, [id]: e.target.checked });
  };
  const allEqual = (arr) => arr.every((val) => val === arr[0]);
  const selectParent = (e) => {
    const val = e.target.checked;
    Object.keys(selected).forEach((key) => {
      selected[key] = val;
    });
    setSelected({ ...selected });
  };
  console.log(selected);
  const history = useHistory();
  const handleEdit = (id) => {
    history.push('/companyDetails/edit/' + id);
  };

  return (
    <div className='col-lg-8 table__container'>
      <table className='table table-responsive-sm'>
        <thead>
          <tr>
            <th scope='col'>
              <CheckBox
                borderColor='#fff'
                onChange={selectParent}
                propsNotAllSimilar={!allEqual(Object.values(selected))}
              />
            </th>
            <th scope='col'>Company ID #</th>
            <th scope='col'>Company Name</th>
            <th scope='col'>Total Fleet</th>
            <th scope='col'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='21.421'
                height='21.421'
                viewBox='0 0 21.421 21.421'>
                <defs>
                  <style>
                    {'.a{fill:#fff;stroke:#fff;stroke-width:1.2px;}'}
                  </style>
                </defs>
                <g transform='translate(0.6 0.6)'>
                  <path
                    className='a'
                    d='M10.745,20.221H9.476a1.864,1.864,0,0,1-1.861-1.861V17.93A8.164,8.164,0,0,1,6.347,17.4l-.3.3a1.861,1.861,0,0,1-2.633,0l-.9-.9a1.861,1.861,0,0,1,0-2.633l.3-.3a8.164,8.164,0,0,1-.526-1.268H1.861A1.864,1.864,0,0,1,0,10.745V9.476A1.864,1.864,0,0,1,1.862,7.614h.429a8.166,8.166,0,0,1,.526-1.268l-.3-.3a1.861,1.861,0,0,1,0-2.633l.9-.9a1.861,1.861,0,0,1,2.633,0l.3.3a8.171,8.171,0,0,1,1.268-.526V1.861A1.864,1.864,0,0,1,9.476,0h1.269a1.864,1.864,0,0,1,1.861,1.861v.429a8.163,8.163,0,0,1,1.268.526l.3-.3a1.861,1.861,0,0,1,2.633,0l.9.9a1.861,1.861,0,0,1,0,2.633l-.3.3a8.164,8.164,0,0,1,.526,1.268h.429a1.864,1.864,0,0,1,1.861,1.861v1.269a1.864,1.864,0,0,1-1.861,1.861H17.93a8.165,8.165,0,0,1-.526,1.268l.3.3a1.861,1.861,0,0,1,0,2.633l-.9.9a1.861,1.861,0,0,1-2.633,0l-.3-.3a8.171,8.171,0,0,1-1.268.526v.429A1.864,1.864,0,0,1,10.745,20.221Zm-4.2-4.061a6.983,6.983,0,0,0,1.81.751.592.592,0,0,1,.444.574v.875a.677.677,0,0,0,.677.677h1.269a.677.677,0,0,0,.677-.677v-.875a.592.592,0,0,1,.444-.574,6.983,6.983,0,0,0,1.81-.751.592.592,0,0,1,.72.091l.62.62a.676.676,0,0,0,.957,0l.9-.9a.677.677,0,0,0,0-.957l-.62-.62a.592.592,0,0,1-.091-.72,6.982,6.982,0,0,0,.751-1.81.592.592,0,0,1,.574-.444h.875a.677.677,0,0,0,.677-.677V9.476a.677.677,0,0,0-.677-.677h-.875a.592.592,0,0,1-.574-.444,6.983,6.983,0,0,0-.751-1.81.592.592,0,0,1,.091-.72l.62-.62a.676.676,0,0,0,0-.957l-.9-.9a.677.677,0,0,0-.957,0l-.62.62a.592.592,0,0,1-.72.091,6.983,6.983,0,0,0-1.81-.751.592.592,0,0,1-.444-.574V1.861a.677.677,0,0,0-.677-.677H9.476a.677.677,0,0,0-.677.677v.875a.592.592,0,0,1-.444.574,6.983,6.983,0,0,0-1.81.751.592.592,0,0,1-.72-.091L5.2,3.35a.676.676,0,0,0-.957,0l-.9.9a.677.677,0,0,0,0,.957l.62.62a.592.592,0,0,1,.091.72,6.982,6.982,0,0,0-.751,1.81.592.592,0,0,1-.574.444H1.862a.678.678,0,0,0-.677.677v1.269a.677.677,0,0,0,.677.677h.875a.592.592,0,0,1,.574.444,6.983,6.983,0,0,0,.751,1.81.592.592,0,0,1-.091.72l-.62.62a.676.676,0,0,0,0,.957l.9.9a.676.676,0,0,0,.957,0l.62-.62A.6.6,0,0,1,6.545,16.16Z'
                    transform='translate(0 0)'
                  />
                  <path
                    className='a'
                    d='M149,153.4a4.4,4.4,0,1,1,4.4-4.4A4.4,4.4,0,0,1,149,153.4Zm0-7.614A3.215,3.215,0,1,0,152.214,149,3.218,3.218,0,0,0,149,145.785Z'
                    transform='translate(-138.889 -138.889)'
                  />
                </g>
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {companiesList.map(({ ID, CanEdit, TotalFleet, Name }, ind) => (
            <tr
              key={ID}
              style={{ backgroundColor: ind % 2 ? '#F1F2F4' : '#fff' }}>
              <th scope='row'>
                <CheckBox
                  propsChecked={selected[ID]}
                  onChange={(e) => {
                    selectChild(e, ID);
                  }}
                />
              </th>
              <td>{ID}</td>
              <td>{Name}</td>
              <td>{TotalFleet}</td>
              <td>
                <button
                  className='table__button'
                  disabled={!CanEdit}
                  onClick={() => handleEdit(ID)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <th scope='row'>
              <CheckBox />
            </th>
            <td>1</td>
            <td>Egypt Air</td>
            <td>50</td>
            <td>
              <button className='table__button'>Edit</button>
            </td>
          </tr>
          <tr>
            <th scope='row'>
              <CheckBox />
            </th>
            <td>2</td>
            <td>tdornton</td>
            <td>60</td>
            <td>
              <button className='table__button'>Edit</button>
            </td>
          </tr>
          <tr>
            <th scope='row'>
              <CheckBox />
            </th>
            <td>3</td>
            <td>tde Bird</td>
            <td>88</td>
            <td>
              <button className='table__button'>Edit</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
