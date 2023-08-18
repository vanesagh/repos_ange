import RepoNavBar from "@/components/RepoNavBar";
import PriceProductsTable from "@/components/PriceProductsTable";
import PageDescription from "@/components/PageDescription";
import styles from "@/styles/Home.module.css";
import { getProducts } from "@/api/products";




export default function PriceList({ products }) {

    return (
        <>
            <RepoNavBar />
            <main className={`${styles.main}`}>
                <PageDescription title="Lista de precios" />
                <PriceProductsTable products={products} />


            </main>




        </>
    );

}


export async function getStaticProps() {
    const data = await getProducts();

    return {
        props: {
            products: data.allProducts
        }
    }
}