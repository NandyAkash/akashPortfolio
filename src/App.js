import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import ProjectsDetails from './components/ProjectDetails/ProjectsDetails';
import Home from './components/Home/Home';
import FitnessGymDetails from './components/ProjectDetails/FitnessGymDetails';
import JustFly from './components/ProjectDetails/JustFly';

function App() {
  return (
    <div className="text-gray-400  body-font">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} ></Route>
      <Route path="/blog" element={<Blog />} ></Route>
      <Route path="/projectDetails" element={<ProjectsDetails />} ></Route>
      <Route path="/projectDetailsfitnessGym" element={<FitnessGymDetails />} ></Route>
      <Route path="/jutfly" element={<JustFly />} ></Route>
      <Route path="/" element={<Home />} ></Route>
    </Routes>
      
    </BrowserRouter>
    </div>
    
  );
}

export default App;
