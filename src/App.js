import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Contact/Contact';
import Food from './Food/Food';
import FoodDetail from './FoodDetail/FoodDetail';
import PostDetails from './PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/Home'>
            <Home></Home>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/post/:postId'>
              <PostDetails></PostDetails>
          </Route>
          <Route path='/Food'>
            <Food></Food>
          </Route>
          <Route path='/item/:itemId'>
          <FoodDetail></FoodDetail>
          </Route>
          <Route path='/Contact'>
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
