
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Animedetail from './Animedetail';
import Searchanime from './Searchanime';



function App() {
  return (
   
    <Router>
  
  <div >
  <Nav/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/animedetail:id">
      <Animedetail/>
    </Route>

    <Route path="/searchanime:searchkeyword">
      <Searchanime/>
    </Route>

    </Switch>
  </div>
  </Router>
  
    
  
  )
}

export default App;
