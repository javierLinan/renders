import styles from "@/styles/Home.module.css";

export default function ItemList({
  href,
  title,
  description,
  hello,
}: {
  href: string;
  title: string;
  description: string;
  hello: boolean;
}) {
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {title} {hello ? "hello" : ""}
      </h2>
      <p>{description}</p>
    </a>
  );
}
