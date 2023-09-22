import { render, screen } from '@testing-library/react';
import Home from '../index';


jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '/',
    }),
}));

test('Home component renders without errors', () => {
    render(<Home />);
    // You can add more specific assertions if needed
    expect(screen.getByText('Bienvenidos')).toBeInTheDocument();
    expect(screen.getByText('Repostería Ángeles Fina y Artesanal')).toBeInTheDocument();


});