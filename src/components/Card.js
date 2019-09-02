import React from 'react'
import City from './City'
import '../styles/Card.css'

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onDetailsClicked()
    this.props.onWorkerId(this.props.id)
  }

  render() {

    let combinedDotClass = `dot ${this.props.worker.city}`
    let combinedPicClass = `bg-pic ${this.props.worker.city}-border`

    return (
      <div className="card">
        <div className={combinedPicClass}>
        <City city={this.props.worker.city}/></div>
        <div className="info-wrapper">
          <p className="name">{this.props.worker.name}</p>
          <p className="job-title">{this.props.worker.jobTitle}</p>
          <div className="details-button" onClick={this.handleClick}>
            <div className={combinedDotClass}></div>
            <div className={combinedDotClass}></div>
            <div className={combinedDotClass}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
