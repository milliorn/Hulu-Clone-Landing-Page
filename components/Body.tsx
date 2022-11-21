import { MouseEventHandler } from "react";
import styles from "../styles/Home.module.css";
import { Categories } from "./Categories";
import { ContactUs } from "./ContactUs";
import { Header } from "./Header";
import { LiveSports } from "./LiveSports";
import { LiveTv } from "./LiveTv";
import { SubHeader } from "./SubHeader";

// main body for index
export function Body(props: {
  openModal: MouseEventHandler<HTMLButtonElement> | undefined;
}): JSX.Element {
  return (
    <div className={styles.body}>
      <Header openModal={props.openModal} />
      <SubHeader />
      <Categories />
      <LiveTv />
      <LiveSports />
      <ContactUs />
    </div>
  );
}
