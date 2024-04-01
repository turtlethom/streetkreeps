import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import Events from './pages/events/Events';
import Register from './pages/register/Register';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import NavBar from './components/Navbar/Navbar';
import { supabase } from './lib/helper/supabaseClient';



function App() {

  const login = async() => {
    await supabase.auth.signIn({
      provider: "github"
    })
  }
  return (
    <>
    {/* Everything Outside Route Remains Constant */ }
    {/* <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/events' element={<Events />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes> */}

    <button onClick={login} style={{width: '3rem', padding: "2rem"}}>Login with Github</button>
    </>
  );
}

export default App
