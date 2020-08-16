import React from "react";
import { shallow } from "enzyme";
import GenerateRoutes from "./index.js";

it("renders without crashing", () => {
  shallow(
    <GenerateRoutes
      routes={[
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
      ]}
    />
  );
});
