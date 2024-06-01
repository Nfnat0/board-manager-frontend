// src/api/cardService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + "/cards";

const getCardsByBoard = async (boardId) => {
    const response = await axios.get(`${API_URL}?boardId=${boardId}`);
    return response.data;
};

const addCard = async (card) => {
    const response = await axios.post(API_URL, card);
    return response.data;
};

const editCard = async (card) => {
    const response = await axios.put(`${API_URL}/${card.cardId}`, card);
    return response.data;
};

const deleteCard = async (cardId) => {
    const response = await axios.delete(`${API_URL}/${cardId}`);
    return response.data;
};

const cardService = {
    getCardsByBoard,
    addCard,
    editCard,
    deleteCard,
};

export default cardService;
