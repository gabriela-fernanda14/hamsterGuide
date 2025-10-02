import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hamster}>🐹</div>
        <h1 className={styles.message}>
          Ops, não encontramos o que você procurava!
        </h1>
        <a href="/" className={styles.homeLink}>
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
}
