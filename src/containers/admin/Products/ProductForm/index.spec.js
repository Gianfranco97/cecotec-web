import React from "react";
import { shallow } from "enzyme";
import ProductForm from "./index.js";

it("renders without crashing", () => {
  shallow(<ProductForm closeModal={() => {}} visible />);
});
