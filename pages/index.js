import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'
import Footer from '../components/Footer'
export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to V-Pizza</title>
        <meta name="description" content="Best Pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}
export const getServerSideProps =async()=>{
  const res=await axios.get('http://localhost:3000/api/products');
  return{
    props:{
      pizzaList:res.data,
    }
  }
}
