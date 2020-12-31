import React from "react";
import Contact from "./components/Contact";
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <Contact
        name="Anita Sutton"
        avatar="https://randomuser.me/api/portraits/men/87.jpg"
        statusText="Online" />
      <Contact
        name="Jim George"
        avatar="https://randomuser.me/api/portraits/men/98.jpg"
        statusText= "Offline"/>
      <Contact
        name="Charlotte Ryan"
        avatar="https://randomuser.me/api/portraits/women/6.jpg"
        statusText="Online" />
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default App;
