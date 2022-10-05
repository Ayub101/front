import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/homepage';
import Audio_Book from './pages/audiobook';
import Video_Book from './pages/videobook';
import SignUp from './pages/signup';
import LiveRoom from './pages/live_room';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home/>} />
        <Route path='/homepage'  element={<Home/>} />
        <Route path='/audiobook' element={<Audio_Book/>} />
        <Route path='/videobook' element={<Video_Book/>} />
        <Route path='/liveroom' element={<LiveRoom/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);
}
  
export default App;