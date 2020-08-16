import React from "react";
import { shallow } from "enzyme";
import Clients from "./index.js";

it("renders without crashing", () => {
  shallow(<Clients />);
});
