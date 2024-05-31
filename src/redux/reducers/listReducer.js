// src/redux/reducers/listReducer.js
import { SET_LISTS, ADD_LIST, EDIT_LIST, DELETE_LIST } from '../actions/listActions';

const initialState = {
  lists: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS:
      return {
        ...state,
        lists: action.payload,
      };
    case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case EDIT_LIST:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.id ? action.payload : list
        ),
      };
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    default:
      return state;
  }
};

export default listReducer;
