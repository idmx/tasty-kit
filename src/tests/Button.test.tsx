import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "../components/Button";

describe("Button component", () => {
	test("Button renders", () => {
		render(<Button title="test" type="primary" onClick={() => console.log("test Button")} />);
		expect(screen.getByRole("button")).toBeInTheDocument();
		expect(screen.getByText("test")).toBeInTheDocument();
	});

  test('Button snapshot', () => {
    const button = render(<Button title="test" type="primary" onClick={() => console.log("test Button")} />);
    expect(button).toMatchSnapshot();
  })
});
