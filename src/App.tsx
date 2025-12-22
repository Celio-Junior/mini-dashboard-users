import { BrowserRouter, Route, Routes } from 'react-router';
import Sidebar from './components/Sidebar';
import Main from './pages/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
