import React from "react";
import { shallow, mount } from "enzyme";
import ProductForm from "./index.js";
import EnzymeToJson from "enzyme-to-json";

it("The snapshot matches", () => {
  const tree = EnzymeToJson(
    mount(<ProductForm closeModal={() => {}} visible />)
  );
  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(<ProductForm closeModal={() => {}} visible />);
});
