import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ExercisesContextProvider } from './Utils/ExercisesContext';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <ExercisesContextProvider>
    <App />
    </ExercisesContextProvider>
    </BrowserRouter>
)