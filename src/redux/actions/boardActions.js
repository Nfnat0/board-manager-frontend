// src/redux/actions/boardActions.js
import boardService from '../../api/boardService';

export const ADD_BOARD = 'ADD_BOARD';
export const EDIT_BOARD = 'EDIT_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const SET_BOARDS = 'SET_BOARDS';

export const addBoard = (board) => async (dispatch) => {
  const newBoard = await boardService.addBoard(board);
  dispatch({
    type: ADD_BOARD,
    payload: newBoard,
  });
};

export const editBoard = (board) => async (dispatch) => {
  const updatedBoard = await boardService.editBoard(board);
  dispatch({
    type: EDIT_BOARD,
    payload: updatedBoard,
  });
};

export const deleteBoard = (boardId) => async (dispatch) => {
  await boardService.deleteBoard(boardId);
  dispatch({
    type: DELETE_BOARD,
    payload: boardId,
  });
};

export const setBoards = (boards) => ({
  type: SET_BOARDS,
  payload: boards,
});

export const fetchBoards = () => async (dispatch) => {
  const boards = await boardService.getBoards();
  dispatch(setBoards(boards));
};
