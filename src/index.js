import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HeroesStore } from '../src/stores/HeroesStore'
import { Provider } from 'mobx-react'

let heroesStore = new HeroesStore()
let stores = { heroesStore }

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
