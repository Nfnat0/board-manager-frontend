// src/components/BoardModal.js
import React, { useState, useEffect } from 'react';
import { Modal, TextField, Typography, Button } from '@material-ui/core';
import './BoardModal.css';

const BoardModal = ({ open, onClose, onSave, board }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (board) {
      setTitle(board.title);
      setDescription(board.description);
      setIcon(board.icon);
    } else {
      setTitle('');
      setDescription('');
      setIcon('');
    }
  }, [board]);

  const handleSave = () => {
    const newBoard = { ...board, title, description, icon };
    onSave(newBoard);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className="boardModal">
      <div className="modalContent">
        <Typography variant="h6">{board ? 'Edit Board' : 'Add Board'}</Typography>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Icon"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          fullWidth
          margin="normal"
        />
        <div className="modalActions">
          <Button onClick={handleSave} color="primary">Save</Button>
          <Button onClick={onClose} color="secondary">Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default BoardModal;
