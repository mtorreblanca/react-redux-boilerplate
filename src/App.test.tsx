import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./App";

const mockStore = configureMockStore([]);

describe("renders learn react link", () => {
  it("Render App", () => {
    render(
      <Provider store={mockStore()}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
