// import Category from "./Category/Category";
// import Price from "./Price/Price";
// import Colors from "./Colors/Colors";
// import "./Sidebar.css";

// const Sidebar = ({ handleChange }) => {
//   return (
//     <>
//       <section className="sidebar">
//         <div className="logo-container">
//           <h1>🛒</h1>
//         </div>
//         <Category handleChange={handleChange} />
//         <Price handleChange={handleChange} />
//         <Colors handleChange={handleChange} />
//       </section>
//     </>
//   );
// };

// export default Sidebar;




import { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>
      <section className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;



