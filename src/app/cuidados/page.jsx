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

            {/* 2. Cards dos 4 Pilares Principais */}
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

            {/* 3. Seção Detalhada: Alimentação */}
            <section id="alimentacao" className={styles.detailSection}>
                <div className={styles.container}>
                    <div className={styles.detailContent}>
                        <div className={styles.detailText}>
                            <h2 className={styles.detailTitle}>Alimentação Adequada</h2>
                            <p className={styles.detailDescription}>
                                Hamsters precisam de uma dieta balanceada composta por ração específica para hamsters, que contém os nutrientes necessários para seu desenvolvimento. Complementar com pequenas porções de frutas frescas, legumes e sementes é importante, mas evite alimentos ricos em açúcar, gordura ou tóxicos, como cebola e chocolate. Sempre ofereça água fresca e limpa diariamente.
                            </p>
                            
                            <h3>O que oferecer:</h3>
                            <ul>
                                <li>Ração específica para hamsters (70% da dieta)</li>
                                <li>Vegetais frescos: cenoura, brócolis, abobrinha</li>
                                <li>Frutas em pequenas quantidades: maçã, pera</li>
                                <li>Sementes e nozes ocasionalmente</li>
                            </ul>

                            <h3>Frequência de alimentação:</h3>
                            <ul>
                                <li>Ração: Diariamente (1-2 colheres de chá)</li>
                                <li>Vegetais: 2-3 vezes por semana</li>
                                <li>Frutas: 1-2 vezes por semana</li>
                            </ul>

                            <h3>Alimentos proibidos:</h3>
                            <div className={styles.forbiddenFoods}>
                                <span>Chocolate</span>
                                <span>Cebola e alho</span>
                                <span>Doces</span>
                                <span>Café</span>
                                <span>Abacate</span>
                                <span>Carnes cruas</span>
                            </div>
                        </div>
                        <div className={styles.detailImagePlaceholder}></div>
                    </div>
                </div>
            </section>

            {/* 4. Seção Detalhada: Higiene */}
            <section id="higiene" className={styles.detailSection}>
                <div className={styles.container}>
                    <div className={styles.detailContent}>
                        <div className={styles.detailImagePlaceholder}></div>
                        <div className={styles.detailText}>
                            <h2 className={styles.detailTitle}>Higiene</h2>
                            <p className={styles.detailDescription}>
                                Mantenha a gaiola limpa trocando a cama pelo menos uma vez por semana e retirando restos de alimentos diariamente. Hamsters gostam de tomar banho de areia especial para remover impurezas da pele e pelos, o que ajuda a evitar infecções. Evite banhos com água, pois podem estressar e causar problemas respiratórios.
                            </p>
                            
                            <h3>Limpeza da gaiola:</h3>
                            <ul>
                                <li>Limpeza completa: semanalmente</li>
                                <li>Remoção de restos de comida: diariamente</li>
                                <li>Troca do substrato: a cada 3-4 dias</li>
                                <li>Limpeza do bebedouro: a cada 2 dias</li>
                                <li>Desinfeção mensal com produtos específicos</li>
                            </ul>

                            <h3>Banho de areia:</h3>
                            <ul>
                                <li>Ofereça 2-3 vezes por semana</li>
                                <li>Use areia específica para chinchilas</li>
                                <li>Deixe por 10-15 minutos</li>
                                <li>Retire após o uso para evitar sujeira</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Seção Detalhada: Cuidados de Saúde */}
            <section id="saude" className={styles.detailSection}>
                <div className={styles.container}>
                    <div className={styles.detailContent}>
                        <div className={styles.detailText}>
                            <h2 className={styles.detailTitle}>Cuidados de Saúde</h2>
                            <p className={styles.detailDescription}>
                                Observe o hamster diariamente para detectar qualquer sinal de doença, como mudanças no apetite, letargia, espirros ou pelos arrepiados. Consulte um veterinário especializado em animais pequenos ao notar qualquer alteração. Mantenha o ambiente limpo e livre de correntes de ar para minimizar o risco de doenças.
                            </p>

                            <h3>Visitas ao veterinário:</h3>
                            <ul>
                                <li>Check-up anual para hamsters jovens</li>
                                <li>Check-up semestral para hamsters idosos</li>
                                <li>Consulta imediata se houver sintomas</li>
                                <li>Vacinação conforme orientação veterinária</li>
                            </ul>

                            <h3>Verificações regulares em casa:</h3>
                            <ul>
                                <li>Verificar dentes (crescimento excessivo)</li>
                                <li>Controlar o peso semanalmente</li>
                                <li>Observar o pelo (brilho e textura)</li>
                                <li>Verificar olhos e nariz (secreções)</li>
                                <li>Monitorar atividade e comportamento</li>
                            </ul>

                            <h3>Cuidados preventivos:</h3>
                            <ul>
                                <li>Ambiente livre de correntes de ar</li>
                                <li>Temperatura entre 18-24°C</li>
                                <li>Exercício diário adequado</li>
                                <li>Alimentação balanceada</li>
                                <li>Higiene rigorosa da gaiola</li>
                            </ul>
                        </div>
                        <div className={styles.detailImagePlaceholder}></div>
                    </div>
                </div>
            </section>

            {/* 6. Seção DESTAQUE: Sinais de Alerta */}
            <section className={styles.alertSection}>
                <div className={styles.container}>
                    <h2 className={styles.alertTitle}>Sinais de Alerta</h2>
                    <p className={styles.alertSubtitle}>
                        Fique atento a sinais como perda de peso, dificuldade para respirar, olhos lacrimejantes ou feridas na pele. Esses sintomas indicam a necessidade de atendimento veterinário imediato para evitar complicações.
                    </p>
                    <div className={styles.alertGrid}>
                        <div className={styles.alertItem}>
                            <h4>Perda de peso</h4>
                            <p>Monitore regularmente o peso do seu hamster. Perda súbita pode indicar problemas de saúde.</p>
                        </div>
                        <div className={styles.alertItem}>
                            <h4>Diarreia</h4>
                            <p>Fezes muito líquidas ou frequentes podem indicar problemas digestivos ou infecções.</p>
                        </div>
                        <div className={styles.alertItem}>
                            <h4>Dificuldade para respirar</h4>
                            <p>Respiração ofegante ou chiados podem ser sinais de infecções respiratórias.</p>
                        </div>
                        <div className={styles.alertItem}>
                            <h4>Olhos lacrimejantes</h4>
                            <p>Secreções nos olhos podem indicar alergias ou infecções oculares.</p>
                        </div>
                        <div className={styles.alertItem}>
                            <h4>Feridas na pele</h4>
                            <p>Cortes, arranhões ou inflamações precisam de atenção veterinária imediata.</p>
                        </div>
                        <div className={styles.alertItem}>
                            <h4>Letargia</h4>
                            <p>Falta de energia ou movimento reduzido pode indicar diversos problemas de saúde.</p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}