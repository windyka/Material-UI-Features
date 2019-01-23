import React, { Component } from 'react';
// import AppHeader from '../component/appBar';
// import PrimarySearchAppBar from '../component/appBarPrimary';
import MenuAppBar from '../component/appBarMenu';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <AppHeader /> */}
        {/* <PrimarySearchAppBar /> */}
        <MenuAppBar />
      </div>
    );
  }
}

export default Home;
