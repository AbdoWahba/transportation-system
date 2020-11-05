import Client from '../API';

export const actionsType = {
  FETCH_ALL_COMPANIES: 'FETCH_ALL_COMPANIES',
  GET_COMPANY_DATA: 'GET_COMPANY_DATA',
};

export const fetchAllCompanies = () => (dispatch) => {
  Client.get('/TransportationCompany/All')
    .then((res) => {
      return dispatch({
        payload: res.data.Data,
        type: actionsType.FETCH_ALL_COMPANIES,
      });
    })
    .catch((err) =>
      dispatch({ payload: [], type: actionsType.FETCH_ALL_COMPANIES })
    );
};

export const getCompanyData = (id) => (dispatch) => {
  Client.get(`TransportationCompany/GetById?id=${id}`)
    .then((res) =>
      dispatch({ payload: res.data, type: actionsType.GET_COMPANY_DATA })
    )
    .catch((err) =>
      dispatch({ payload: {}, type: actionsType.GET_COMPANY_DATA })
    );
};
