import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import { observer, inject } from 'mobx-react'
import Heroes from './components/Heroes';
import Items from './components/Items';
import NavBar from './components/NavBar';
// https://nivo.rocks/bar
// 875B333846371B76D7B679822C7432D6
@inject('heroesStore', 'itemStore')
@observer
class App extends Component {

  componentDidMount() {
    this.props.heroesStore.fetchHeroes()
    this.props.itemStore.fetchItemDetails()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' render={() => <Heroes />} />
          {/* <Route exact path={`/items/hero/:id`} render={({ match }) => <Items match={match} />} /> */}
          <Route exact path={`/items`} render={() => <Items />} />
        </div>
      </Router>
    )
  }
}

export default App;