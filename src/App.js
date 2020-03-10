import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/header.componenet'
import HomePage from './Pages/HomePage/HomePage.jsx'
import Shop from './Pages/Shop/Shop'

const HatsPage =()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
const JacketPage =()=>(
  <div>
    <h1>JACKET PAGE</h1>
  </div>
)
const sneakersPage =()=>(
  <div>
    <h1>sneakers</h1>
  </div>
)
const WomenesPage =()=>(
  <div>
    <h1>Womens</h1>
  </div>
)
const MensPage =()=>(
  <div>
    <h1>Mens</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route path='/hats' component={HatsPage}/>
        <Route path='/Jackets' component={JacketPage}/>
        <Route path='/sneakers' component={sneakersPage}/>
        <Route path='/womens' component={WomenesPage}/>
        <Route path='/Mens' component={MensPage}/>
        <Route path='/Shop' component={Shop}/>>
     </Switch>
    </div>
  );
}

export default App;
