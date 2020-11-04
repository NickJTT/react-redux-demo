import React from 'react';
import style from './App.module.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from './components/userContainer/UserContainer';

export default function App() {
  return (
    <Provider store = { store }>
      <div className = { style.app }>
        <UserContainer/>
      </div>
    </Provider>
  );
}
