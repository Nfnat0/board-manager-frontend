// src/redux/actions/boardActions.js
export const ADD_BOARD = 'ADD_BOARD';
export const EDIT_BOARD = 'EDIT_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

export const addBoard = (board) => ({
  type: ADD_BOARD,
  payload: board,
});

export const editBoard = (board) => ({
  type: EDIT_BOARD,
  payload: board,
});

export const deleteBoard = (boardId) => ({
  type: DELETE_BOARD,
  payload: boardId,
});
