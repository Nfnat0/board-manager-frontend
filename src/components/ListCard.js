// src/components/ListCard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './ListCard.css';

const ListCard = ({ list, cards, onEditListName, onDeleteList, onAddTask, onEditTask }) => {
  const [editingListName, setEditingListName] = useState(list.name);

  const handleSaveListName = () => {
    onEditListName({ ...list, name: editingListName });
  };

  return (
    <Card className="listCard">
      <CardContent>
        <TextField
          value={editingListName}
          onChange={(e) => setEditingListName(e.target.value)}
          onBlur={handleSaveListName}
          margin="normal"
          fullWidth
        />
        <IconButton color="secondary" onClick={() => onDeleteList(list.listId)}>
          <DeleteIcon />
        </IconButton>
        <div className="addTaskContainer">
          <IconButton color="primary" onClick={() => onAddTask(list.listId)}>
            <AddIcon />
          </IconButton>
        </div>
        {cards.filter((card) => card.listId === list.listId).map((card) => (
          <Typography
            key={card.cardId}
            variant="body2"
            className="card"
            onClick={() => onEditTask(card)}
          >
            {card.name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ListCard;
