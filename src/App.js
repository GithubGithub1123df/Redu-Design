import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom"
import NavBar from './NavBar';
import Home from './home';
import Gallery from './Gallery';
import About from './about';
import Footer from './footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
