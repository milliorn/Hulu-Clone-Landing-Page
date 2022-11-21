import styles from "../styles/Home.module.css";

// live tv section in index
export function LiveTv(): JSX.Element {
  return (
    <section className={styles.live}>
      <div className={styles.live_border}>
        <h4>Hulu + Live TV</h4>
        <div className={styles.text_xl}>Live TV Makes It Better</div>
        <div className={styles.sub_text}>
          Make the switch from cable. Get 75+ top channels with your favorite
          live sports, news, and events - plus the entire Hulu streaming
          library.
        </div>
        <div className={styles.legal_text}>
          Live TV plan required. Regional restrictions, blackouts and additional
          terms apply. See details
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
  );
}
