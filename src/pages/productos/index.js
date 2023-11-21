import RepoNavBar from "@/components/RepoNavBar";
import PageDescription from "@/components/PageDescription";
import ImageProductsList from "@/components/ImageProductsList";
import styles from "@/styles/Home.module.css";
import { getProducts } from "@/api/products";

export default function Products({ products }) {
    return (
        <>
            <RepoNavBar />
            <main className={`${styles.main}`}>
                <PageDescription title="Nuestros productos" />
                <ImageProductsList products={products} />


            </main>
        </>
    )
}

export async function getStaticProps() {
    const data = await getProducts();

    const groupedProducts = data.allProducts.reduce((acc, product) => {
        const categoryName = product.category.name;
        // Create an array for the category if it doesn't exist
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }

        // Add the item to the category
        acc[categoryName].push(product);
        return acc;


    }, {});
    //console.log(groupedProducts);


    return {
        props: {
            products: groupedProducts
        }

    }

}