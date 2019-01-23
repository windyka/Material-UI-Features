import React, { Component } from 'react';
// import AppHeader from '../component/appBar';
// import PrimarySearchAppBar from '../component/appBarPrimary';
// import MenuAppBar from '../component/appBarMenu';
import BottomAppBar from '../component/appBarBottom';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <AppHeader /> */}
        {/* <PrimarySearchAppBar /> */}
        {/* <MenuAppBar /> */}
        <BottomAppBar />
      </div>
    );
  }
}

export default Home;
