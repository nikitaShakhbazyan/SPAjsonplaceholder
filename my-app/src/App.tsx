import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <h1>Блог</h1>
      <h3>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</h3>
      <Header/>
      <AppRoutes/>
    </div>
  );
}

export default App;
