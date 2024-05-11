import react from 'react';
import reactDOM from 'react-dom/client';
import './css/index.css';
import { App } from './App';
import { Context } from './utils/context';
const root = reactDOM.createRoot(document.querySelector("#root"))
root.render(
  <Context>
    <App />
  </Context>
)
