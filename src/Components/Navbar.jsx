import { Link } from "react-router-dom";
import Admin from "./AdminControl";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-darkGrey">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold logo-col" href="#">
          <i>Alpha Touch</i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                className="nav-link active text-light fw-600 text-hover"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link text-light fw-600 text-hover"
                to="/admin"
              >
                Admin
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light fw-600 text-hover" href="#">
                Trainers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light fw-600 text-hover" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link text-light fw-600 text-hover"
                to="/registration"
              >
                Registration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
