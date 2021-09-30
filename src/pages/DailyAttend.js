import React from "react";
import { Header } from "../components/Header";
import { Head } from "../components/Head";
import { Sidebar } from "../components/Sidebar";

export const DailyAttend = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-0"></div>
        <div className="col-lg-9 col-md-9 col-sm-12">
          <div className="container">
            <Head title="DAILLY ATTENDANCE" />
          </div>
        </div>
      </div>
    </>
  );
};
