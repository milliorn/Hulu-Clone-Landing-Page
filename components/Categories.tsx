import { v4 as uuidv4 } from "uuid";
import styles from "../styles/Home.module.css";

// categories found in index
export function Categories(): JSX.Element {
  const dataCategory = [
    { style: styles.cover_1, sub: "Past & Current Seasons", h3: "TV Shows" },
    { style: styles.cover_2, sub: "New & Classics", h3: "Movies" },
    { style: styles.cover_3, sub: "Groundbreaking", h3: "Hulu Originals" },
    { style: styles.cover_4, sub: "Add-On", h3: "Premiums" },
  ];

  return (
    <section className={styles.categories}>
      <h4>Included in all plans</h4>
      <div className={styles.text_xl}>All The TV You Love</div>
      <div className={styles.sub_text}>
        Stream full seasons of exclusive series, current-season episodes, hit
        movies, Hulu Originals, kids shows, and more.
      </div>

      <div className={styles.covers}>
        {dataCategory.map((category) => (
          <div key={uuidv4()} className={category.style}>
            <div className={styles.cover_grid} />
            <div className={styles.cover_text}>
              <div className="sub-title">{category.sub}</div>
              <h3>{category.h3}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
