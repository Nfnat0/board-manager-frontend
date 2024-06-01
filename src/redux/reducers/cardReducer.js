// src/redux/reducers/cardReducer.js
import { SET_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions/cardActions';

const initialState = {
  cards: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.cardId === action.payload.cardId ? action.payload : card
        ),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.cardId !== action.payload),
      };
    default:
      return state;
  }
};

export default cardReducer;
