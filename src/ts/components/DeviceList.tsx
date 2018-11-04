import * as React from 'react';
import '../../scss/device-list.scss';

class DeviceList extends React.Component {
  render = () => {
    return (
		  <div id="device-list">
        <ul>
          <li>test1</li>
          <li>test2</li>
        </ul>
		  </div>
    );
  }
}

export default DeviceList;
