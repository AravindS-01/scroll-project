import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Stack from '@mui/material/Stack';
import ProgressBar from './ProgressBar';

function App() {
  return (
    <>
    
    <Stack sx={{height: '265px',backgroundColor:'red'}}></Stack>
    <Stack sx={{height: '100px',backgroundColor:'blue',position: 'sticky',top:0}}></Stack>
    
    <ProgressBar></ProgressBar> 
    </>
  );
}

export default App;
