import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from "./components/Redux/Store.jsx"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ThemeProvider } from './components/landinpage/Context/ThemeContext.jsx'

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
