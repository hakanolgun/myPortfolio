import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/homePageComps/navbar/Navbar";
import HomeCenter from "../components/homePageComps/homecenter/HomeCenter";
import HomeLinks from "../components/homePageComps/homeLinks/HomeLinks";
import HomeFooter from "../components/homePageComps/homeFooter/HomeFooter";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hakan Olgun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HomeCenter />
      <HomeLinks />
      <HomeFooter />
    </div>
  );
}
