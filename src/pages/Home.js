// src/pages/Home.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import BoardCard from '../components/BoardCard';
import BoardEditModal from '../components/BoardEditModal';
import BoardAddModal from '../components/BoardAddModal';
import { fetchBoards, deleteBoard } from '../redux/actions/boardActions';

const Home = () => {
  const boards = useSelector((state) => state.boards.boards);
  const dispatch = useDispatch();
  const [selectedBoard, setSelectedBoard] = React.useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleEditClick = (board) => {
    setSelectedBoard(board);
  };

  const handleDelete = (boardId) => {
    dispatch(deleteBoard(boardId));
  };

  const handleCloseEditModal = () => {
    setSelectedBoard(null);
  };

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {boards.map((board) => (
          <Grid item xs={12} sm={6} md={4} key={board.id}>
            <BoardCard board={board} onEditClick={() => handleEditClick(board)} onDelete={() => handleDelete(board.id)} />
          </Grid>
        ))}
      </Grid>
      <Fab color="primary" onClick={handleOpenAddModal}>
        <AddIcon />
      </Fab>
      {selectedBoard && <BoardEditModal board={selectedBoard} onClose={handleCloseEditModal} />}
      {isAddModalOpen && <BoardAddModal onClose={handleCloseAddModal} />}
    </Container>
  );
};

export default Home;
