import "./Category.css";
import Input from "../../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">House Service Professionals</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All House Service Professionals
        </label>
        <Input
          handleChange={handleChange}
          value="cleaningservices"
          title="Cleaning Services"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="lawncare"
          title="Lawn Care"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="plumbing"
          title="Plumbing"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="painting"
          title="Painting"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="electrical"
          title="Electrical"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;