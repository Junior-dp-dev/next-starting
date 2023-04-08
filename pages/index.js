import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
        <meta name="keywords" content="Roupas, Calçados, Boné" />
        <meta name="description" content="Encontre o melhor para você" />
      </Head>
      <div>
        <h1 className={styles.title}>Página Inicial</h1>
        <Image src="/images/city.jpg" alt="Cidade a noite" width={400} height={600} />
      </div>
    </>
  );
}
