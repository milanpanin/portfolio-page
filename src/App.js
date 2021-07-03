import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navigation from './components/navigation/navigation.jsx';
import Home from './components/home/home.jsx';
import Cv from './components/CV/cv.jsx';
import Projects from './components/projects/projects.jsx';
import Blog from './components/Blog/blog.jsx';

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
