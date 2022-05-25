import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./Gallery";
import Staff from "./Staff";
import Reviews from "./Reviews";

import About from "./About";
import Donate from "./Donate";
import Footer from "./Footer";
import Preorder from "./Preorder";
import Preorder2 from "./Preorder2";
import Reviews2 from "./Reviews2";

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

            <Route path="/gallery">
              <Gallery />
            </Route>

            <Route path="/staff">
              <Staff />
            </Route>

            <Route path="/Preorder">
              <Preorder />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/reviews">
              <Reviews />
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

            <Route path="/Preorder2">
              <Preorder2 />
            </Route>

            <Route path="/Reviews2">
              <Reviews2 />
            </Route>
          </Switch>
        </div>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
