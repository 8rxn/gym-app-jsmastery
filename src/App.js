
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar.js'
import  Home from './pages/Home.js';
import  ExerciseDetail from './pages/ExerciseDetail.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '90vw' } }} m="auto">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
      </Box>
  );
}

export default App;
