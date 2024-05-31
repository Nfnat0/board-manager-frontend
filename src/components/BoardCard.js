// src/components/BoardCard.js
import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './BoardCard.css'; // Import the CSS file for custom styles

const BoardCard = ({ board, onEditClick, onDelete }) => {
  return (
    <Card className="boardCard">
      <CardContent>
        <Typography variant="h5">{board.icon} {board.title}</Typography>
        <Typography variant="body2">{board.description}</Typography>
        <IconButton onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
