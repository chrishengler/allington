import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, } from "@mui/material";
import '@fontsource-variable/urbanist';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import FaqList from "./components/FaqList";
import ThreadDetail from "./components/ThreadDetail";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from "./theme";

const App = () => {

  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: "100vh"}}>
      <CssBaseline />
      <Router>

        <Header />

        {/* SIDEBAR + CONTENT WRAPPER */}
        <Box sx={{display: 'flex', flex: 1}}>
          {/* SIDEBAR (Flexible Width) */}
          <Sidebar />

          {/* MAIN CONTENT */}
          <Box sx={{flexGrow: 1, padding: 3, bgcolor: '#f9f9f9', overflowY: 'auto'}}>
            <Routes>
              {['/', '/inbox', '/inbox/:id'].map(path => <Route path={path} key={path} element={<Inbox />} />)}
              <Route path="/threads/:id" element={<ThreadDetail />} />
              <Route path="/faq" element={<FaqList />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </Box>
    </ThemeProvider>
  );
};

export default App;
