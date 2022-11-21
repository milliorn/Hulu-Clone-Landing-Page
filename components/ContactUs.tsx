// next.js
import Image from "next/image";
// assets
import facebook from "../public/img/facebook.svg";
import instagram from "../public/img/instagram.svg";
import twitter from "../public/img/twitter.svg";
import youtube from "../public/img/youtube.svg";
import styles from "../styles/Home.module.css";

// footer for index
export function ContactUs(): JSX.Element {
  return (
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
  );
}
