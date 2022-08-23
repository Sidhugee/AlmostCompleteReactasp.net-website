import Trainer1 from "../Images/Trainer1.jpg";
import Trainer2 from "../Images/Trainer2.jpg";
import Trainer3 from "../Images/Trainer3.jpg";

export default function Trainers() {
  return (
    <div className="Trainers">
      <h4 className="w-100 container-fluid text-center ">
        <span className="AboutA fw-bold f-80 logo-col"> T </span>
        <span className="AboutB fw-bold nav-texts text-light text-underline">
          rainers
        </span>
      </h4>
      <div className="row w-100">
        <div className="col-4 text-center w-33">
          <div class="card w-80 bg-darkGrey mx-auto">
            <img src={Trainer1} class="card-img-top vh-37" alt="..." />
            <div class="card-body">
              <h5 class="card-title logo-col fw-bold">Arnold</h5>
              <p class="card-text text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-black">
                Check Now!
              </a>
            </div>
          </div>
        </div>
        <div className="col-4 text-center w-33">
          {" "}
          <div class="card w-80 bg-darkGrey mx-auto">
            <img src={Trainer2} class="card-img-top vh-37" alt="..." />
            <div class="card-body">
              <h5 class="card-title logo-col fw-bold ">Alex</h5>
              <p class="card-text text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-black">
                Check Now!
              </a>
            </div>
          </div>
        </div>
        <div className="col-4 text-center w-33">
          {" "}
          <div class="card w-80 bg-darkGrey mx-auto">
            <img src={Trainer3} class="card-img-top vh-37" alt="..." />
            <div class="card-body">
              <h5 class="card-title logo-col fw-bold">Kevin</h5>
              <p class="card-text text-light">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-black">
                Check Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
