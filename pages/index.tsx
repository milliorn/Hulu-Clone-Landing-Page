/** next.js */
import Head from "next/head";
import Image from "next/image";
/** images */
import facebook from "../public/img/facebook.svg";
import instagram from "../public/img/instagram.svg";
import logo1 from "../public/img/live-sports-logo-1.png";
import logo2 from "../public/img/live-sports-logo-2.png";
import logo3 from "../public/img/live-sports-logo-3.svg";
import logo4 from "../public/img/live-sports-logo-4.png";
import logo from "../public/img/logo.png";
import logos from "../public/img/logos.png";
import twitter from "../public/img/twitter.svg";
import youtube from "../public/img/youtube.svg";
/** css */
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

        <section className={styles.live}>
          <div className={styles.live_border}>
            <h4>Hulu + Live TV</h4>
            <div className={styles.text_xl}>Live TV Makes It Better</div>
            <div className={styles.sub_text}>
              Make the switch from cable. Get 75+ top channels with your
              favorite live sports, news, and events - plus the entire Hulu
              streaming library.
            </div>
            <div className={styles.legal_text}>
              Live TV plan required. Regional restrictions, blackouts and
              additional terms apply. See details
            </div>
            <a href="#">View Channels in Your Area</a>
          </div>
        </section>

        <section className={styles.live_sports}>
          <div className={styles.live_sports_content}>
            <div className={styles.text_xl}>Live Sports</div>
            <div className="sub-text">
              Catch your games at home or on the go. Stream live games from
              major college and pro leagues including the NCAA®, NBA, NHL, NFL,
              and more.
            </div>

            <div className={styles.live_sports_logos}>
              <div>
                <Image
                  alt="cbs sports logo"
                  src={logo1}
                  style={{ width: "40px", height: "auto" }}
                />
              </div>
              <div>
                <Image
                  alt="espn logo"
                  src={logo2}
                  style={{ width: "40px", height: "auto" }}
                />
              </div>
              <div>
                <Image
                  alt="nbc logo"
                  src={logo3}
                  style={{ width: "40px", height: "auto" }}
                />
              </div>
              <div>
                <Image
                  src={logo4}
                  alt="nbc golf logo"
                  style={{ width: "40px", height: "auto" }}
                />
              </div>
            </div>
            <div className={styles.legal_text}>
              Live TV plan required. Regional restrictions, blackouts and
              additional terms apply. See details
            </div>
          </div>
        </section>

        <footer>
          <div className={styles.footer_container}>
            <div className="footer-lists">
              <ul>
                <li className="list-head">BROWSE</li>
                <li>
                  <a href="#">Streaming Library</a>
                </li>
                <li>
                  <a href="#">Live TV</a>
                </li>
                <li>
                  <a href="#">Live News</a>
                </li>
                <li>
                  <a href="#">Live Sports</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">TV Shows</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Originals</a>
                </li>
                <li>
                  <a href="#">Networks</a>
                </li>
                <li>
                  <a href="#">Kids</a>
                </li>
                <li>
                  <a href="#">FX on Hulu</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Hulu, Disney+, and ESPN+</a>
                </li>
                <li>
                  <a href="#">Disney Bundle</a>
                </li>
                <li>
                  <a href="#">HBO Max</a>
                </li>
                <li>
                  <a href="#">Cinimax</a>
                </li>
                <li>
                  <a href="#">Showtime</a>
                </li>
                <li>
                  <a href="#">STARZ</a>
                </li>
              </ul>
              <ul>
                <li className="list-head">HELP</li>
                <li>
                  <a href="#">Account & Billing</a>
                </li>
                <li>
                  <a href="#">Plans & Pricing</a>
                </li>
                <li>
                  <a href="#">Supported Devices</a>
                </li>
                <li>
                  <a href="#">Accesibility</a>
                </li>
              </ul>
              <ul>
                <li className="list-head">ABOUT US</li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="divider"></div>

            <div className="social-icons">
              <a href="#">
                <Image src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <Image src={twitter} alt="twitter" />
              </a>
              <a href="#">
                <Image src={youtube} alt="youtube" />
              </a>
              <a href="#">
                <Image src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
