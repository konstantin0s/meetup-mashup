import React, { Component } from 'react'
import TopicsList from './topics/TopicsList'
import RsvpList from './rsvps/RsvpList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1> Welcome to the Meetup Mashup </h1>
        </header>

        <main>
          <RsvpList />
          <TopicsList />
        </main>
      </div>
    );
  }
}

export default App;
