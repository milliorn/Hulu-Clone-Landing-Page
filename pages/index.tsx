import Head from "next/head";
import Image from "next/image";
import logo from "../public/img/logo.png";
import logos from "../public/img/logos.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stream TV and Movies Live and Online | Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body}>
        <header className={styles.header}>
          <nav>
            <ul>
              <li>
                <button className={styles.btn_login}>Log In</button>
              </li>
            </ul>
          </nav>

          <div className={styles.header_content}>
            <h4>Try up to one month free</h4>
            {/** https://stackoverflow.com/a/73618982/11986604 */}
            <Image
              src={logo}
              alt="Hulu logo"
              className="logo"
              height="0"
              width="270"
              style={{ width: "auto", height: "auto", margin: "20px 0" }}
            />
            <div className={styles.header_text_1}>
              Watch thousands of TV shows and movies.
            </div>
            <div className={styles.header_text_2}>
              HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
            </div>
            <button className={styles.btn_cta}>Start Your Free Trial</button>
            <div className={styles.legal_text}>
              Free trial for new & eligible returning subscribers only.
            </div>
          </div>
        </header>

        <section className={styles.sub_header}>
          <Image
            src={logos}
            alt="sub header logo"
            height="0"
            width="250"
            style={{ width: "auto", height: "auto", margin: "auto" }}
          />
          <div>
            <h4>Bundle with any Hulu plan & save</h4>
            <h3>Get Hulu, Disney+ , and ESPN+.</h3>
            <a href="#" className={styles.sub_link}>
              Details
            </a>
          </div>
          <div>
            <a href="#" className={styles.btn_outline}>
              Get Bundle
            </a>

            <a href="#" className={styles.sub_link}>
              Terms apply
            </a>
          </div>
        </section>

        <section className={styles.categories}>
          <h4>Included in all plans</h4>
          <div className={styles.text_xl}>All The TV You Love</div>
          <div className={styles.sub_text}>
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </div>

          <div className={styles.covers}>
            <div className={styles.cover_1}>
              <div className={styles.cover_grid}></div>
              <div className={styles.cover_text}>
                <div className="sub-title">Past & Current Seasons</div>
                <h3>TV Shows</h3>
              </div>
            </div>
            <div className={styles.cover_2}>
              <div className={styles.cover_grid}></div>
              <div className={styles.cover_text}>
                <div className="sub-title">New & Classics</div>
                <h3>Movies</h3>
              </div>
            </div>
            <div className={styles.cover_3}>
              <div className={styles.cover_grid}></div>
              <div className={styles.cover_text}>
                <div className="sub-title">Groundbreaking</div>
                <h3>Hulu Originals</h3>
              </div>
            </div>
            <div className={styles.cover_4}>
              <div className={styles.cover_grid}></div>
              <div className={styles.cover_text}>
                <div className="sub-title">Add-On</div>
                <h3>Premiums</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
