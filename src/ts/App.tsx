import * as React from 'react';
import reactDom from 'react-dom';
import Container from './Container';

import 'normalize.css';
import '../scss/index.scss';

reactDom.render(<Container />, document.querySelector('#root'));
