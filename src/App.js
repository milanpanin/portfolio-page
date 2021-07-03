import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import Cv from './components/cv/cv';
import Projects from './components/projects/projects';
import Blog from './components/blog/blog';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation/>
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cv">
            <Cv />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
