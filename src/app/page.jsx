import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1 className={styles.title}>Guia do Hamster</h1>
        <p className={styles.subtitle}>Descubra tudo sobre cuidados, alimentação e habitat para seu pequeno amigo</p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary}>Ver espécies</button>
          <button className={styles.btnSecondary}>Ver cuidados</button>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.imagePlaceholder}>
          <Image 
            src="/hamster-hero.jpg" 
            alt="Hamster garra" 
            width={300} 
            height={300}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  )
}