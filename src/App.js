import logo from './logo.svg';
import './App.css';
import Home from './view/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuOne from './view/MenuOne';
import MenuTwo from './view/MenuTwo';
import MenuThree from './view/MenuThree';
import MenuFour from './view/MenuFour';
import MenuFive from './view/MenuFive';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu-one' element={<MenuOne />} />
          <Route path='/menu-two' element={<MenuTwo />} />
          <Route path='/menu-three' element={<MenuThree />} />
          <Route path='/menu-four' element={<MenuFour />} />
          <Route path='/menu-five' element={<MenuFive />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
