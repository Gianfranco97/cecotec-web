import React from "react";
import { shallow } from "enzyme";
import GenerateRoutes from "./index.js";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

const demoRoutes = [
  {
    path: "/",
    exact: true,
    component: <div />,
    isPrivate: true,
    name: "Admin",
  },
  {
    path: "/products",
    isPrivate: true,
    component: <div />,
    name: "Products",
  },
];

it("The snapshot matches", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <GenerateRoutes routes={demoRoutes} />
      </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(<GenerateRoutes routes={demoRoutes} />);
});
