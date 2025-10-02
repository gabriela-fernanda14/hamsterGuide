"use client";

import { useState, useEffect } from "react";
import styles from "./cuidados.module.css";

export default function Cuidados() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Cuidados Básicos Diários</h1>
                    <p className={styles.heroSubtitle}>
                        Cuidados básicos diários para hamsters são essenciais para garantir a saúde e o bem-estar do seu pet. Este guia apresenta as principais orientações para uma rotina adequada.
                    </p>
                    <div className={styles.heroImagePlaceholder}></div>
                </div>
            </section>

            <section className={styles.pilaresSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>4 Pilares dos Cuidados</h2>
                    <div className={styles.pilaresGrid}>
                        <div className={`${styles.pilarCard} ${styles.alimentacao}`} onClick={() => scrollToSection('alimentacao')}>
                            <div className={styles.cardIconPlaceholder}></div>
                            <h3 className={styles.cardTitle}>Alimentação Adequada</h3>
                            <p className={styles.cardDescription}>
                                Dieta balanceada com ração específica, frutas frescas e legumes em porções adequadas.
                            </p>
                            <button className={styles.cardButton} onClick={() => scrollToSection('alimentacao')}>Saiba mais</button>
                        </div>

                        <div className={`${styles.pilarCard} ${styles.higiene}`} onClick={() => scrollToSection('higiene')}>
                            <div className={styles.cardIconPlaceholder}></div>
                            <h3 className={styles.cardTitle}>Higiene</h3>
                            <p className={styles.cardDescription}>
                                Limpeza regular da gaiola e banho de areia para manter um ambiente saudável.
                            </p>
                            <button className={styles.cardButton} onClick={() => scrollToSection('higiene')}>Saiba mais</button>
                        </div>

                        <div className={`${styles.pilarCard} ${styles.saude}`} onClick={() => scrollToSection('saude')}>
                            <div className={styles.cardIconPlaceholder}></div>
                            <h3 className={styles.cardTitle}>Cuidados de Saúde</h3>
                            <p className={styles.cardDescription}>
                                Observação diária e consultas veterinárias para manter seu hamster saudável.
                            </p>
                            <button className={styles.cardButton} onClick={() => scrollToSection('saude')}>Saiba mais</button>
                        </div>

                        <div className={`${styles.pilarCard} ${styles.rotina}`} onClick={() => scrollToSection('rotina')}>
                            <div className={styles.cardIconPlaceholder}></div>
                            <h3 className={styles.cardTitle}>Rotina de Cuidados</h3>
                            <p className={styles.cardDescription}>
                                Estabeleça horários regulares para alimentação, limpeza e interação.
                            </p>
                            <button className={styles.cardButton} onClick={() => scrollToSection('rotina')}>Saiba mais</button>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}