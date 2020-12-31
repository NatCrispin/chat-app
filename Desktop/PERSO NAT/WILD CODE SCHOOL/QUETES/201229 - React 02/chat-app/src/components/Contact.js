import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';


function Contact(props) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.avatar}
        alt={props.name}
      />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={props.statusText === "Online" ? "status-online" : "status-offline"} />
          <p className="status-text">{props.statusText}</p>
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
