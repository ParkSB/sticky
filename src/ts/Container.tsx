import * as React from 'react';
import NavigationBar from './components/NavigationBar';

class Container extends React.Component {
  render = () => {
    return (
      <div id="container">
        <NavigationBar />
      </div>
    );
  }
}

export default Container;
