import axios from 'axios';

const API_URL = 'http://localhost:5000/boards';

const getBoards = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addBoard = async (board) => {
  const response = await axios.post(API_URL, board);
  return response.data;
};

const editBoard = async (board) => {
  const response = await axios.put(`${API_URL}/${board.id}`, board);
  return response.data;
};

const deleteBoard = async (boardId) => {
  const response = await axios.delete(`${API_URL}/${boardId}`);
  return response.data;
};
const boardService = {
    getBoards,
    addBoard,
    editBoard,
    deleteBoard,
};

export default boardService;
