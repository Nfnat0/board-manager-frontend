// src/components/BoardCard.js
import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './BoardCard.css'; // Import the CSS file for custom styles

const BoardCard = ({ board, onEditClick, onDelete }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/board/${board.boardId}`);
  };

  return (
    <Card className="boardCard" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <CardContent>
        <Typography variant="h5">{board.icon} {board.title}</Typography>
        <Typography variant="body2">{board.description}</Typography>
        <IconButton onClick={(e) => { e.stopPropagation(); onEditClick(board); }}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={(e) => { e.stopPropagation(); onDelete(board.boardId); }}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
