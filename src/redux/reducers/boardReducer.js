// src/redux/reducers/boardReducer.js
import { ADD_BOARD, EDIT_BOARD, DELETE_BOARD } from '../actions/boardActions';

const initialState = {
  boards: [
    { id: 1, title: 'Project A', description: 'Description A', icon: '📋' },
    { id: 2, title: 'Project B', description: 'Description B', icon: '📊' },
  ],
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };
    case EDIT_BOARD:
      return {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.id ? action.payload : board
        ),
      };
    case DELETE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board) => board.id !== action.payload),
      };
    default:
      return state;
  }
};

export default boardReducer;
