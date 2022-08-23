import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Trainer1 from "../Images/Trainer1.jpg";
import Home from "./Home";
export default function TrainerDetail() {
  const { Id } = useParams();
  const [trainersDetail, settrainersDetails] = useState([]);
  const header = new Headers({ "Access-Control-Allow-Origin": "*" });
  useEffect(() => {
    fetch("https://localhost:44368/api/trainer", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newTrainer = data.find((item) => item.Id === parseInt(Id));
        settrainersDetails(newTrainer);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col col-12 margDetail borDetail">
            <img
              className="d-flex justify-content-center text-center mx-auto"
              src={Trainer1}
            />
            <h5 className="text-danger fw-bold text-center mt-5">
              Name= "{trainersDetail.Name}"
            </h5>
            <p className="text-light text-center">
              Experience= "{trainersDetail.Experience}"
            </p>
            <p className="text-light text-center">
              Authorization= "{trainersDetail.IsAuthorized}"
            </p>
            <p className="text-light text-center">
              Nationality= "{trainersDetail.Nationality}"
            </p>
            <p className="text-light text-center">
              Preview= "{trainersDetail.Discription}"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
