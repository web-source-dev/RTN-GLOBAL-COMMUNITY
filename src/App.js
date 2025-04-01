import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CssBaseline } from '@mui/material';
import ChatRoomsList from './components/support/ChatRoomsList';
import GlobalLiveChat from './components/support/GlobalLiveChat';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <Routes>
          <Route path="/chat" element={<ChatRoomsList />} />
            <Route path="/chat/room/:roomId" element={<GlobalLiveChat />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;