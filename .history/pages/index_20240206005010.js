import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import layout from "@/styles/layout.module.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
              <button>All</button>
              <button>Communications</button>
              <button>Computer Science</button>
              <button>Marketing</button>
              <button>Math</button>
            </div>
          </div>
          <div className={`${layout['col-lg-8']} ${layout['col-md-8']} ${layout['col-lg-8']}}`}>
            <div className={styles['main-content-containera']}>
              <div className={styles['top-menu']}>
                <button>Book Title</button>
                <button>Up</button>
                <button>Down</button>
              </div>
              <div className={`${layout['col-lg-3']} ${layout['col-md-3']} ${layout['col-lg-3']}}`}>
                Card 1
              </div>
              <div className={`${layout['col-lg-3']} ${layout['col-md-3']} ${layout['col-lg-3']}}`}>
                Card 2
              </div>
              <div className={`${layout['col-lg-3']} ${layout['col-md-3']} ${layout['col-lg-3']}}`}>
                Card 3
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
