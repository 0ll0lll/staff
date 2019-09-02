import React from 'react'
import '../styles/City.css'

class City extends React.Component {

  render() {

  let combinedClass = `city-box ${this.props.city}`

    return (
      <div className={combinedClass}>
        <p className="city-name">{this.props.city}</p>
      </div>
    )
  }
}

export default City
