// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import BlogDashboard from './Components/BlogDashboard';
import BlogForm from './Components/blogform';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<BlogDashboard />} />
        <Route path="/add-blog" element={<BlogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
