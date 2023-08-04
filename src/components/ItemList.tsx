import HelloContext from "@/context/HelloContext";
import styles from "@/styles/Home.module.css";
import { useContext } from "react";

export default function ItemList({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  const context = useContext(HelloContext);

  console.log("ItemList");

  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {title} {context.hello ? "hello" : ""}
      </h2>
      <p>{description}</p>
    </a>
  );
}
