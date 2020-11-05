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

export default combineReducers({
  selectedCompany,
  companiesList,
  form: formReducer,
});
