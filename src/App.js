import logo from './logo.svg';
import React from 'react'
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import {Provider} from 'react-redux'
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <UserContainer/>
    </div>
    </Provider>
  );
}

const mapStateToProps = state=>{
  return{
    numOfCakes:state.numOfCakes
  }
}

export default App;
