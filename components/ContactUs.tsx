import styles from "../styles/Home.module.css";
import { FooterLists } from "./FooterLists";
import { SocialIcons } from "./SocialIcons";

// footer for index
export function ContactUs(): JSX.Element {
  return (
    <footer>
      <div className={styles.footer_container}>
        <FooterLists />
        <div className={styles.divider} />
        <SocialIcons />
      </div>
    </footer>
  );
}
