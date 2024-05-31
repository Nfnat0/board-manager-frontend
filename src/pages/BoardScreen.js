// src/pages/BoardScreen.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Card, CardContent, Typography, Button, TextField, Modal, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { fetchLists, deleteList, editList, addList } from '../redux/actions/listActions';
import { fetchCardsByBoard, deleteCard, addCard } from '../redux/actions/cardActions';
import './BoardScreen.css'; // Import the CSS file for custom styles

const BoardScreen = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.lists || []);
  const cards = useSelector((state) => state.cards.cards || []);

  const [editingListId, setEditingListId] = useState(null);
  const [editingListName, setEditingListName] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const [newListName, setNewListName] = useState('');
  const [newTaskListId, setNewTaskListId] = useState(null);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    dispatch(fetchLists(boardId));
    dispatch(fetchCardsByBoard(boardId));
  }, [dispatch, boardId]);

  const handleEditListName = (list) => {
    setEditingListId(list.id);
    setEditingListName(list.name);
  };

  const handleSaveListName = (list) => {
    dispatch(editList({ ...list, name: editingListName }));
    setEditingListId(null);
  };

  const handleOpenTaskModal = (card) => {
    setSelectedCard(card);
  };

  const handleCloseTaskModal = () => {
    setSelectedCard(null);
  };

  const handleAddList = () => {
    if (newListName.trim()) {
      dispatch(addList({ boardId: Number(boardId), name: newListName }));
      setNewListName('');
    }
  };

  const handleAddTask = (listId) => {
    if (newTaskName.trim()) {
      dispatch(addCard({ listId, boardId: Number(boardId), name: newTaskName, details: '', expirationDate: '' }));
      setNewTaskName('');
      setNewTaskListId(null);
    }
  };

  const handleDeleteList = (listId) => {
    dispatch(deleteList(listId));
    cards.filter(card => card.listId === listId).forEach(card => {
      dispatch(deleteCard(card.id));
    });
  };

  return (
    <Container>
      <Button onClick={() => navigate('/')} className="backButton">Back</Button>
      <div className="addListContainer">
        <TextField
          label="New List Name"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          margin="normal"
        />
        <IconButton color="primary" onClick={handleAddList}>
          <AddIcon />
        </IconButton>
      </div>
      <Grid container spacing={3}>
        {lists.map((list) => (
          <Grid item xs={12} sm={6} md={4} key={list.id}>
            <Card className="listCard">
              <CardContent>
                {editingListId === list.id ? (
                  <TextField
                    value={editingListName}
                    onChange={(e) => setEditingListName(e.target.value)}
                    onBlur={() => handleSaveListName(list)}
                    autoFocus
                  />
                ) : (
                  <Typography
                    variant="h5"
                    className="editableTitle"
                    onClick={() => handleEditListName(list)}
                  >
                    {list.name}
                  </Typography>
                )}
                <Button color="secondary" onClick={() => handleDeleteList(list.id)}>Delete List</Button>
                <div className="addTaskContainer">
                  <TextField
                    label="New Task"
                    value={newTaskListId === list.id ? newTaskName : ''}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    onFocus={() => setNewTaskListId(list.id)}
                    margin="normal"
                  />
                  <IconButton color="primary" onClick={() => handleAddTask(list.id)}>
                    <AddIcon />
                  </IconButton>
                </div>
                {cards.filter((card) => card.listId === list.id).map((card) => (
                  <Typography
                    key={card.id}
                    variant="body2"
                    className="card"
                    onClick={() => handleOpenTaskModal(card)}
                  >
                    {card.name}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedCard && (
        <Modal
          open={!!selectedCard}
          onClose={handleCloseTaskModal}
          className="cardModal"
        >
          <div className="cardModal">
            <Typography variant="h6">Edit Task</Typography>
            <TextField
              label="Name"
              value={selectedCard.name}
              fullWidth
              margin="normal"
              onChange={(e) => setSelectedCard({ ...selectedCard, name: e.target.value })}
            />
            <TextField
              label="Details"
              value={selectedCard.details}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              onChange={(e) => setSelectedCard({ ...selectedCard, details: e.target.value })}
            />
            <TextField
              label="Expiration Date"
              type="date"
              value={selectedCard.expirationDate}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setSelectedCard({ ...selectedCard, expirationDate: e.target.value })}
            />
            <Button onClick={handleCloseTaskModal}>Close</Button>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default BoardScreen;
