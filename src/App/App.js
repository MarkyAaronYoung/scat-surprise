import React from 'react';

import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import NewBirb from '../components/pages/NewBirb/NewBirb';
import EditBirb from '../components/pages/EditBirb/EditBirb';
import SingleBirb from '../components/pages/SingleBirb/SingleBirb';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>BIRB WATCHER</h2>
        <MyNavbar />
        <Home />
        <SingleBirb />
        <EditBirb />
        <NewBirb />
      </div>
    );
  }
}

export default App;
