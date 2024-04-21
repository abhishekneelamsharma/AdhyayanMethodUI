import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Coachings from "./components/Coachings";
import Signup from './components/Signup';
import Login from './components/Login';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';

import { createContext, useReducer } from 'react';

import { reducer,initialstate } from '../src/reducer/useReducer';


export const UserContext = createContext();
function App() {
  
  const [state,dispatch] = useReducer(reducer,initialstate);
  
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/coachings" element={<Coachings />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </Router>

      </UserContext.Provider>




    </>
  );
}


export default App;
