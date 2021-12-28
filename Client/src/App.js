import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sample from "./Sample";
import Staff from "./Staff";
import Contact from "./Contact";
import About from "./About";
import Donate from "./Donate";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Preorder from "./Preorder";

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

            <Route path="/Gallery">
              <Gallery />
            </Route>

            <Route path="/preorder">
              <Preorder />
            </Route>

            <Route path="/Subscribe"></Route>

            <Route path="/MailingForm"></Route>
          </Switch>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
