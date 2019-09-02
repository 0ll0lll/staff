import React from 'react'
import '../styles/Search.css'
import SearchIcon from '../assets/search-icon.svg'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }


  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={e => {e.preventDefault()}}>
          <p>Filter colleagues</p>
          <div className="input">
            <input
              id="searchInput"
              type="text"
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
              />
            <img id="search-icon" src={SearchIcon} alt="search-icon"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
