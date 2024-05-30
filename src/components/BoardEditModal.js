// src/components/BoardEditModal.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Backdrop, Fade, TextField, Button } from '@material-ui/core';
import { editBoard } from '../redux/actions/boardActions';

const BoardEditModal = ({ board, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState(board.title);
  const [description, setDescription] = React.useState(board.description);
  const [icon, setIcon] = React.useState(board.icon);

  const handleSave = () => {
    const updatedBoard = { ...board, title, description, icon };
    dispatch(editBoard(updatedBoard)).then(() => {
      onClose();
    });
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
          <Button onClick={handleSave}>Save</Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default BoardEditModal;
