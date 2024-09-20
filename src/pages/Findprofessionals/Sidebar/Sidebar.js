import Category from "./Category/Category";
import Price from "./Price/Price";

import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>Hire Professionals</h1>
        </div>
        <Category handleChange={handleChange} />
        <hr />
        <Price handleChange={handleChange} />


      </section>
    </>
  );
};

export default Sidebar;
