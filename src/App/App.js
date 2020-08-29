import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import NewBirb from '../components/pages/NewBirb/NewBirb';
import EditBirb from '../components/pages/EditBirb/EditBirb';
import SingleBirb from '../components/pages/SingleBirb/SingleBirb';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponents = () => {
      if (authed) {
        return <div>
          <Home />
          <SingleBirb />
          <NewBirb />
          <EditBirb />
        </div>;
      }
      return <h1>Log in NOW</h1>;
    };

    return (
      <div className="App">
        <h2>BIRB WATCHER</h2>
        <MyNavbar authed={authed}/>
        {loadComponents()}
      </div>
    );
  }
}

export default App;
