import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sample from './Sample';
import Staff from './Staff';
import Contact from './Contact';
import About from './About';
import Donate from './Donate';

function App() {
  return (
    
    <Router>


    <div className="App">
       <Navbar />                         
      
      <div className="content">
        {/* removed  <h1>Anhad|ਅਨਹਦ </h1> from here */}


        <Switch>                          
            <Route exact path="/"> 
              <Home />
            </Route>

            <Route path="/sample"> 
              <Sample />
            </Route>
  
            <Route path="/staff"> 
              <Staff />
            </Route>

            <Route path="/about"> 
              <About />
            </Route>


            <Route path="/contact"> 
              <Contact />
            </Route>


            <Route path="/Donate"> 
              <Donate />
            </Route>
        </Switch>
      
      </div>
    </div>

    </Router>
  );
}

export default App;
