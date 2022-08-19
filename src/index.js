// importing everything necessary to then render the app onto the page.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

