import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sample from './Sample';
import Contact from './Contact';
import About from './About';


function App() {
  return (
    <Router>

    <div className="App">
       <Navbar />                         
      
      <div className="content">
        <h1>Anhad Website - ਅਨਹਦ </h1>
        
        <Switch>                          
            <Route exact path="/"> 
              <Home />
            </Route>

            <Route path="/sample"> 
              <Sample />
            </Route>

            <Route path="/contact"> 
              <Contact />
            </Route>

            <Route path="/about"> 
              <About />
            </Route>

        </Switch>
      
      </div>
    </div>

    </Router>
  );
}

export default App;
