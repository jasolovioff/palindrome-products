import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import './static/fonts/BogleWeb_subset-Bold.woff2';
import './static/fonts/BogleWeb_subset-Regular.woff2';
import './static/styles/iconfont.css';
import './static/styles/main.css';
import './static/styles/wmt.css';
import './static/css/9.css';
import './static/css/7.css';
import './static/css/6.css';
import './static/css/18.css';
import './static/css/16.css';

import App from './App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/*import './index.styles';*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
