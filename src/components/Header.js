import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <header>
        <div className="header navbar navbar-light">
          <div className="container-fluid">
            <div className="nav-left">
              <div className="nav-icon" onClick={handleOpenSidebar}>
                {openSidebar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                )}
              </div>
              <a className="logo" href="/">
                GADJIAN
              </a>
            </div>
            <div className="nav-right">
              <div className="nav-user">
                <p>
                  Hello, <span>Gadjian User</span>
                </p>
              </div>
              <img src="/user.jpg" alt="user-login" />
            </div>
          </div>
        </div>
      </header>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};
