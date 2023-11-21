import ImageProductsList from "../ImageProductsList";
import { render, screen } from "@testing-library/react";

const products = [
    { id: 1, name: "name 1", price: 80.25, presentation: { name: 'Barra' }, description: " description 1", category: "category 1" },
    { id: 2, name: "name 2", price: 100.00, presentation: { name: 'Pieza' }, description: " description 2", category: "category 2" },
    { id: 3, name: "name 3", price: 120.00, presentation: { name: 'Paquete' }, description: " description 3", category: "category 3" }
];

test('renders component without errors', () => {
    render(<ImageProductsList products={products} />);
    // Check if products attributes are rendered
    products.forEach(product => {
        const productNameElement = screen.getByText(product.name);
        //const productPresentationElement = screen.getByText(product.presentation.name);
        const productPriceElement = screen.getByText(`$${product.price} MXP - ${product.presentation.name}`);

        //expect(productPresentationElement).toBeInTheDocument();
        expect(productNameElement).toBeInTheDocument();
        expect(productPriceElement).toBeInTheDocument();
    });
});