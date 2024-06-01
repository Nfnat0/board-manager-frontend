// src/pages/BoardScreen.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ListCard from "../components/ListCard";
import TaskModal from "../components/TaskModal";
import {
  fetchLists,
  deleteList,
  editList,
  addList,
} from "../redux/actions/listActions";
import {
  fetchCardsByBoard,
  addCard,
  editCard,
} from "../redux/actions/cardActions";
import "./BoardScreen.css"; // Import the CSS file for custom styles

const BoardScreen = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists.lists || []);
  const cards = useSelector((state) => state.cards.cards || []);

  const [newListName, setNewListName] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedListId, setSelectedListId] = useState(null);

  useEffect(() => {
    dispatch(fetchLists(boardId));
    dispatch(fetchCardsByBoard(boardId));
  }, [dispatch, boardId]);

  const handleAddList = () => {
    if (newListName.trim()) {
      dispatch(addList({ boardId: Number(boardId), name: newListName }));
      setNewListName("");
    }
  };

  const handleEditTask = (task) => {
    setSelectedCard(task);
    setIsTaskModalOpen(true);
  };

  const handleAddTask = (listId) => {
    setSelectedCard(null);
    setSelectedListId(listId);
    setIsTaskModalOpen(true);
  };

  const handleSaveTask = (task) => {
    if (selectedCard) {
      dispatch(editCard(task));
    } else {
      dispatch(
        addCard({ ...task, listId: selectedListId, boardId: Number(boardId) })
      );
    }
    setIsTaskModalOpen(false);
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        className="backButton"
      >
        Back
      </Button>
      <div className="addListContainer">
        <TextField
          label="New List Name"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          margin="normal"
        />
        <IconButton color="primary" onClick={handleAddList}>
          <AddIcon />
        </IconButton>
      </div>
      <Grid container spacing={3}>
        {lists.map((list) => (
          <Grid item xs={12} sm={6} md={4} key={list.listId}>
            <ListCard
              list={list}
              cards={cards}
              onEditListName={(updatedList) => dispatch(editList(updatedList))}
              onDeleteList={(listId) => dispatch(deleteList(listId))}
              onAddTask={handleAddTask}
              onEditTask={handleEditTask}
            />
          </Grid>
        ))}
      </Grid>
      {isTaskModalOpen && (
        <TaskModal
          task={selectedCard}
          open={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
          onSave={handleSaveTask}
        />
      )}
    </Container>
  );
};

export default BoardScreen;
