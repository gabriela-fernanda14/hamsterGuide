"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./especies.module.css";

export default function Especies() {
  const [hamsters, setHamsters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHamsters = async () => {
      try {
        const response = await fetch("http://localhost:4000/hamsters/");
        const data = await response.json();
        setHamsters(data);
      } catch (error) {
        console.error("Erro ao carregar hamsters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHamsters();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}>🐹</div>
        <p>Carregando espécies...</p>
      </div>
    );
  }

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Espécies de Hamsters</h1>
          <p className={styles.heroSubtitle}>
            Aqui você encontrará todas as espécies de hamsters e suas características únicas
          </p>
        </div>
      </section>

      <section className={styles.speciesSection}>
        <div className={styles.container}>
          <div className={styles.speciesGrid}>
            {hamsters.map((hamster) => (
              <div key={hamster.id} className={styles.speciesCard}>
                <div className={styles.cardImagePlaceholder}>
                  {hamster.image ? (
                    <img src={hamster.image} alt={hamster.name} />
                  ) : (
                    <div className={styles.placeholderIcon}>🐹</div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{hamster.name}</h3>
                  <p className={styles.cardDescription}>{hamster.characteristics}</p>
                  <Link href={`/especies/${hamster.id}`} className={styles.detailButton}>
                    Ver mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
