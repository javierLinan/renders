import styles from "@/styles/Home.module.css";

export default function ItemList({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
}
