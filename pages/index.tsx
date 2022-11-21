/** next.js */
import Head from "next/head";
import Image from "next/image";
/** react */
import { useEffect, useState } from "react";
import Modal, { Styles } from "react-modal";
/** assets */
import close from "../public/img/close.svg";
import facebook from "../public/img/facebook.svg";
import instagram from "../public/img/instagram.svg";
import logo1 from "../public/img/live-sports-logo-1.webp";
import logo2 from "../public/img/live-sports-logo-2.webp";
import logo3 from "../public/img/live-sports-logo-3.svg";
import logo4 from "../public/img/live-sports-logo-4.webp";
import logo from "../public/img/logo.webp";
import logos from "../public/img/logos.webp";
import twitter from "../public/img/twitter.svg";
import youtube from "../public/img/youtube.svg";
/** styles */
import styles from "../styles/Home.module.css";

// main app
export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

  // open modal
  function openModal(): void {
    setIsOpen(true);

    const modalRefElem = document.querySelector<HTMLElement>(".modal");

    if (modalRefElem) {
      modalRefElem.style.display = "block";
    }
  }

  // closes modal
  function closeModal(): void {
    setIsOpen(false);

    const modalRefElem = document.querySelector<HTMLElement>(".modal");

    if (modalRefElem) {
      modalRefElem.style.display = "none";
    }
  }

  /** https://stackoverflow.com/a/57613476/11986604 */
  useEffect(() => {
    function handleEsc(event: { keyCode: number; }) {
      if (event.keyCode === 27) {
        closeModal();
      }
    }
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const customStyles = {
    content: {
      background: "rgba(0, 0, 0, 0.5)",
      height: "100%",
      left: 0,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 0,
    },
  } as Styles;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Watch TV shows and movies online. Stream TV episodes of Grey's Anatomy, This Is Us, Bob's Burgers, Brooklyn Nine-Nine, Empire, SNL, and popular movies on your favorite devices. Start your free trial now. Cancel anytime."
          key="desc"
        />
        <title>Stream TV and Movies Live and Online | Hulu</title>
      </Head>

      <div className={styles.body}>
        <header className={styles.header}>
          <nav>
            <button
              type="button"
              className={styles.btn_login}
              onClick={openModal}
            >
              Login
            </button>
          </nav>

          <section className={styles.header_content}>
            <h4>Try up to one month free</h4>
            {/** https://stackoverflow.com/a/73618982/11986604 */}
            <Image
              alt="Hulu logo"
              className={styles.logo}
              height="0"
              placeholder="blur"
              /** LCP */
              priority={true}
              src={logo}
              style={{ width: "256px", height: "auto", margin: "20px 0" }}
            />
            <div className={styles.header_text_1}>
              Watch thousands of TV shows and movies.
            </div>
            <div className={styles.header_text_2}>
              HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
            </div>
            <button type="button" className={styles.btn_cta}>
              Start Your Free Trial
            </button>
            <div className={styles.legal_text}>
              Free trial for new & eligible returning subscribers only.
            </div>
          </section>
        </header>

        <section className={styles.sub_header}>
          <Image
            alt="sub header logo"
            className={styles.sub_header_img}
            placeholder="blur"
            src={logos}
            style={{ width: "256", height: "auto" }}
            width="256"
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
              <div className={styles.cover_grid} />
              <div className={styles.cover_text}>
                <div className="sub-title">Past & Current Seasons</div>
                <h3>TV Shows</h3>
              </div>
            </div>
            <div className={styles.cover_2}>
              <div className={styles.cover_grid} />
              <div className={styles.cover_text}>
                <div className="sub-title">New & Classics</div>
                <h3>Movies</h3>
              </div>
            </div>
            <div className={styles.cover_3}>
              <div className={styles.cover_grid} />
              <div className={styles.cover_text}>
                <div className="sub-title">Groundbreaking</div>
                <h3>Hulu Originals</h3>
              </div>
            </div>
            <div className={styles.cover_4}>
              <div className={styles.cover_grid} />
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
            <a
              href="#"
              style={{
                color: "white",
              }}
            >
              View Channels in Your Area
            </a>
          </div>
        </section>

        <section className={styles.live_sports}>
          <div className={styles.live_sports_content}>
            <div className={styles.text_xl}>Live Sports</div>
            <div
              className={styles.live_sports_paragraph}
              style={{
                fontSize: "1.3rem",
              }}
            >
              Catch your games at home or on the go. Stream live games from
              major college and pro leagues including the NCAA®, NBA, NHL, NFL,
              and more.
            </div>

            <div className={styles.live_sports_logos}>
              <div>
                <Image
                  alt="cbs sports logo"
                  placeholder="blur"
                  src={logo1}
                  style={{ width: "40px", height: "auto" }}
                />
              </div>
              <div>
                <Image
                  alt="espn logo"
                  placeholder="blur"
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
                  alt="nbc golf logo"
                  placeholder="blur"
                  src={logo4}
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
            <div className={styles.footer_lists}>
              <ul>
                <li className={styles.list_head}>BROWSE</li>
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
                <li className={styles.list_head}>HELP</li>
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
                <li className={styles.list_head}>ABOUT US</li>
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
            <div className={styles.divider}></div>

            <div className={styles.social_icons}>
              <a href="#">
                <Image
                  alt="facebook"
                  className={styles.social_icons_img}
                  src={facebook}
                />
              </a>
              <a href="#">
                <Image
                  alt="twitter"
                  className={styles.social_icons_img}
                  src={twitter}
                />
              </a>
              <a href="#">
                <Image
                  alt="youtube"
                  className={styles.social_icons_img}
                  src={youtube}
                />
              </a>
              <a href="#">
                <Image
                  alt="instagram"
                  className={styles.social_icons_img}
                  src={instagram}
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        /** https://stackoverflow.com/a/50625073/11986604 */
        ariaHideApp={false}
      >
        <div className="modal" id="modal">
          <div className={styles.modal_box}>
            <div className={styles.modal_body}>
              <h3 className={styles.modal_body_h3}>Log In</h3>
              <form>
                <div className={styles.form_control}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div className={styles.form_control}>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <p>
                  <a href="#">Forgot your email or password</a>
                </p>
                <button type="button" className={styles.btn_dark}>
                  Log In
                </button>
              </form>
            </div>
            <div className={styles.modal_footer}>
              <p>Don&apos;t have an account?</p>
              <a
                href="#"
                style={{
                  lineHeight: "2rem",
                }}
              >
                Start your free trial
              </a>
            </div>
            <Image
              alt="close"
              className={styles.close}
              onClick={closeModal}
              src={close}
              style={{
                cursor: "pointer",
                position: "absolute",
                left: "0.5rem",
                bottom: "0.5rem",
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
