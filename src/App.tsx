import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Editor from './components/Editor';

function App() {
  const myTheme = createTheme({});

  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <Editor />
      </ThemeProvider>
    </div>
  );
}

export default App;
