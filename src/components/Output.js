import React from 'react'
import Card from './Card'
import Counter from './Counter'
import Details from './Details'
import '../styles/Output.css'

class Output extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      detailsClicked: false
    }
    this.handlerDetailsClicked = this.handlerDetailsClicked.bind(this)
    this.handlerWorkerId = this.handlerWorkerId.bind(this)
  }

  handlerDetailsClicked() {
    this.setState({
      detailsClicked: !this.state.detailsClicked
    })
  }

  handlerWorkerId(id) {
    this.props.workers.forEach(worker => {
      if (worker.id === id) {
        this.setState({
          clickedWorker: worker
        })
      }
    })
  }

  render() {

    // Show details
    let details = null

    if (this.state.detailsClicked) {
      details = <Details
        clickedWorker={this.state.clickedWorker}
        onDetailsClicked={this.handlerDetailsClicked}
                />
    }

    // Filtering workers array
    let filteredWorkers = this.props.workers.filter(worker => {
      if (worker.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1) {

        return worker
      }
      return null
    })

    // Displaying cards
    let cardsList = filteredWorkers.map(worker => {
      return (
        <Card
          onDetailsClicked={this.handlerDetailsClicked}
          onWorkerId={this.handlerWorkerId}
          id={worker.id}
          key={worker.id}
          worker={worker}
          pic="https://source.unsplash.com/featured/?man"
        />
      )
    })

    return (
      <div className="container">
        {details}
        <Counter workers={filteredWorkers} />
          <div className="output">
          {cardsList}
        </div>
      </div>
    )
  }
}

export default Output
