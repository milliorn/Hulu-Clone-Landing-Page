// next.js
import Image from "next/image";
// assets
import logos from "../public/img/logos.webp";
import styles from "../styles/Home.module.css";

// subheading for index
export function SubHeader(): JSX.Element {
  return (
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
  );
}
