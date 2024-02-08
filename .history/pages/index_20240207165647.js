import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import layout from "@/styles/layout.module.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { useState } from "react";
import books from "@/data/books.json"
import Product from "@/components/Product";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setItem] = useState([...books]);

  const [cate, setCate] = useState("");

  let categorys = data.map(product => product.category);

  categorys = categorys.filter((value, index) => categorys.indexOf(value) === index);
  categorys.sort();

  console.log();


return (
  <>
    <Head>
      <title>BCIT Book Store</title>
      <meta name="description" content="All online pick-up orders are available at the Burnaby Campus Bookstore (SE2). Please allow 2-3 business days for order processing." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main className={`${styles.main} ${inter.className}`}>
      <div className={`${layout['row']}`}>
        <div className={`${layout['col-lg-4']} ${layout['col-md-4']} ${layout['col-lg-4']}}`}>
          <div className={styles['aside-containera']}>
            <button onClick={() => setCate("")} >All</button>
            {
              categorys && categorys.map((cate, index) => {
                return (
                  <>
                    <button key={index}  onClick={() => setCate(cate)} >{cate}</button>
                  </>
                )
              })
            }
          </div>
        </div>
        <div className={`${layout['col-lg-8']} ${layout['col-md-8']} ${layout['col-lg-8']}}`}>
          <div className={styles['main-content-containera']}>
            <div className={styles['top-menu']}>
              <Button name="Book Title" />
              <Button name="Up" />
              <Button name="Down" />
            </div>
            {
              data && data
              .filter((product) => (product.category == cate || cate == null))
              .sort((a,b) => (a.edition - b.edition))
              .map((product, index) => {
                  return (
                    <>
                      <Product
                        index={index}
                        code={product.course}
                        img={product.image}
                        bookName={product.title}
                      />
                    </>
                  )
              })
            }
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);
}
