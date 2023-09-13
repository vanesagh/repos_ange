import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RepoNavBar from "../RepoNavBar";
import { useRouter } from "next/router";
import mediaQuery from 'css-mediaquery';
import userEvent from '@testing-library/user-event';
import { useState } from "react";





function createMatchMedia(width) {
    return (query) => ({
        matches: mediaQuery.match(query, {
            width,
        }),
        addListener: () => { },
        removeListener: () => { },
    });
}


jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

test('renders RepoNavBar component for desktop', () => {
    const mockPush = jest.fn();
    const mockUseRouter = {
        push: mockPush,
        pathname: '/',
    };

    // Use the mocked useRouter
    useRouter.mockReturnValue(mockUseRouter);

    render(<RepoNavBar />);

    // Test presence of specific elements for desktop
    const logoText = screen.getByText('REPOSTERÍA ÁNGELES');
    const priceButton = screen.getByText('Precios');
    const desktopPricesButton = screen.getByTestId('desktop-prices-button');
    expect(logoText).toBeInTheDocument();
    expect(priceButton).toBeInTheDocument();
    expect(desktopPricesButton).toBeInTheDocument();

    const openMenuButton = screen.queryByLabelText('open-menu');
    //Check that menu is not visible for desktop
    expect(openMenuButton).toBeNull();

    // 'navigates to "listaprecios" page on button click'
    // Test the desktop version
    fireEvent.click(desktopPricesButton);
    expect(mockPush).toHaveBeenCalledWith('/listaprecios');

    // Reset the mockPush function
    mockPush.mockReset();


});

test('renders RepoNavBar component for mobile', () => {

    window.matchMedia = createMatchMedia(600);
    render(<RepoNavBar />);

    // Test presence of specific elements for desktop
    const logoText = screen.getByText('Repostería Ángeles');
    const openMenuButton = screen.getByLabelText('open-menu')
    expect(logoText).toBeInTheDocument();
    expect(openMenuButton).toBeInTheDocument();



});





test('Clicking Menu button for mobile', async () => {
    const mockPush = jest.fn();
    const mockUseRouter = {
        push: mockPush,
        pathname: '/',

    };
    useRouter.mockReturnValue(mockUseRouter);
    window.matchMedia = createMatchMedia(600);
    render(<RepoNavBar />);
    const menuButton = screen.getByLabelText('open-menu');
    expect(menuButton).toBeVisible();
    userEvent.click(menuButton);

    await waitFor(async () => {
        const menuItem = screen.getByTestId('menu-item');
        expect(menuItem).toBeVisible();
        const mobilePricesButton = screen.getByTestId('mobile-prices-button');
        expect(mobilePricesButton).toBeInTheDocument();
        // 'navigates to "listaprecios" page on button click'

        fireEvent.click(mobilePricesButton);
        expect(mockPush).toHaveBeenCalledWith('/listaprecios');

        // Reset the mockPush function
        mockPush.mockReset();

    });
});



