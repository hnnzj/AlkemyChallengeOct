import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Table from './components/Table';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <div className='bg-dark vh-100 text-white'>
                <Router>
                    <NavBar />

                    <Routes>
                        <Route path='/' element={<Landing />}></Route>
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/table' element={<Table />}></Route>
                        <Route path='/create' element={<Create />}></Route>
                    </Routes>
                </Router>
            </div>
        </ChakraProvider>
    );
}

export default App;
