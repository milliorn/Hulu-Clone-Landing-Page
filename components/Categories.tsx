import styles from "../styles/Home.module.css";

// categories found in index
export function Categories(): JSX.Element {
  return (
    <section className={styles.categories}>
      <h4>Included in all plans</h4>
      <div className={styles.text_xl}>All The TV You Love</div>
      <div className={styles.sub_text}>
        Stream full seasons of exclusive series, current-season episodes, hit
        movies, Hulu Originals, kids shows, and more.
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
  );
}
