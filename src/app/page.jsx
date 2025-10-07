"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./page.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdkwzeoa");
  if (state.succeeded) {
    return (
      <div className={styles.successMessage}>
        <p>
          🐹 Obrigado por entrar em contato! Responderemos o mais breve
          possível.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          📧 Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className={styles.formInput}
          placeholder="Digite seu melhor email..."
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>
          💬 Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.formTextarea}
          placeholder="Deixe sua mensagem..."
          rows="5"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        className={styles.formButton}
        disabled={state.submitting}
      >
        {state.submitting ? " Enviando..." : " Enviar Mensagem"}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>Guia do Hamster</h1>
          <p className={styles.subtitle}>
            Descubra tudo sobre cuidados, alimentação e habitat para seu pequeno
            amigo
          </p>
          <div className={styles.buttons}>
            <Link href="/especies" className={styles.btnPrimary}>
              Ver espécies
            </Link>
            <Link href="/cuidados" className={styles.btnSecondary}>
              Ver cuidados
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.imagePlaceholder}>
            <Image
              src="/images/home.png"
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
              <div className={styles.topicIcon}>🏠</div>
              <h3 className={styles.topicTitle}>Habitat</h3>
              <p className={styles.topicDescription}>
                Descubra como montar a gaiola perfeita e criar um ambiente
                confortável.
              </p>
              <Link href="/habitat" className={styles.topicButton}>
                Ver Habitat
              </Link>
            </div>
            <div className={styles.topicCard}>
              <div className={styles.topicIcon}>💡</div>
              <h3 className={styles.topicTitle}>Dicas</h3>
              <p className={styles.topicDescription}>
                Dicas práticas e importantes para o cuidado diário do seu
                hamster.
              </p>
              <Link href="/dicas" className={styles.topicButton}>
                Ver Dicas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Entre em Contato</h2>
          <p className={styles.contactDescription}>
            Tire suas dúvidas, deixe seu feedback ou mande uma mensagem!
          </p>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
