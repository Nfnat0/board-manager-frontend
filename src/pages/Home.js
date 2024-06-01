// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BoardCard from '../components/BoardCard';
import BoardModal from '../components/BoardModal';
import { fetchBoards, deleteBoard, addBoard, editBoard } from '../redux/actions/boardActions';
import './Home.css'; // Import the CSS file for custom styles

const Home = () => {
  const boards = useSelector((state) => state.boards.boards);
  const dispatch = useDispatch();
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleEditClick = (board) => {
    setSelectedBoard(board);
    setIsModalOpen(true);
  };

  const handleDelete = (boardId) => {
    dispatch(deleteBoard(boardId));
  };

  const handleAddClick = () => {
    setSelectedBoard(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveBoard = (board) => {
    if (board.boardId) {
      dispatch(editBoard(board));
    } else {
      dispatch(addBoard(board));
    }
  };

  return (
    <Container className="home-container">
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        Add
      </Button>
      <Grid container spacing={3}>
        {boards.map((board) => (
          <Grid item xs={12} sm={6} md={4} key={board.boardId}>
            <BoardCard
              board={board}
              onEditClick={() => handleEditClick(board)}
              onDelete={() => handleDelete(board.boardId)}
            />
          </Grid>
        ))}
      </Grid>
      {isModalOpen && (
        <BoardModal
          open={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveBoard}
          board={selectedBoard}
        />
      )}
    </Container>
  );
};

export default Home;
