import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Janken from './janken';
import Detail from './Detail';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Janken />, document.getElementById('janken'));
ReactDOM.render(<Detail />,document.getElementById('detail'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
