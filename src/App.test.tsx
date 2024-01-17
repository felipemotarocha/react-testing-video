import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("App Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render App with hello message", () => {
    render(<App />);
    screen.getByText("Hello world!");
  });

  it("should change message on button click", () => {
    render(<App />);
    screen.getByText("Let's learn more about testing in React");

    const button = screen.getByText(/change message/i);
    fireEvent.click(button);
    screen.getByText(/new message!/i);

    const oldMessage = screen.queryByText(
      "Let's learn more about testing in React"
    );

    // two ways to verify is the oldMessage is in the page or not
    expect(oldMessage).toBeNull(); // first one (my favorite)
    // expect(oldMessage).not.toBeInTheDocument(); // second onde
  });
});

export default {};
