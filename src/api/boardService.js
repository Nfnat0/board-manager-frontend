import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/boards";

const getBoards = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching boards:", error);
    throw error;
  }
};

const addBoard = async (board) => {
  try {
    const response = await axios.post(API_URL, board);
    return response.data;
  } catch (error) {
    console.error("Error adding board:", error);
    throw error;
  }
};

const editBoard = async (board) => {
  try {
    const response = await axios.put(`${API_URL}/${board.id}`, board);
    return response.data;
  } catch (error) {
    console.error("Error editing board:", error);
    throw error;
  }
};

const deleteBoard = async (boardId) => {
  try {
    const response = await axios.delete(`${API_URL}/${boardId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting board:", error);
    throw error;
  }
};

const boardService = {
  getBoards,
  addBoard,
  editBoard,
  deleteBoard,
};

export default boardService;
