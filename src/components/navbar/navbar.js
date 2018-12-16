import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="container col-lg-9">
            <header className="container p-0">
              <nav class="navbar d-block nav-bar navbar-expand-lg navbar-light p-0">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">
                        Umiejętności <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Kontakt
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
