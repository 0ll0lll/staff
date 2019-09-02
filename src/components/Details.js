import React from 'react'
import City from './City'
import '../styles/Details.css'
import CloseIcon from '../assets/close-icon.png'
import CakeIcon from '../assets/cake-icon.png'
import EmailIcon from '../assets/email-icon.png'
import MobileIcon from '../assets/mobile-icon.png'

class Details extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onDetailsClicked()
  }

  render() {

    let {
      name,
      jobTitle,
      hireDate,
      birthday,
      email,
      mobile,
      showAge,
      city
    } = this.props.clickedWorker

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    // Joined
    let countMonthsDifference = (d1, d2) => {
      var months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months -= d1.getMonth() + 1;
      months += d2.getMonth();
      return months <= 0
        ? 0
        : months;
    }

    let joinedMonthsDifference = countMonthsDifference(new Date(hireDate), new Date())
    let years = Math.floor(joinedMonthsDifference / 12)
    let months = joinedMonthsDifference % 12

    let joined = `Joined ${years} years ${months} months ago`

    // Birthday
    let birthdayMonthsDifferece = countMonthsDifference(new Date(birthday), new Date())
    let turningAge = Math.floor(birthdayMonthsDifferece / 12) + 1
    let birthdayMonth = new Date(birthday).getMonth()

    let nextBirthday = `Turning ${turningAge} on ${monthNames[birthdayMonth].toUpperCase()} ${new Date(birthday).getDate()}`

    let birthdayElement = null
    if (showAge) {
      birthdayElement = <p className="b-day">
        <span>Birthday:
          <img id="cake-icon" src={CakeIcon} alt="cake icon"/>
        </span>{nextBirthday}
      </p>
    }

    return (<div className="wrapper">
      <div className="details">
        <div className="pic">
          <City city={city}/>
        </div>

        <img onClick={this.handleClick} id="close-icon" src={CloseIcon} alt="close icon"/>

        <div className="info">
          <div className="bio">
            <div className="container">
              <p className="card-name">{name}</p>
              <p className="card-job-title">{jobTitle}</p>
              <p className="joined">{joined}</p>
              {birthdayElement}
            </div>
          </div>
          <div className="contacts">
            <div className="container">
              <p className="email">
                <img id="email-icon" src={EmailIcon} alt="email icon"/>{email}
              </p>
              <p className="mobile"><img id="mobile-icon" src={MobileIcon} alt="mobile icon"/>{mobile}</p>
            </div>
          </div>
          <div className="text">
            <p>Lorem job description ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis.</p>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Details
