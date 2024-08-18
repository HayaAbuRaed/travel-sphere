import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import TestProviders from "./TestProviders";

const testRender = (Component: ReactElement, options: RenderOptions = {}) => {
  return render(Component, { wrapper: TestProviders, ...options });
};

export default testRender;
