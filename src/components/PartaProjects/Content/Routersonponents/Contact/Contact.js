import React from "react";
import "./Contact.css";
import { stateConst } from "../../../../Redux/State/StateConst/StateConst";

const Contact = () => {
  const contact = stateConst.contact;
  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <div className="data">
        <div>
          <p className="uppercase">CAR Rental</p>
          <p
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "flex-start",
            }}>
            {contact.carRental.text}
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={contact.carRental.imgTell} />
            <p>{contact.carRental.tel}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={contact.carRental.imgEmail} />
            <p>{contact.carRental.email}</p>
          </div>
        </div>
        <div>
          <p className="uppercase">COMPANY</p>
          <p>{contact.company.city}</p>
          <p>{contact.company.careers}</p>
          <p>{contact.company.mobile}</p>
          <p>{contact.company.blog}</p>
          <p>{contact.company.howWeWorks}</p>
          {/* <p>{contact.company.     }</p> */}
        </div>
        <div>
          <p className="uppercase">WORKING HOURS</p>
          <p>{contact.workingHours.monFri}</p>
          <p>{contact.workingHours.sat}</p>
          <p>{contact.workingHours.sun}</p>
        </div>
        <div>
          <p className="uppercase">SUBSCRIPTION</p>
          <p
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "flex-start",
            }}>
            {contact.subscribe.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
