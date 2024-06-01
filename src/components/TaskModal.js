// src/components/TaskEditModal.js
import React from 'react';
import { Modal, TextField, Typography, Button } from '@material-ui/core';
import './TaskModal.css';

const TaskModal = ({ task, onClose, onSave }) => {
  const [editedTask, setEditedTask] = React.useState(task);

  const handleSave = () => {
    onSave(editedTask);
    onClose();
  };

  return (
    <Modal open={!!task} onClose={onClose} className="taskModal">
      <div className="modalContent">
        <Typography variant="h6">Edit Task</Typography>
        <TextField
          label="Name"
          value={editedTask.name}
          fullWidth
          margin="normal"
          onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
        />
        <TextField
          label="Details"
          value={editedTask.details}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          onChange={(e) => setEditedTask({ ...editedTask, details: e.target.value })}
        />
        <TextField
          label="Expiration Date"
          type="date"
          value={editedTask.expirationDate}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setEditedTask({ ...editedTask, expirationDate: e.target.value })}
        />
        <div className="modalActions">
          <Button onClick={handleSave} color="primary">Save</Button>
          <Button onClick={onClose} color="secondary">Cancel</Button>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
