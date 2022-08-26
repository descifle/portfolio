import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const root = createRoot(document.querySelector('#startpoint') as Element);

root.render(
    <Router>
        <App />
    </Router>
)