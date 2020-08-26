import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HeroesStore } from '../src/stores/HeroesStore'
import { Provider } from 'mobx-react'
import { ItemStore } from '../src/stores/ItemsStore'

let heroesStore = new HeroesStore()
let itemStore = new ItemStore()
let stores = { heroesStore, itemStore }

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
