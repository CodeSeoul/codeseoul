import React from 'react';
import baseStyles from '../styles/base-styles'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import MeetupPage from '../pages/MeetupPage'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/meetups" component={MeetupPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </main>
  </div>
)


const App = () => {
  baseStyles()
  return (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  )
}

export default App;

/****************************
HOME | MEETUPS | ABOUT | CONTACT


- Directions
- calendar
- meetup api
    - descriptions
    - materials
    - before you come!! prerequisites!!
- Resources
    - Videos
- Contact
    - Leaders contacts
- Projects
    - Ongoing
    -…
*****************************/