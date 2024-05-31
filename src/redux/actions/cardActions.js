// src/redux/actions/cardActions.js
import cardService from '../../api/cardService';

export const SET_CARDS = 'SET_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const setCards = (cards) => ({
  type: SET_CARDS,
  payload: cards,
});

export const fetchCardsByBoard = (boardId) => async (dispatch) => {
  const cards = await cardService.getCardsByBoard(boardId);
  dispatch(setCards(cards));
};

export const addCard = (card) => async (dispatch) => {
  const newCard = await cardService.addCard(card);
  dispatch({
    type: ADD_CARD,
    payload: newCard,
  });
};

export const editCard = (card) => async (dispatch) => {
  const updatedCard = await cardService.editCard(card);
  dispatch({
    type: EDIT_CARD,
    payload: updatedCard,
  });
};

export const deleteCard = (cardId) => async (dispatch) => {
  await cardService.deleteCard(cardId);
  dispatch({
    type: DELETE_CARD,
    payload: cardId,
  });
};
