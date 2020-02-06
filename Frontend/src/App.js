import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'

const initState = {
  user: null,
  isUserLoggedIn: false,
  loadingUser: true
}

const App = () => {
  const [state, setState] = useState(initState)
  const logoutUser = () => {
    console.log('Logout clicked')
  }
  return (
    <div className="App">
      <Navbar logoutUser={logoutUser} isUserLoggedIn={state.isUserLoggedIn}/>
      This is a React-App
    </div>
  );
}

export default App;
