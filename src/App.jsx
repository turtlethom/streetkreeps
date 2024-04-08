import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home/Home'));
const Events = React.lazy(() => import('./pages/events/Events'));
const Register = React.lazy(() => import('./pages/register/Register'));
const Contact = React.lazy(() => import('./pages/contact/Contact'));
const About = React.lazy(() => import('./pages/about/About'));
const NavBar = React.lazy(() => import('./components/Navbar/Navbar'));

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading</div>}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Suspense>
    </>
  );
}

export default App
