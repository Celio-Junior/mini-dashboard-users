import { BrowserRouter, Route, Routes } from 'react-router';
import Sidebar from './components/Sidebar';
import MainPage from './pages/Main';
import NotFoundPage from './pages/NotFound';
import UserPage from './pages/User';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
