import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlesPage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={About}  />
                <Route path="/articlesList" component={ArticlesListPage}  />
                <Route path="/article/:name" component={ArticlesPage}  />
                <Route component={NotFoundPage}/>
            </Switch>
          

          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
