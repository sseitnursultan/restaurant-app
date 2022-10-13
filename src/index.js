import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {StateProvider} from './Components/ContextProvider'
import reducer, {initialState} from "./Components/reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
          <App />
      </StateProvider>

  </React.StrictMode>
);

