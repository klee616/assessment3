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

  const [sortingString, setSortingString] = useState("");

  const changeSortingString = (sorting) => {
    setSortingString(sorting);
  };



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
          <div className={`${layout['col-lg-3']} ${layout['col-md-3']} ${layout['col-sm-12']}}`}>
            <div className={styles['aside-containera']}>
              <button className={styles['aside-btn']} onClick={() => { setCate("ALL"); setSortingString("") }} >ALL</button>
              <button className={styles['aside-btn']} onClick={() => { setCate("COMM"); setSortingString("") }} >Communication</button>
              <button className={styles['aside-btn']} onClick={() => { setCate("COMP"); setSortingString("") }} >Computer Science</button>
              <button className={styles['aside-btn']} onClick={() => { setCate("MKTG"); setSortingString("") }} >Marketing</button>
              <button className={styles['aside-btn']} onClick={() => { setCate("MATH"); setSortingString("") }} >MATH</button>

            </div>
          </div>
          <div className={`${layout['col-lg-9']} ${layout['col-md-9']} ${layout['col-sm-12']}`}>
            <div  className={styles['main-content-containera']}>

              {
                (cate != "") ? (<>
                  <div className={styles['top-menu']}>
                    <Button key={0} name="Book Title" changeSortingString={changeSortingString} value="TITLE" />
                    <Button key={1} name="&#8593;" changeSortingString={changeSortingString} value="UP" />
                    <Button key={2} name="&#8595;" changeSortingString={changeSortingString} value="DOWN" />
                  </div>
                </>) : (<></>)
              }


              {
                data && data
                  .filter((product) => (product.course.substring(0, 4) == cate || cate == "ALL"))
                  .sort((a, b) => { return (sortingString == "TITLE") ? (a.title < b.title) ? -1 : 1 : (sortingString == "UP") ? a.edition - b.edition : (sortingString == "DOWN") ? b.edition - a.edition : 0 })
                  .map((product, index) => {
                    return (
                      <>
                        <Product
                          key={index}
                          code={product.course}
                          img={product.image}
                          bookName={product.title}
                          edition={product.edition}
                          authors={product.authors}
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
