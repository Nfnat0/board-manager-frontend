// src/components/ListCard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './ListCard.css';

const ListCard = ({ list, cards, onEditListName, onDeleteList, onAddTask, onEditTask }) => {
  const [editingListName, setEditingListName] = useState(list.name);
  const [newTaskName, setNewTaskName] = useState('');

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
        <IconButton color="secondary" onClick={() => onDeleteList(list.id)}>
          <DeleteIcon />
        </IconButton>
        <div className="addTaskContainer">
          <TextField
            label="New Task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            margin="normal"
            fullWidth
          />
          <IconButton color="primary" onClick={() => { onAddTask(list.id, newTaskName); setNewTaskName(''); }}>
            <AddIcon />
          </IconButton>
        </div>
        {cards.filter((card) => card.listId === list.id).map((card) => (
          <Typography
            key={card.id}
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
