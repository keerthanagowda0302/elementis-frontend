import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Community from '../pages/Community';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}