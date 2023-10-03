const { render } = require("@testing-library/react");
import Products from "@/pages/productos";

jest.mock('next/router', () => ({
    useRouter: () => ({
        pathname: "/"
    })
}));

test('renders without errors', () => {
    render(<Products products={[]} />);
});