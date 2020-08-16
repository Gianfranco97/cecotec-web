import React from "react";
import { shallow } from "enzyme";
import AdminLayout from "./index.js";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

it("The snapshot matches", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <AdminLayout>
          <div />
        </AdminLayout>
      </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(
    <AdminLayout>
      <div />
    </AdminLayout>
  );
});
