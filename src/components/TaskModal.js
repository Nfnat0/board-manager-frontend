// src/components/TaskModal.js
import React, { useState, useEffect } from 'react';
import { Modal, TextField, Typography, Button } from '@material-ui/core';
import './TaskModal.css';

const TaskModal = ({ task, open, onClose, onSave }) => {
  const [taskData, setTaskData] = useState({ name: '', details: '', expirationDate: '' });

  useEffect(() => {
    if (task) {
      setTaskData(task);
    } else {
      setTaskData({ name: '', details: '', expirationDate: '' });
    }
  }, [task]);

  const handleSave = () => {
    onSave(taskData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className="taskModal">
      <div className="modalContent">
        <Typography variant="h6">{task ? 'Edit Task' : 'Add Task'}</Typography>
        <TextField
          label="Name"
          value={taskData.name}
          fullWidth
          margin="normal"
          onChange={(e) => setTaskData({ ...taskData, name: e.target.value })}
        />
        <TextField
          label="Details"
          value={taskData.details}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          onChange={(e) => setTaskData({ ...taskData, details: e.target.value })}
        />
        <TextField
          label="Expiration Date"
          type="date"
          value={taskData.expirationDate}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setTaskData({ ...taskData, expirationDate: e.target.value })}
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
