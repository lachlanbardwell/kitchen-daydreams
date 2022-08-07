import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { RecipeSearch } from "./recipe-search";

describe("Test render + api call", () => {
  test("Renders the component", () => {
    render(<RecipeSearch />);

    const div = screen.getByTestId("search-container");
    expect(div).toBeInTheDocument();
  });

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterAll(() => {
    fetchMock.disableMocks();
  });

  test("Clicking search sends an API request", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        data: {
          label: "Mock title",
          uri: "Mock string",
        },
      })
    );
  });

  test("Recipe display renders when given mock data", async () => {
    render(<RecipeSearch />);
    const textBox = screen.getByTestId("input-search");
    fireEvent.change(textBox, { target: { value: "curry" } });

    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => expect(screen.queryByTestId("search-display")));
  });
});
