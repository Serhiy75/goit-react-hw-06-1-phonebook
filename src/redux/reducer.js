import { combineReducers } from 'redux';

export const contactReducer = (state = [], action) => {
  switch (action.type) {
    case 'contact/addContact':
      return [...state, action.payload];
    case 'contact/deleteContact':
      return [...state].filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'contact/setFilter':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contact: contactReducer,
  filter: filterReducer,
});
