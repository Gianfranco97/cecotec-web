import React from "react";
import { shallow } from "enzyme";
import AuthLayout from "./index.js";

it("renders without crashing", () => {
  shallow(
    <AuthLayout>
      <div />
    </AuthLayout>
  );
});
