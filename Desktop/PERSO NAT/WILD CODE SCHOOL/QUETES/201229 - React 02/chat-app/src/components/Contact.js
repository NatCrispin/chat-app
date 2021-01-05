import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';


function Contact(props) {
  return (
    <div class="Contact">
      <img class="avatar" src={props.avatar} alt={props.name} />
      <div>
        <p class="name">{props.name}</p>
        <div class="status">
          <div class={props.online ? "status-online" : "status-offline"} />
          <p class="status-text">{props.status ? "online" : "offline"} </p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
};

export default Contact;
