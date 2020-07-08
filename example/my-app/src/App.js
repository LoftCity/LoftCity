import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";



import './App.css';
import Vse_kv from './components/Vse_kv';
import Kv from './components/Kv';
import Nav from './components/nav';
import Home from './pages/Home';
import List from './pages/List';

class App extends Component{

  render() {
    const App = () => (
    <BrowserRouter>
    <div>

      <Nav />
      <Switch>
      <Route exact path ='/kv' component={Kv} />
      <Route exact path ='/vse_kv'  component={Vse_kv} />
      <Route exact path='/' component={Home}/>
      <Route path='/list' component={List}/>
      </Switch>
    </div>
  </BrowserRouter>
  )


  return (
    <Switch>
      <App/>
    </Switch>
  );
}
}

export default App;
