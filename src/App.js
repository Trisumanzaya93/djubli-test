
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewAll from './pages/viewall';
import Detail from './pages/detail';
import {ThemeProvider} from "@mui/material/styles"
import theme from './config/theme';
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    
    <ReduxProvider store={store}>
  <ThemeProvider theme={theme}>
    <Router>
    <Routes>
      <Route path="/" element={<ViewAll/>} />
      <Route path="/detail/:id" element={<Detail/>} />
    </Routes>
  </Router>

  </ThemeProvider>

    </ReduxProvider>
  );
}

export default App;
