import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Registration() {
  const [username, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  function RegisterData() {
    const data = {
      UserName: username,
      UserPassword: userPassword,
    };
    axios
      .post(
        "https://localhost:44368/api/Registration/PostRegistrationAsync/",
        data
      )
      .then((json) => alert(JSON.stringify(json)))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Navbar />
      <div className="container py-4 bg-darkGrey my-5">
        <form id="contactForm">
          <div className="mb-3">
            <label className="form-label logo-col fw-bolder" for="name">
              Email
            </label>
            <input
              className="form-control input-fields"
              type="email"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label logo-col fw-bolder" for="emailAddress">
              Password
            </label>
            <input
              className="form-control input-fields"
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <div className="d-grid justify-content-center">
            <button
              className="btn btn-black btn-lg"
              type="submit"
              onClick={(e) => RegisterData(e)}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
