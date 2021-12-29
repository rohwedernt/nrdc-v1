import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nrdcv1 from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><Nrdcv1 /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
