import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import List from "./List";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  const [hello, setHello] = useState<boolean>(false);

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <button onClick={() => setHello((prevState) => !prevState)}>
        Toggle Hello
      </button>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <List hello={hello} />
    </main>
  );
}
