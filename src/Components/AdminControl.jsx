import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
export default function Admin() {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [imageTrainer, setImageTrainer] = useState("");
  const [experience, setExperience] = useState("");
  const [bodyfat, setBodyFat] = useState("");
  const [nationality, setNationality] = useState("");
  const [isauthorized, setIsAuthorized] = useState("");

  function saveData() {
    const data = {
      Name: name,
      Discription: discription,
      ImageTrainer: imageTrainer,
      Experience: experience,
      Bodyfat: bodyfat,
      Nationality: nationality,
      IsAuthorized: isauthorized,
    };
    axios
      .post("https://localhost:44368/api/trainer", data)
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
              Name
            </label>
            <input
              className="form-control input-fields"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label logo-col fw-bolder" for="emailAddress">
              Description
            </label>
            <input
              className="form-control input-fields"
              type="text"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label logo-col fw-bolder" for="emailAddress">
              Image Trainer
            </label>
            <input
              className="form-control input-fields"
              id="emailAddress"
              type="text"
              name="userEmail"
              value={imageTrainer}
              onChange={(e) => setImageTrainer(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label logo-col fw-bolder" for="emailAddress">
              Experience
            </label>
            <input
              className="form-control input-fields"
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label logo-col fw-bolder" for="emailAddress">
              Body Fat
            </label>
            <input
              className="form-control input-fields"
              type="text"
              value={bodyfat}
              onChange={(e) => setBodyFat(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label logo-col fw-bolder" for="emailAddress">
              Nationality
            </label>
            <input
              className="form-control input-fields"
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label logo-col fw-bolder" for="emailAddress">
              IsAuthorized
            </label>
            <input
              className="form-control input-fields"
              type="text"
              value={isauthorized}
              onChange={(e) => setIsAuthorized(e.target.value)}
            />
          </div>

          <div className="d-grid justify-content-center">
            <button
              className="btn btn-black btn-lg"
              type="submit"
              onClick={(e) => saveData(e)}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
