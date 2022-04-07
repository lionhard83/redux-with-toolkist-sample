import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Favourites } from './pages/favourites/Favourites';
import { Provider } from 'react-redux';
import Sidebar from './pages/sidebar/Sidebar';
import store from './store';


function App() {
  return (
    <>
    <Provider store={store}>
    <div className="App">
      <Sidebar />
      <Favourites />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </Provider>
    </>
  );
}

export default App;
