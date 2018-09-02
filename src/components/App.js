import React from "react";
import baseStyles from "../styles/base-styles";
import { BrowserRouter, Route } from "react-router-dom";
import NavMenuContainer from "./containers/nav_footer/NavMenuContainer";
import FooterContainer from "./containers/nav_footer/FooterContainer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import EventsPage from "../pages/EventsPage";
import LoginPage from "../pages/LoginPage";

//add font-awesome access to all components.
//docs: https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
library.add(faStroopwafel);

const PrimaryLayout = () => (
  <div className="primary-layout">
    <NavMenuContainer />
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LoginPage} />
    </main>
    <FooterContainer />
  </div>
);

const App = () => {
  baseStyles();
  return (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  );
};

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
