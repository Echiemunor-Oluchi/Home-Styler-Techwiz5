import React from "react";
import Sidebar3 from "../Findprofessionals/dashboardpages/sidebar/sidebar";
import "./findprofessionals.css";
import Content from "./Content";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Findprofessionals = () => {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Sidebar3 />
        <Content />
        <Profile />

        <div className="dashboard--content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/order" element={<Order />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Findprofessionals;

function Home() {
  return <h2>This is Home page</h2>;
}

function Order() {
  return <h2>This is Order page</h2>;
}
