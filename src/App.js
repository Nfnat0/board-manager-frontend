import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="content">
          <Home />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
