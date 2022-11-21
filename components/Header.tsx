import Image from "next/image";
import { MouseEventHandler } from "react";
import logo from "../public/img/logo.webp";
import styles from "../styles/Home.module.css";

// header for index
export function Header(props: {
  openModal: MouseEventHandler<HTMLButtonElement> | undefined;
}): JSX.Element {
  return (
    <header className={styles.header}>
      <nav>
        <button
          type="button"
          className={styles.btn_login}
          onClick={props.openModal} // skipcq: JS-0411
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
          priority
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
  );
}
