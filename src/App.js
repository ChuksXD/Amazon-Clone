import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import {useStateValue} from './StateProvider'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import {auth} from "./firebase"

function App() {
  const [{ user}, dispatch] = useStateValue();


  useEffect(()=> {
   const unsubscribe=auth.onAuthStateChanged((authUser) =>{
     if(authUser){
     //The user is logged 
     dispatch({
       type: "SET_USER",
       user:authUser
     })
     }
     else{
     //The user is logged out
     dispatch({
      type: "SET_USER",
      user:null,
    });
     }
   });
   return () => {
     //Any cleanup operation when the app re-renders goes here
     unsubscribe();
   }
  }, [])
console.log("User is ",user);
  return (
    <Router>
    <div className="app">
     <Switch>

      <Route path="/checkout">
      <Header />
        <Checkout />
        
      </Route>

      <Route path ="/login">
        <Login />
        </Route>

        <Route path ="/">
        <Header />
        <Home />
       </Route>
    

     </Switch>
    </div>
    </Router>
  );
}

export default App;
