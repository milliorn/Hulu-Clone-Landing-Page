// next.js
import Head from "next/head";
// react
import { useEffect, useState } from "react";
// components
import { Body } from "../components/Body";
import { LoginModal } from "../components/LoginModal";
// css
import styles from "../styles/Home.module.css";

// main app
export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);

  // open modal
  function openModal(): void {
    setIsOpen(true);

    const modalRefElem = document.querySelector<HTMLElement>(".modal");

    if (modalRefElem) {
      modalRefElem.style.display = "block";
    }
  }

  // closes modal
  function closeModal(): void {
    setIsOpen(false);

    const modalRefElem = document.querySelector<HTMLElement>(".modal");

    if (modalRefElem) {
      modalRefElem.style.display = "none";
    }
  }

  //  https://stackoverflow.com/a/57613476/11986604
  useEffect(() => {
    // detects esc key pressed and closes modal
    function handleEsc(event: { keyCode: number }): void {
      if (event.keyCode === 27) {
        closeModal();
      }
    }
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Watch TV shows and movies online. Stream TV episodes of Grey's Anatomy, This Is Us, Bob's Burgers, Brooklyn Nine-Nine, Empire, SNL, and popular movies on your favorite devices. Start your free trial now. Cancel anytime."
          key="desc"
        />
        <title>Stream TV and Movies Live and Online | Hulu</title>
      </Head>
      <Body openModal={openModal} />

      <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}
