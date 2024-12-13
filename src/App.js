import logo from './logo.svg';
import './App.css';
import Home from './view/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './view/About';
import Blog from './view/Blog';
import LearnMore from './view/LearnMore';
import Contact from './view/Contact';
import Gallery from './view/Gallery';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/learn' element={<LearnMore />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
