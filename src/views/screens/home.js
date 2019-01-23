import React, { Component } from 'react';
// import AppHeader from '../component/appBar';
import PrimarySearchAppBar from '../component/appBarPrimary';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <AppHeader /> */}
        <PrimarySearchAppBar />
      </div>
    );
  }
}

export default Home;
