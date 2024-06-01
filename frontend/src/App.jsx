import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Order' element={<Order/>} />
      </Routes>
    </div>
  )
}

export default App
