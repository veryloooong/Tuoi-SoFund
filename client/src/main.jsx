import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GoogleOAuthProvider} from "@react-oauth/google";

import './styles/index.scss'

const clientID = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientID} ><App /></GoogleOAuthProvider>
  </React.StrictMode>,
)
