import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
  // your custom styles go here
}) as typeof Button;
function App() {
  return (
    <div className="App"> 
    <CustomButton variant="contained">Hello World</CustomButton>
  </div>
  );
}

export default App;
