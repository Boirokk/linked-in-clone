import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/">
           <Login/>
           <Home/>
         </Route>
         <Route path="/home">
            <Header />
            <Home />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
