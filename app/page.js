import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <>
      <h2 className={styles.header}>
        {"Worrying is".split("").map((child, id) => (
          <span className={styles.hoverText} key={id}>
            {child}
          </span>
        ))}
      </h2>
      <h2 className={styles.header}>
        {"like paying a debt you".split("").map((child, id) => (
          <span className={styles.hoverText} key={id}>
            {child}
          </span>
        ))}
      </h2>
      <h2 className={styles.header}>
        {"don't owe.".split("").map((child, id) => (
          <span className={styles.hoverText} key={id}>
            {child}
          </span>
        ))}
      </h2>
    </>
  );
};
