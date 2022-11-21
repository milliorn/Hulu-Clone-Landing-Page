// next.js
import Image from "next/image";
// assets
import logo1 from "../public/img/live-sports-logo-1.webp";
import logo2 from "../public/img/live-sports-logo-2.webp";
import logo3 from "../public/img/live-sports-logo-3.svg";
import logo4 from "../public/img/live-sports-logo-4.webp";
// css
import styles from "../styles/Home.module.css";

// live sports in index
export function LiveSports(): JSX.Element {
  return (
    <section className={styles.live_sports}>
      <div className={styles.live_sports_content}>
        <div className={styles.text_xl}>Live Sports</div>
        <div
          className={styles.live_sports_paragraph}
          style={{
            fontSize: "1.3rem",
          }}
        >
          Catch your games at home or on the go. Stream live games from major
          college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.
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
          Live TV plan required. Regional restrictions, blackouts and additional
          terms apply. See details
        </div>
      </div>
    </section>
  );
}
