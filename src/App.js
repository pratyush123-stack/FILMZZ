import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout, login } from './userSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const user = null; 
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          })
        );  
      }
      else{
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen/>
      ):(
        <Routes>
          <Route exact path="/" element = {<Homescreen/>}>
          </Route>
        </Routes>
      )}
      </Router>
    </div>
  );
}

export default App;
