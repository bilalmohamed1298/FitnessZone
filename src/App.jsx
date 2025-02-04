import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Footer from './Components/Footer/Footer';
import Home from "@/pages/Home";
import ExerciseDetails from './Pages/ExerciseDetails';
import Navbar from './Components/Navbar/Navbar';
import AllExercises from './Components/AllExercises/AllExercises';


function App() {
    return ( 
        <div>
            <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/exercises' element={<AllExercises/>} />
                    <Route path='/exercise/:id' element={<ExerciseDetails/>} />
                </Routes>
            </Box>
            <Footer/>
        </div>
    )
}

export default App
  