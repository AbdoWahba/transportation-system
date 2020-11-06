import Client from '../API';

export const actionsType = {
  FETCH_ALL_COMPANIES: 'FETCH_ALL_COMPANIES',
  GET_COMPANY_DATA: 'GET_COMPANY_DATA',
  GET_COUNTRIES: 'GET_COUNTRIES',
  GET_VIHCLE_TYPE: 'GET_VIHCLE_TYPE',
  GET_CITY: 'GET_CITY',
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
  Client.get(`/TransportationCompany/GetById?id=${id}`)
    .then((res) =>
      dispatch({ payload: res.data.Data, type: actionsType.GET_COMPANY_DATA })
    )
    .catch((err) =>
      dispatch({ payload: {}, type: actionsType.GET_COMPANY_DATA })
    );
};

export const getCountries = () => (dispatch) => {
  Client.get('/Lookup/GetCountries')
    .then((res) =>
      dispatch({
        type: actionsType.GET_COUNTRIES,
        payload: res.data.Data,
      })
    )
    .catch((err) => dispatch({ payload: [], type: actionsType.GET_COUNTRIES }));
};

export const getCity = (id) => (dispatch) => {
  Client.get(`/Lookup/GetCities?countryId=${id}`)
    .then((res) =>
      dispatch({
        type: actionsType.GET_CITY,
        payload: res.data.Data,
        id,
      })
    )
    .catch((err) =>
      dispatch({ payload: [], type: actionsType.GET_CITY, id: -1 })
    );
};

export const getVihcle = () => (dispatch) => {
  Client.get(`/Lookup/GetVehicleType`)
    .then((res) =>
      dispatch({
        type: actionsType.GET_VIHCLE_TYPE,
        payload: res.data.Data,
      })
    )
    .catch((err) =>
      dispatch({ payload: [], type: actionsType.GET_VIHCLE_TYPE })
    );
};
