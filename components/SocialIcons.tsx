import Image from "next/image";
import facebook from "../public/img/facebook.svg";
import instagram from "../public/img/instagram.svg";
import twitter from "../public/img/twitter.svg";
import youtube from "../public/img/youtube.svg";
import styles from "../styles/Home.module.css";

export function SocialIcons(): JSX.Element {
  const dataSocial = [
    { alt: "facebook", src: facebook },
    { alt: "twitter", src: twitter },
    { alt: "youtube", src: youtube },
    { alt: "instagram", src: instagram },
  ];

  return (
    <div className={styles.social_icons}>
      {dataSocial.map((social, i) => (
        <a href="#" key={i}>
          <Image
            alt={social.alt}
            className={styles.social_icons_img}
            src={social.src}
            style={{width: "auto"}}
          />
        </a>
      ))}
    </div>
  );
}
