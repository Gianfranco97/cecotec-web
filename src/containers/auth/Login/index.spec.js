import React from "react";
import { shallow } from "enzyme";
import Login from "./index.js";

it("renders without crashing", () => {
  shallow(<Login />);
});
