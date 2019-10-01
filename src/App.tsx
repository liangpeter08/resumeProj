import * as React from 'react';
import './App.css';
import Header from './containers/header/header';
import MainPageContent from './components/mainPageContent/mainPageContent';
import css from './App.css';
class App extends React.Component {
  render() {
    return (
      <div className={css.backgroundImg}>
        <Header />
        <MainPageContent />
      </div>
    );
  }
}

export default App;
