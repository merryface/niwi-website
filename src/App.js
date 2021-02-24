import { Header, Footer } from './components/common';
import Home from './components/pages/Home';
import SeeOurSquadrons from './components/pages/SeeOurSquadrons';
import Videos from './components/pages/Videos';
import JoinUs from './components/pages/JoinUs';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Photos from './components/pages/Photos';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/squadrons">
          <SeeOurSquadrons />
        </Route>

        <Route exact path="/videos">
          <Videos />
        </Route>

        <Route exact path="/photos">
          <Photos />
        </Route>

        <Route exact path="/join">
          <JoinUs />
        </Route>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
