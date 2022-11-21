import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import facebook from "../public/img/facebook.svg";
import instagram from "../public/img/instagram.svg";
import twitter from "../public/img/twitter.svg";
import youtube from "../public/img/youtube.svg";
import styles from "../styles/Home.module.css";

// generate social media buttons in footer
export function SocialIcons(): JSX.Element {
  const dataSocial = [
    { alt: "facebook", src: facebook },
    { alt: "twitter", src: twitter },
    { alt: "youtube", src: youtube },
    { alt: "instagram", src: instagram },
  ];

  return (
    <div className={styles.social_icons}>
      {dataSocial.map((social) => (
        <a href="#" key={uuidv4()}>
          <Image
            alt={social.alt}
            className={styles.social_icons_img}
            src={social.src}
            style={{ width: "auto" }}
          />
        </a>
      ))}
    </div>
  );
}
