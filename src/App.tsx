import * as React from 'react';
import './App.css';
import Header from './containers/header/header';
import css from './App.css';
class App extends React.Component {
  render() {
    return (
      <div className={css.backgroundImg}>
        <Header />
        <div>Under Construction</div>
      </div>
    );
  }
}

export default App;
