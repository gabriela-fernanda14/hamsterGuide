"use client";

import styles from "./cuidados.module.css";

export default function Cuidados() {

    return (
        <main>
            {/* 1. Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Cuidados Básicos Diários</h1>
                    <p className={styles.heroSubtitle}>
                        Cuidados básicos diários para hamsters são essenciais para garantir a saúde e o bem-estar do seu pet. Este guia apresenta as principais orientações para uma rotina adequada.
                    </p>
                    <div className={styles.heroImagePlaceholder}></div>
                </div>
            </section>


        </main>
    );
}