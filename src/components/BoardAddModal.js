// src/components/BoardAddModal.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Backdrop, Fade, TextField, Button } from '@material-ui/core';
import { addBoard } from '../redux/actions/boardActions';

const BoardAddModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [icon, setIcon] = React.useState('');

  const handleAdd = () => {
    const newBoard = { id: Date.now(), title, description, icon };
    dispatch(addBoard(newBoard));
    onClose();
  };

  return (
    <Modal
      open
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in>
        <div style={{ padding: '20px', background: 'white', outline: 'none' }}>
          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
          <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth />
          <TextField label="Icon" value={icon} onChange={(e) => setIcon(e.target.value)} fullWidth />
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default BoardAddModal;
