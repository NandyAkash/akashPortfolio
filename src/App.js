import './App.css';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills/Skills';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';
import ProjectsDetails from './components/ProjectDetails/ProjectsDetails';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="text-gray-400  body-font">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} ></Route>
      <Route path="/blog" element={<Blog />} ></Route>
      <Route path="/projectDetails" element={<ProjectsDetails />} ></Route>
      <Route path="/" element={<Home />} ></Route>
    </Routes>
      
    </BrowserRouter>
    </div>
    
  );
}

export default App;
