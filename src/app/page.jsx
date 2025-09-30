import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
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

      <section className={styles.topicsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Principais Tópicos</h2>
          <div className={styles.topicsGrid}>
            <div className={styles.topicCard}>
              <div className={styles.topicIcon}>🥕</div>
              <h3 className={styles.topicTitle}>Alimentação</h3>
              <p className={styles.topicDescription}>
                Aprenda sobre a dieta ideal, alimentos permitidos e proibidos para seu hamster.
              </p>
              <button className={styles.topicButton}>Ver Alimentação</button>
            </div>
            <div className={styles.topicCard}>
              <div className={styles.topicIcon}>🏠</div>
              <h3 className={styles.topicTitle}>Habitat</h3>
              <p className={styles.topicDescription}>
                Descubra como montar a gaiola perfeita e criar um ambiente confortável.
              </p>
              <button className={styles.topicButton}>Ver Habitat</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Entre em Contato</h2>
          <p className={styles.contactDescription}>
            Tem alguma dúvida sobre hamsters? Envie sua pergunta!
          </p>
          <form className={styles.contactForm} action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={styles.formInput}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={styles.formInput}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className={styles.formTextarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.formButton}>Enviar Mensagem</button>
          </form>
        </div>
      </section>
    </div>
  )
}