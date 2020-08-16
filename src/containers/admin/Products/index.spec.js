import React from "react";
import { shallow } from "enzyme";
import Products from "./index.js";

it("renders without crashing", () => {
  shallow(<Products />);
});
