import { render, screen, waitFor } from '@testing-library/react';
import PriceList, { getStaticProps } from '../listaprecios';
import { getProducts } from "@/api/products";




jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: '/',
    }),
}));

const fakeProducts = [
    { id: 1, name: "Product 1", price: 80.25, presentation: { name: 'Barra' }, description: " description 1" },
    { id: 2, name: "Product 2", price: 100, presentation: { name: 'Pieza' }, description: " description 2" },
    { id: 3, name: "Product 3", price: 120.00, presentation: { name: 'Paquete' }, description: " description 3" }
];
jest.mock('../../api/products', () => ({
    getProducts: jest.fn(),
}));



test('renders without errors', () => {
    render(<PriceList products={[]} />);

    // Add assertions
    expect(screen.getByText('Lista de precios')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();

});


test('fetches products data via getStaticProps', async () => {
    // Mock the data returned by 'getProducts'
    const mockData = {
        allProducts: fakeProducts,
    }
    // Mock the 'getProducts' function to return the mock data
    getProducts.mockResolvedValue(mockData);

    // Call getStaticProps to obtain the prop object
    const props = await getStaticProps();

    // Assert that the props object contains the expected data structure
    expect(props).toEqual({
        props: {
            products: mockData.allProducts,
        },
    });

});