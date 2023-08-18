import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import PageDescription from '../components/PageDescription';
import RepoNavBar from '../components/RepoNavBar';
import { Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ResponsiveContainer = styled(Container)(({ theme }) => ({
  width: '95vw',
  padding: '1rem',
  textAlign: 'left',
  backgroundColor: '#C78283',
  border: 'none',
  boxShadow: 'none',
  margin: '0',
  [theme.breakpoints.up('md')]: {
    width: '90vw',
    textAlign: 'justify',
    padding: '2rem',
  }

}));


export default function Home({ products }) {

  return (

    <>

      <Head>
        <title>Repostería Angeles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RepoNavBar />
      <main className={`${styles.main}`}>
        <PageDescription title="Bienvenidos" />
        <ResponsiveContainer maxWidth="md" >
          <Typography variant='h4' className={styles.indexTitle} sx={{ marginBottom: 6, color: '#212738', fontFamily: 'Borel, cursive' }} >
            Repostería Ángeles Fina y Artesanal
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3, color: '#212738', fontSize: '20px' }}>
            Sumérgete en un mundo de sabores y texturas exquisitas, donde cada bocado es una
            experiencia celestial. En <b>Repostería Ángeles</b>, no solo creamos panes y pasteles, sino que damos vida a obras maestras
            comestibles que deleitan los sentidos y alimentan el alma.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3, color: '#212738', fontSize: '20px' }}>

            Nuestra pasión por la repostería se refleja en cada detalle,
            desde la selección de ingredientes hasta la meticulosa elaboración
            a mano. Cada pieza que sale de nuestro horno es un testimonio de dedicación y
            amor por el arte de crear panes memorables. Cada masa es amasada con cariño
            para brindarte productos deliciosos.

          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2, color: '#212738', fontSize: '20px' }}>

            En <b>Repostería Ángeles</b>, nos enorgullecemos de ser más que una simple repostería.
            Somos una experiencia que abraza la creatividad, la pasión y la excelencia
            en cada detalle. Navega por nuestro catálogo y descubre el sabor de la autenticidad
            en cada bocado. Únete a nosotros en este viaje culinario donde los sabores se entrelazan
            con los sueños y los pasteles se convierten en recuerdos que duran para siempre.
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2, color: '#212738', fontSize: '20px' }}>
            Bienvenidos a <b>Repostería Ángeles</b> donde cada creación es una pedacito de cielo en la tierra.
          </Typography>

        </ResponsiveContainer>






      </main >
    </>
  )
}
