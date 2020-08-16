import React from "react";
import { shallow } from "enzyme";
import AdminLayout from "./index.js";

it("renders without crashing", () => {
  shallow(<AdminLayout />);
});
