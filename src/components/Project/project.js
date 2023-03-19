import React from "react";
import { NavLink } from "react-router-dom";

function Project(props) {
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="card">
        <div className="card-body">
          <div className="img-container">
            <img
              className="card-img-top"
              alt={props.name}
              src={props.image}
            />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong className="card-title">Name:</strong> {props.name}
              </li>
              <li>
                <strong>Description:</strong> {props.description}
              </li>
              <li>
                <strong>Github Repo:</strong> <NavLink>{props.githubRepo}</NavLink>
              </li>
              <li>
                <strong>Deployed App:</strong> <NavLink>{props.deployedAppLink}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;