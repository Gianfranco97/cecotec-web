import React from "react";
import { shallow } from "enzyme";
import Home from "./index.js";

it("renders without crashing", () => {
  shallow(<Home />);
});
