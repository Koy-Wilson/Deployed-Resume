import './App.css';
import Home from './routes/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Interests from './routes/Interests';
import Projects from './routes/Projects';
import Experience from './routes/Experience';
import Accomplishments from './routes/Accomplishments';

function App() {
  return (
    <div id="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/accomplishments" element={<Accomplishments />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
