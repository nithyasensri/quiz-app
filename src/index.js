import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MainContext } from './context/QuizContext'
import { Quiz } from './components/quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContext>
      <Quiz />
    </MainContext>
  </React.StrictMode>
);


