import React from "react";
import { fireEvent, getByText, render, screen, userEvent, getByRole } from "@testing-library/react";
import RepoNavBar from "../RepoNavBar";
import { useRouter } from "next/router";
import { waitFor } from "@testing-library/react";





jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

test('renders RepoNavBar component', async () => {
    const mockPush = jest.fn();
    const mockUseRouter = {
        push: mockPush,
        pathname: '/',
    };

    // Use the mocked useRouter
    useRouter.mockReturnValue(mockUseRouter);

    const { getByText, getByRole, queryAllByText } = render(<RepoNavBar />);

    // Test presence of specific elements
    const logoText = getByText('Repostería Ángeles');
    const pricesButtons = queryAllByText('Precios');
    const menuButton = getByRole('button', { name: 'open-menu' });

    expect(logoText).toBeInTheDocument();
    expect(pricesButtons.length).toBeGreaterThanOrEqual(2);
    expect(menuButton).toBeInTheDocument();


});

test('navigates to "listaprecios" page on button click', () => {
    const mockPush = jest.fn();
    const mockUseRouter = {
        push: mockPush,
        pathname: '/',

    };
    useRouter.mockReturnValue(mockUseRouter);
    const { getByTestId } = render(<RepoNavBar />);
    const desktopPricesButton = getByTestId('desktop-prices-button');
    const mobilePricesButton = getByTestId('mobile-prices-button');

    // Test the desktop version
    fireEvent.click(desktopPricesButton);
    expect(mockPush).toHaveBeenCalledWith('/listaprecios');

    // Reset the mockPush function
    mockPush.mockReset();


    // Test the mobile version
    fireEvent.click(mobilePricesButton);
    expect(mockPush).toHaveBeenCalledWith('/listaprecios');

});

