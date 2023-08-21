import React from "react";
import { render } from "@testing-library/react";
import PageDescription from "../PageDescription";

test('renders correct page name in PageDescription component', () => {
    const pageName = 'Bienvenidos';
    const { getByText } = render(<PageDescription title={pageName} />);
    const descriptionText = getByText(`${pageName}`);
    expect(descriptionText).toBeInTheDocument();

});