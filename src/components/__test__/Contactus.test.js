import Contactus from "../Contactus"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

test("tetsing the contactus page",()=>{
    render(<Contactus/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

});

test("tetsing the button",()=>{
    render(<Contactus/>);

    const heading = screen.getByText("Submit");
    expect(heading).toBeInTheDocument();

});

test("tetsing the input fileds",()=>{
    render(<Contactus/>);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);

});