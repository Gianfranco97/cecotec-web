import React from "react";
import { shallow } from "enzyme";
import ClientForm from "./index.js";

it("renders without crashing", () => {
  shallow(<ClientForm closeModal={() => {}} visible />);
});
