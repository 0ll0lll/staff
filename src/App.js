import React from 'react';
import Header from './components/Header'
import Title from './components/Title'
import Search from './components/Search'
import Output from './components/Output'

import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      workers: [],
      isLoaded: false,
      filterText: ''
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }

  componentDidMount() {
    fetch('https://interview.dev.steinias.com/api/employees')
      .then(res => res.json())
      .then(json => {
        const cities = ['san', 'nyc', 'lond', 'man']

        json.forEach(item => {
          item.city = cities[Math.floor(Math.random() * 4)]
        })

        this.setState({
          workers: json,
          isLoaded: true
        })
      })
  }

  handleFilterTextChange(filterText) {

    this.setState({
      filterText: filterText
    })
  }

  render () {

    let {workers, isLoaded} = this.state

    if (!isLoaded) {
      return <div className="loader">Loading...</div>
    } else {
      return (
        <div className="App">
          <Header />
          <Title />
          <Search
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
          <Output
            workers={workers}
            filterText={this.state.filterText}
          />
        </div>
      )
    }
  }
}

export default App;
