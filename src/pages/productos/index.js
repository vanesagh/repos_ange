import RepoNavBar from "@/components/RepoNavBar";
import PageDescription from "@/components/PageDescription";
import styles from "@/styles/Home.module.css";

export default function Products({ }) {
    return (
        <>
            <RepoNavBar />
            <main className={`${styles.main}`}>
                <PageDescription title="Nuestros productos" />

            </main>
        </>
    )
}