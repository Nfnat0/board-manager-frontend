// src/api/listService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + "/lists";

const getLists = async (boardId) => {
    const response = await axios.get(`${API_URL}?boardId=${boardId}`);
    return response.data;
};

const addList = async (list) => {
    const response = await axios.post(API_URL, list);
    return response.data;
};

const editList = async (list) => {
    const response = await axios.put(`${API_URL}/${list.id}`, list);
    return response.data;
};

const deleteList = async (listId) => {
    const response = await axios.delete(`${API_URL}/${listId}`);
    return response.data;
};

const listService = {
    getLists,
    addList,
    editList,
    deleteList,
};

export default listService;
