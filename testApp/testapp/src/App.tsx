import React from 'react';
import './App.css';
import MainView from './MainView/MainView';
import MainAppView from './AppView/MainAppView';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <MainView>
        <div></div>
        <MainAppView>
          <Main />
        </MainAppView>
        <div></div>
      </MainView>
    </div>
  );
}

export default App;
