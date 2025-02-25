import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
