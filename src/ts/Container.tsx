import * as React from 'react';
import NavigationBar from './components/NavigationBar';
import StickerList from './components/StickerList';
import DeviceList from './components/DeviceList';
import PlayGround from './components/PlayGround';

class Container extends React.Component {
  render = () => {
    return (
      <div id="container">
        <NavigationBar />
        <div id="main-container">
          <StickerList />
          <PlayGround />
          <DeviceList />
        </div>
      </div>
    );
  }
}

export default Container;
