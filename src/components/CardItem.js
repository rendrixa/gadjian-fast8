import React from "react";
import Moment from "react-moment";

export const CardItem = ({ items, isLoading }) => {
  return (
    <>
      <div className="row">
        {isLoading
          ? Array(4)
              .fill()
              .map((_, index) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-12" key={index}>
                    <div className="card loading bg-light ">
                      <div className="card-head">
                        <p
                          className="bg-secondary rounded-pill  "
                          style={{ width: "70px", height: "10px" }}
                        ></p>
                      </div>
                      <div className="card-body">
                        <div className="card-body-photo me-3">
                          <span className="dot bg-secondary"></span>
                        </div>
                        <div className="card-body-detail">
                          <p
                            className="bg-secondary rounded-pill "
                            style={{ width: "40px", height: "10px" }}
                          ></p>
                          <p
                            className="bg-secondary rounded-pill "
                            style={{ width: "70px", height: "10px" }}
                          ></p>
                          <p
                            className="bg-secondary rounded-pill "
                            style={{ width: "40px", height: "10px" }}
                          ></p>
                          <p
                            className="bg-secondary rounded-pill "
                            style={{ width: "70px", height: "10px" }}
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
          : items.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-12" key={index}>
                <div className="card">
                  <div className="card-head">
                    <h2>
                      Personnel ID: <span> {item.location.street.number} </span>
                    </h2>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-three-dots ml-auto"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="card-body-photo">
                      <img src={item.picture.large} alt="user" />
                    </div>
                    <div className="card-body-detail">
                      <h2>Name</h2>
                      <p>
                        {item.name.first} {item.name.last}
                      </p>
                      <h2>Telphone</h2>
                      <p>{item.phone}</p>
                      <h2>Birthday</h2>
                      <p>
                        <Moment format="DD / MM / YYYY">{item.dob.date}</Moment>
                      </p>
                      <h2>Email</h2>
                      <p>{item.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};
