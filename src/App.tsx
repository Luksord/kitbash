import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage/Home';
import { Headers } from './pages/HeadersPage/Headers';
import { Footers } from './pages/FootersPage/Footers';
import { Sections } from './pages/SectionsPage/Sections';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headers" element={<Headers />} />
        <Route path="/footers" element={<Footers />} />
        <Route path="/sections" element={<Sections />} />
      </Routes>
    </main>
  );
}

export default App;
