import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb10000';
    this.props.history.push(`/edit/${birbId}`);
  }

  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <button className="btn btn-dark" onClick={this.editBirbEvent}>Edit A Birb</button>
        <Link to='/new'>New Birb</Link>
        <h2> Here is a link to a <Link to='/birbs/birb123344'>Specific Birb</Link></h2>
      </div>
    );
  }
}

export default Home;
