import React from 'react';
import './App.css';
import {HashRouter, Switch,Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route
            path='/facebook'
            component={() => {
            global.window && (global.window.location.href = '');
            return null;
            }}
        />
        <Route
            path='/linkedin'
            component={() => {
            global.window && (global.window.location.href = 'https://www.linkedin.com/in/soumi-sen-coder');
            return null;
            }}
        />
        <Route
            path='/github'
            component={() => {
            global.window && (global.window.location.href = 'https://github.com/SoumiSen');
            return null;
            }}
        />
        <Route
            path='/youtube'
            component={() => {
            global.window && (global.window.location.href = '');
            return null;
            }}
        />
      </Switch>
      <Footer/>
    </HashRouter>
  );
}

export default App;
