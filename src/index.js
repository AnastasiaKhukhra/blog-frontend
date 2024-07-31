import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Create a custom theme
const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5', // Light gray background color
    },
  },
});

// If you prefer a background image, create a CSS file with the following content
// and uncomment the import statement below
// body {
//   background-image: url('https://source.unsplash.com/random/1920x1080');
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
// }
// import './styles.css'; // Uncomment if using background image

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
