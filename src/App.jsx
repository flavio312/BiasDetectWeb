import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage';
import RegisterPage from '../src/pages/RegisterPage';
import HomePage from '../src/pages/HomePage';
import ChatPage from '../src/pages/ChatPage';
import HistoryPage from '../src/pages/HistoryPage';
import StatsPage from '../src/pages/StatsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}