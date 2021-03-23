import Header from "./components/header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";
import Details from "./components/details/Details";
import Navbar from "./components/navbar/Navbar";



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/home'>
          <Header />
          <Home />
        </Route>
        <Route path='/team/:teamId'>
            <Details />
        </Route>
        <Route path='*'>
            <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
