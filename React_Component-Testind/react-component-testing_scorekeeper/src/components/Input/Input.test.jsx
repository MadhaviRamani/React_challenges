import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, vi} from "vitest"
import Input from ".";



test("renders a label and an input with the correct attributes", () => {
    render(<Input/>)
    expect(screen.getByRole("textbox")).toBeInTheDocument();
   const input = screen.getByRole("textbox");
   expect(input).toHaveAttribute("placeholder ", "Enter your name");
   expect(input).toHaveAttribute("name","name");
});

test("calls callback on every user input", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
     render(<input onChange={onChange}/>);
     const input= screen.getByRole("textbox");
     await user.type(input,"abc");
     expect(onchange).toHaveBeenCalledTimes(3);
});
