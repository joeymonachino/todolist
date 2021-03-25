import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "To-Do List", completed: true },
  { id: "todo-1", name: "Portfolio Page", completed: false },
  { id: "todo-2", name: "Weather Forecast App", completed: false },
  { id: "todo-3", name: "Valorant Tactical Maps", completed: false },
  { id: "todo-4", name: "Frontend/Backend", completed: false }
];


ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));



