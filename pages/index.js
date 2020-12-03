import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{
        backgroundColor: "red"
    }}>
      <HeaderBar/>
      Landing
      <Footer/>
    </div>
  )
}
