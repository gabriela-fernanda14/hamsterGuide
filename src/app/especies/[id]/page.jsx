"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import styles from "./hamster-detail.module.css";

export default function HamsterDetail() {
  const [hamster, setHamster] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchHamster = async () => {
      try {
        const response = await fetch(`http://localhost:4000/hamsters/`);
        const data = await response.json();
        const hamsterData = data.find(h => h.id === parseInt(params.id));
        setHamster(hamsterData);
      } catch (error) {
        console.error("Erro ao carregar hamster:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchHamster();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}>🐹</div>
        <p>Carregando informações...</p>
      </div>
    );
  }

  if (!hamster) {
    return (
      <div className={styles.notFound}>
        <h1>Hamster não encontrado</h1>
        <Link href="/especies" className={styles.backButton}>
          Voltar para espécies
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/especies" className={styles.backLink}>
        ← Voltar para espécies
      </Link>

      <div className={styles.hamsterDetail}>
        <div className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            {hamster.image ? (
              <img src={hamster.image} alt={hamster.name} />
            ) : (
              <div className={styles.placeholderIcon}>🐹</div>
            )}
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.hamsterName}>{hamster.name}</h1>
          
          {hamster.cientificName && (
            <p className={styles.scientificName}>{hamster.cientificName}</p>
          )}

          <div className={styles.infoRow}>
            {hamster.origin && (
              <div className={styles.infoCard}>
                <h4>🌍 Origem</h4>
                <p>{hamster.origin}</p>
              </div>
            )}
            {hamster.habitat && (
              <div className={styles.infoCard}>
                <h4>🏠 Habitat</h4>
                <p>{hamster.habitat}</p>
              </div>
            )}
          </div>

          <div className={styles.infoRow}>
            {hamster.size && (
              <div className={styles.infoCard}>
                <h4>📏 Tamanho</h4>
                <p>{hamster.size}</p>
              </div>
            )}
            {hamster.weight > 0 && (
              <div className={styles.infoCard}>
                <h4>⚖️ Peso</h4>
                <p>{hamster.weight}g</p>
              </div>
            )}
          </div>

          <div className={styles.infoRow}>
            {hamster.food && (
              <div className={styles.largeCard}>
                <h4>🍎 Alimentação</h4>
                <p>{hamster.food}</p>
              </div>
            )}
            {hamster.characteristics && (
              <div className={styles.largeCard}>
                <h4>✨ Características</h4>
                <p>{hamster.characteristics}</p>
              </div>
            )}
          </div>

          {hamster.curiosities && (
            <div className={styles.fullWidthCard}>
              <h4>💡 Curiosidades</h4>
              <p>{hamster.curiosities}</p>
            </div>
          )}

          {hamster.expectedLife && (
            <div className={styles.lifeCard}>
              <h4>⏳ Longevidade</h4>
              <p>{hamster.expectedLife}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}