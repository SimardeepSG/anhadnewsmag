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

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/gallery">
              <Gallery />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/staff">
              <Staff />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/Preorder">
              <Preorder />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/about">
              <About />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/reviews">
              <Reviews />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/Donate">
              <Donate />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/Gallery">
              <Gallery />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/preorder">
              <Preorder />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/Subscribe"></Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/MailingForm"></Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/Preorder2">
              <Preorder2 />
            </Route>

            <Route path="https://simardeepsg.github.io/anhadnewsmag.github.io/Reviews2">
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
