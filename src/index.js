import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogContextProvider } from './context/BlogContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
      <BlogContextProvider>
       <App />
    </BlogContextProvider>
  </AuthContextProvider>
  
);
