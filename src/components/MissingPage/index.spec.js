import React from "react";
import { shallow } from "enzyme";
import MissingPage from "./index.js";

it("renders without crashing", () => {
  shallow(<MissingPage />);
});
