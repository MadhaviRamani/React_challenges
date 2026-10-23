import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from ".";

import { expect, vi } from "vitest";

test("renders with two buttons 'Play' and 'History'", () => {
  render(<Navigation />);
  expect(screen.getByRole("button", { name: /play/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /history/i })).toBeInTheDocument();
});

test("calls the callback with the name of the view when a button is clicked", async () => {
  const user = userEvent.setup();
  const onChangeView = vi.fn();
  render(<Navigation onChangeView={onChangeView} />);

  await user.click(screen.getByRole("button", { name: /history/i }));
  
  expect(onChangeView).toHaveBeenCalledWith("history");
});
