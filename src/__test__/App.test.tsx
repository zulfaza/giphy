import { render, screen } from "../test/app-test-utils";
import App from "../App";

test("test component on home", async () => {
  render(<App />, { route: "/" });
  const signInBtn: HTMLAnchorElement = screen.getByText(/Search/i);
  expect(signInBtn).toBeInTheDocument();
});
