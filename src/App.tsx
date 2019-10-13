import * as React from 'react';
import './App.css';
import Header from './containers/header/header';
import MainPageContent from './containers/mainPageContent/mainPageContent';
import ResumeContents from './containers/resumeContents/resumeContent';
import css from './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={css.backgroundImg}>
          <Header />
          <Switch>
            <Route exact path="/">
              <MainPageContent />
            </Route>
            <Route path="/resume">
              <ResumeContents />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
