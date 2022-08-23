import React from "react";
import emailjs from "emailjs-com";
export default function Email() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dtoz9en",
        "template_ajq2alb",
        e.target,
        "tLygumivamHEzLWA2"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div className="container py-4 bg-darkGrey my-5">
      <form id="contactForm" onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label logo-col fw-bolder" for="name">
            Name
          </label>
          <input
            className="form-control input-fields"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label logo-col fw-bolder" for="emailAddress">
            Email Address
          </label>
          <input
            className="form-control input-fields"
            id="emailAddress"
            type="email"
            name="userEmail"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3">
          <label className="form-label logo-col fw-bolder" for="message">
            Message
          </label>
          <textarea
            className="form-control input-fields "
            id="message"
            type="text"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="d-grid justify-content-center">
          <button className="btn btn-black btn-lg" type="submit">
            Mail!
          </button>
        </div>
      </form>
    </div>
  );
}
