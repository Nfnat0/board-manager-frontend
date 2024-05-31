
// src/redux/actions/listActions.js
import listService from '../../api/listService';

export const SET_LISTS = 'SET_LISTS';
export const ADD_LIST = 'ADD_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export const setLists = (lists) => ({
  type: SET_LISTS,
  payload: lists,
});

export const fetchLists = (boardId) => async (dispatch) => {
  const lists = await listService.getLists(boardId);
  dispatch(setLists(lists));
};

export const addList = (list) => async (dispatch) => {
  const newList = await listService.addList(list);
  dispatch({
    type: ADD_LIST,
    payload: newList,
  });
};

export const editList = (list) => async (dispatch) => {
  const updatedList = await listService.editList(list);
  dispatch({
    type: EDIT_LIST,
    payload: updatedList,
  });
};

export const deleteList = (listId) => async (dispatch) => {
  await listService.deleteList(listId);
  dispatch({
    type: DELETE_LIST,
    payload: listId,
  });
};
