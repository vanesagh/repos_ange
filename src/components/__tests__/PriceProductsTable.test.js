import { render, screen, within } from '@testing-library/react';
import PriceProductsTable from '../PriceProductsTable';
import userEvent from '@testing-library/user-event';


const products = [
    { id: 1, name: "name 1", price: 80.25, presentation: { name: 'Barra' }, description: " description 1" },
    { id: 2, name: "name 2", price: 100, presentation: { name: 'Pieza' }, description: " description 2" },
    { id: 3, name: "name 3", price: 120.00, presentation: { name: 'Paquete' }, description: " description 3" }
];



test(' renders PriceProductsTable component', () => {


    render(<PriceProductsTable products={products} />);

    // Check if product attributes are rendered
    products.forEach(product => {
        const productNameElement = screen.getByText(product.name);
        const productPresentationElement = screen.getByText(product.presentation.name);
        const productRow = productNameElement.closest('tr');
        const productPriceElement = within(productRow).getByText(/\$\d{1,6}(\.\d{1,2})? MXP/);

        expect(productPresentationElement).toBeInTheDocument();
        expect(productNameElement).toBeInTheDocument();
        expect(productPriceElement).toBeInTheDocument();


    });

});

test('expand and collapses table row', () => {
    render(<PriceProductsTable products={products} />);
    // Loop through the products
    products.forEach(product => {
        console.log(product)
        // Click the expand icon button for the first row
        const expandButton = screen.getByLabelText('expand row-' + product.id);
        console.log(expandButton)
        userEvent.click(expandButton);


    });


});
