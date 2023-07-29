import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Stopwatch from './Stopwatch';
import NoteTakingTool from './NoteTakingTool';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path="/tools" element={
          <div>
            <NoteTakingTool />
            <br />
            <Stopwatch />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;