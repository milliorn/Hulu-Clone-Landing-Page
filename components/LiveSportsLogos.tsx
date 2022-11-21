import Image from "next/image";
import logo1 from "../public/img/live-sports-logo-1.webp";
import logo2 from "../public/img/live-sports-logo-2.webp";
import logo3 from "../public/img/live-sports-logo-3.svg";
import logo4 from "../public/img/live-sports-logo-4.webp";
import styles from "../styles/Home.module.css";

export function LiveSportsLogos(): JSX.Element {
  const logoData = [
    { alt: "cbs logo", src: logo1 },
    { alt: "espn logo", src: logo2 },
    { alt: "nbc logo", src: logo3 },
    { alt: "nbc golf logo", src: logo4 },
  ];

  return (
    <div className={styles.live_sports_logos}>
      {logoData.map((logo, i) => (
        <div key={i}>
          <Image
            alt={logo.alt}
            src={logo.src}
            style={{ width: "40px", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
