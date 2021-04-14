import '../App/App';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Shop from '../Shop/Shop';
import ItemInfo from '../ItemInfo/ItemInfo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemInfo}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

export default App;
