import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Box } from '../components/basecomponents/Box';
import { getProducts } from '../components/common/getProducts';
import ProductsList from '../components/ProductsList';
import { getUser } from '../components/common/getUser';
import { useUserContext } from '../context/UserContext';
import { useProductsContext } from '../context/ProductsContext';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Grid } from '../components/basecomponents/Grid';
import Header from '../components/Header';
import WavesPattern from '../components/WavesPattern';
import WalkThrough from '../components/WalkThrough';

export const getStaticProps = async () => {
  const user = await getUser();
  const products = await getProducts();
  const productsSSR = products;
  const categories = productsSSR.map(product => product.category);
  const categoriesSSR = [... new Set(categories)];
 
  return {
    props: {
      productsSSR,
      categoriesSSR,
      user,
    }
  }
}

const Main = styled(Grid)`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`;

export default function Home({ user, productsSSR, categoriesSSR }) {
  const { setPoints, setName } = useUserContext();
  const { setCategories, products, setProducts, setAllProducts } = useProductsContext();
  useEffect(() => {
    setPoints(user.points);
    setProducts(productsSSR);
    setName(user.name);
    setCategories(categoriesSSR);
    setAllProducts(productsSSR);

  }, []);
  
  return (
    <>
      <Head>
        <title>Tech Zone</title>
        <meta name="description" content="Here you'll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Main
        as="main"
      >
        <WavesPattern>
        </WavesPattern>
        <Navbar>
        </Navbar>
          <Header></Header>
          <WalkThrough></WalkThrough>
            {products && <ProductsList></ProductsList>}
          <Footer></Footer>
      </Main>
    </>
  )
}
