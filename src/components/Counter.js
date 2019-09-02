import React from 'react'
import '../styles/Counter.css'

class Counter extends React.Component {

  render() {

    let amount = this.props.workers.length

    return (
      <div className="counter">
        <p>Showing {amount} colleagues(s)</p>
      </div>
    )
  }
}

export default Counter
