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
    return {
        props: {
            products: data.allProducts
        }

    }

}