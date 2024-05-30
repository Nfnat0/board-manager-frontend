import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
// import Board from './pages/Board';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/board/:boardId" element={<Board />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
