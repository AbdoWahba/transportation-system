import { combineReducers } from 'redux';
import { actionsType } from './actions';
import { reducer as formReducer } from 'redux-form';
const companiesList = (state = [], action) => {
  switch (action.type) {
    case actionsType.FETCH_ALL_COMPANIES:
      return action.payload;
    default:
      return state;
  }
};

const selectedCompany = (state = {}, action) => {
  switch (action.type) {
    case actionsType.GET_COMPANY_DATA:
      return action.payload;
    default:
      return state;
  }
};

const countries = (state = [], action) => {
  switch (action.type) {
    case actionsType.GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};
const vihcleTypes = (state = [], action) => {
  switch (action.type) {
    case actionsType.GET_VIHCLE_TYPE:
      return action.payload;
    default:
      return state;
  }
};
const cities = (state = {}, action) => {
  switch (action.type) {
    case actionsType.GET_CITY:
      return { ...state, [action.id]: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  vihcleTypes,
  countries,
  selectedCompany,
  companiesList,
  form: formReducer,
  cities,
});
