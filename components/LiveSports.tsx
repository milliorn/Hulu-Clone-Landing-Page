import styles from "../styles/Home.module.css";
import { LiveSportsLogos } from "./LiveSportsLogos";

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

        <LiveSportsLogos />

        <div className={styles.legal_text}>
          Live TV plan required. Regional restrictions, blackouts and additional
          terms apply. See details
        </div>
      </div>
    </section>
  );
}
