import React from "react";
import { shallow, mount } from "enzyme";
import ClientForm from "./index.js";
import EnzymeToJson from "enzyme-to-json";

it("The snapshot matches", () => {
  const tree = EnzymeToJson(
    mount(<ClientForm closeModal={() => {}} visible />)
  );
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(<ClientForm closeModal={() => {}} visible />);
});
