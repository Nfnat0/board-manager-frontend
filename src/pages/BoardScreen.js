// src/pages/BoardScreen.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import { fetchLists, deleteList } from '../redux/actions/listActions';
import { fetchCardsByBoard, deleteCard } from '../redux/actions/cardActions';
import './BoardScreen.css'; // Import the CSS file for custom styles

const BoardScreen = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.lists || []);
  const cards = useSelector((state) => state.cards.cards || []);

  useEffect(() => {
    dispatch(fetchLists(boardId));
    dispatch(fetchCardsByBoard(boardId));
  }, [dispatch, boardId]);

  const handleDeleteList = (listId) => {
    dispatch(deleteList(listId));
    cards.filter(card => card.listId === listId).forEach(card => {
      dispatch(deleteCard(card.id));
    });
  };

  return (
    <Container>
      <Button onClick={() => navigate('/')} className="backButton">Back</Button>
      <Grid container spacing={3}>
        {lists.map((list) => (
          <Grid item xs={12} sm={6} md={4} key={list.id}>
            <Card className="listCard">
              <CardContent>
                <Typography variant="h5">{list.name}</Typography>
                <Button onClick={() => handleDeleteList(list.id)}>Delete List</Button>
                {cards.filter((card) => card.listId === list.id).map((card) => (
                  <Typography key={card.id} variant="body2" className="card">{card.name}</Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BoardScreen;
