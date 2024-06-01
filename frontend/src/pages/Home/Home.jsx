import React, { useState } from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

    const[Category, setCategory] = useState("All")

  return (
    <div>
       <Header />
       <ExploreMenu Category={Category} setCategory={setCategory}/>
       <FoodDisplay />
    </div>
  )
}

export default Home
