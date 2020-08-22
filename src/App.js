import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import { observer, inject } from 'mobx-react'
import Heroes from './components/Heroes';

@inject('heroesStore')
@observer
class App extends Component {

  componentDidMount() {
    this.props.heroesStore.fetchHeroes()
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() => <Heroes />} />
        </div>
      </Router>
    )
  }
}

export default App;