import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChooseDataPage from './pages/ChooseDataPage';
import UploadDocumentPage from './pages/UploadDocumentPage';
import { AuthProvider } from './components/AuthContext';
import ChatbotPage from './pages/ChatbotPage';
import ProvideURL from './pages/ProvideURL';
import Navigation from './components/Navigation';
import AuthPage from './components/AuthPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AuthPage" element={<AuthPage />} />
            <Route path="/choose-data" element={<ChooseDataPage />} />
            <Route path="/upload-document" element={<UploadDocumentPage />} />
            <Route path="/provide-url" element={<ProvideURL />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
