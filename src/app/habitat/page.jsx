"use client";

import { useState, useEffect } from "react";
import styles from "./habitat.module.css";

export default function Habitat() {
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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                    <h1 className={styles.heroTitle}>Habitat Ideal para Hamsters</h1>
                    <p className={styles.heroSubtitle}>
                        Criar um ambiente adequado é fundamental para a saúde e felicidade do seu hamster. 
                        Aprenda sobre tipos de gaiolas, brinquedos, temperatura e organização do espaço.
                    </p>
                </div>
            </section>

            <section className={styles.topicsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Principais Aspectos do Habitat</h2>
                    <div className={styles.topicsGrid}>
                        <div className={styles.topicCard} onClick={() => scrollToSection('gaiolas')}>
                            <h3 className={styles.cardTitle}>Tipos de Gaiolas</h3>
                            <p className={styles.cardDescription}>
                                Tamanhos adequados e materiais recomendados para diferentes espécies.
                            </p>
                        </div>

                        <div className={styles.topicCard} onClick={() => scrollToSection('brinquedos')}>
                            <h3 className={styles.cardTitle}>Brinquedos e Enriquecimento</h3>
                            <p className={styles.cardDescription}>
                                Itens essenciais para estimular o comportamento natural do hamster.
                            </p>
                        </div>

                        <div className={styles.topicCard} onClick={() => scrollToSection('temperatura')}>
                            <h3 className={styles.cardTitle}>Temperatura e Iluminação</h3>
                            <p className={styles.cardDescription}>
                                Condições ideais de ambiente para o bem-estar do seu pet.
                            </p>
                        </div>

                        <div className={styles.topicCard} onClick={() => scrollToSection('organizacao')}>
                            <h3 className={styles.cardTitle}>Organização do Espaço</h3>
                            <p className={styles.cardDescription}>
                                Como distribuir os itens para criar um ambiente funcional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gaiolas" className={styles.contentSection}>
                <div className={styles.container}>
                    <h2 className={styles.contentTitle}>Tipos de Gaiolas</h2>
                    
                    <h3>Tamanhos Mínimos</h3>
                    <p>
                        O tamanho da gaiola é crucial para o bem-estar do hamster. <strong>Hamsters Sírios</strong> precisam 
                        de no mínimo 80x50cm de área de base, enquanto <strong>hamsters anões</strong> necessitam de pelo 
                        menos 70x40cm. Lembre-se: quanto maior, melhor para o seu pet.
                    </p>

                    <h3>Aquários de Vidro</h3>
                    <p>
                        Os aquários são excelentes opções. Oferecem boa visibilidade, protegem contra correntes de ar e 
                        facilitam a limpeza. A ventilação adequada é garantida pela abertura superior. Use tampas de tela 
                        metálica para permitir circulação de ar.
                    </p>

                    <h3>Gaiolas de Arame</h3>
                    <p>
                        Gaiolas com base de plástico e grades de arame são populares. Oferecem ótima ventilação e permitem 
                        que o hamster escale. O espaçamento entre as barras deve ser de no máximo 1cm para sírios e 0,6cm 
                        para anões, evitando fugas.
                    </p>

                    <h3>Evite Gaiolas Modulares</h3>
                    <p>
                        Gaiolas modulares pequenas com tubos conectados não são recomendadas. Geralmente têm pouca ventilação, 
                        espaço insuficiente e dificultam a limpeza. Priorize gaiolas amplas e de design simples.
                    </p>

                    <div className={styles.importantBox}>
                        <h4>⚠️ Importante</h4>
                        <p>
                            Certifique-se de que a gaiola tenha fechamento seguro. Hamsters são excelentes escapistas e 
                            conseguem abrir travas simples. Use travas duplas ou sistemas de segurança.
                        </p>
                    </div>
                </div>
            </section>

            <section id="brinquedos" className={styles.contentSection}>
                <div className={styles.container}>
                    <h2 className={styles.contentTitle}>Brinquedos e Enriquecimento</h2>
                    
                    <h3>Roda de Exercício</h3>
                    <p>
                        A roda é <strong>indispensável</strong>. Na natureza, hamsters percorrem até 9km por noite. 
                        Use rodas de pelo menos 20cm de diâmetro para anões e 28cm para sírios. A superfície deve ser 
                        sólida e lisa, nunca com barras ou grades que possam machucar as patas.
                    </p>

                    <h3>Casa e Esconderijos</h3>
                    <p>
                        Todo hamster precisa de uma casinha para dormir e se sentir seguro. Escolha casas de madeira 
                        natural (sem verniz), cerâmica ou plástico atóxico. Deve ter espaço suficiente e pelo menos 
                        uma entrada de tamanho adequado.
                    </p>

                    <h3>Túneis e Tubos</h3>
                    <p>
                        Hamsters adoram explorar túneis. Use tubos de papelão (sem cola), túneis de cortiça ou plástico 
                        seguro. Varie os percursos regularmente para manter o interesse do animal.
                    </p>

                    <h3>Brinquedos para Roer</h3>
                    <p>
                        Os dentes dos hamsters crescem continuamente. Ofereça blocos de madeira natural (macieira, salgueiro), 
                        brinquedos de cortiça e galhos não tratados. Evite madeiras resinosas como pinho e cedro.
                    </p>

                    <h3>Plataformas e Rampas</h3>
                    <p>
                        Adicione níveis diferentes com plataformas e rampas suaves. Isso aumenta o espaço útil e estimula 
                        a exploração. Certifique-se de que as rampas não sejam muito íngremes.
                    </p>

                    <h3>Banheira de Areia</h3>
                    <p>
                        Hamsters se limpam usando areia. Ofereça uma tigela com areia específica para hamster ou chinchila. 
                        <strong>Nunca banhe seu hamster com água</strong> - isso remove os óleos naturais da pelagem e 
                        pode causar problemas de saúde.
                    </p>
                </div>
            </section>

            <section id="temperatura" className={styles.contentSection}>
                <div className={styles.container}>
                    <h2 className={styles.contentTitle}>Temperatura e Iluminação</h2>
                    
                    <h3>Temperatura Ideal</h3>
                    <p>
                        A faixa de temperatura confortável para hamsters é entre <strong>18°C e 24°C</strong>. 
                        Temperaturas abaixo de 15°C podem induzir torpor (estado de hibernação parcial), que é perigoso 
                        para hamsters domésticos. Acima de 26°C, podem sofrer com o calor.
                    </p>

                    <h3>Evite Extremos</h3>
                    <p>
                        Nunca coloque a gaiola próxima a janelas com luz solar direta, radiadores, ar-condicionado ou 
                        áreas com correntes de ar. Mudanças bruscas de temperatura são especialmente prejudiciais.
                    </p>

                    <h3>Iluminação Natural</h3>
                    <p>
                        Hamsters são animais noturnos e crepusculares (mais ativos ao amanhecer e anoitecer). Mantenha 
                        um ciclo natural de luz e escuridão - cerca de 12 horas de cada. Evite luz artificial forte 
                        diretamente sobre a gaiola durante a noite.
                    </p>

                    <h3>Localização da Gaiola</h3>
                    <p>
                        Escolha um local tranquilo, longe de áreas muito movimentadas durante o dia (para não atrapalhar 
                        o sono). A sala deve ter boa ventilação natural, mas sem correntes de ar. Evite cozinhas 
                        (variação de temperatura) e banheiros (umidade).
                    </p>

                    <div className={styles.importantBox}>
                        <h4>💡 Dica</h4>
                        <p>
                            Use um termômetro próximo à gaiola para monitorar a temperatura ambiente. No verão, 
                            você pode colocar garrafas de água congelada embrulhadas em toalha próximo à gaiola 
                            (mas não dentro dela) para ajudar a refrescar o ambiente.
                        </p>
                    </div>
                </div>
            </section>

            <section id="organizacao" className={styles.contentSection}>
                <div className={styles.container}>
                    <h2 className={styles.contentTitle}>Organização do Espaço</h2>
                    
                    <h3>Substrato</h3>
                    <p>
                        Use uma camada de 5-8cm de substrato para permitir que o hamster cave. Opções seguras incluem: 
                        papel reciclado sem tinta, aparas de álamo (aspen), fibra de coco ou hemp. 
                        <strong>Nunca use</strong> serragem de pinus ou cedro (liberam substâncias tóxicas).
                    </p>

                    <h3>Área de Alimentação</h3>
                    <p>
                        Coloque o comedouro em um local fixo e de fácil acesso. Use tigelas de cerâmica pesadas 
                        que não virem facilmente. O bebedouro tipo garrafa deve ficar em altura acessível, 
                        mas não muito baixo para evitar contaminação com substrato.
                    </p>

                    <h3>Zona de Descanso</h3>
                    <p>
                        A casinha deve ficar em um canto mais reservado da gaiola, longe da roda e comedouro. 
                        Hamsters gostam de privacidade para dormir. Coloque material para ninho (papel higiênico 
                        sem perfume) próximo à casa.
                    </p>

                    <h3>Área de Exercício</h3>
                    <p>
                        A roda deve ter espaço livre ao redor para não bater em outros objetos. Coloque-a em posição 
                        estável para evitar barulho e movimento excessivo. Deixe uma área aberta para corridas e exploração.
                    </p>

                    <h3>Cantinho do Banheiro</h3>
                    <p>
                        Muitos hamsters escolhem um canto específico como "banheiro". Observe onde seu hamster costuma 
                        fazer as necessidades e coloque uma pequena tigela com areia nesse local - facilita a limpeza 
                        e o hamster aprecia ter esse espaço definido.
                    </p>

                    <h3>Distribuição dos Brinquedos</h3>
                    <p>
                        Não sobrecarregue a gaiola com brinquedos. Deixe espaço livre para movimentação. Faça rodízio 
                        dos brinquedos semanalmente para manter o interesse do hamster. Isso cria novidade sem precisar 
                        comprar itens novos constantemente.
                    </p>

                    <div className={styles.importantBox}>
                        <h4>✓ Checklist Básico</h4>
                        <ul>
                            <li>Substrato adequado (5-8cm de profundidade)</li>
                            <li>Roda de exercício do tamanho correto</li>
                            <li>Casa/esconderijo</li>
                            <li>Comedouro de cerâmica</li>
                            <li>Bebedouro tipo garrafa</li>
                            <li>Banheira com areia</li>
                            <li>Brinquedos para roer</li>
                            <li>Túneis ou tubos</li>
                            <li>Material para ninho</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.finalSection}>
                <div className={styles.container}>
                    <h2 className={styles.contentTitle}>Considerações Finais</h2>
                    <p>
                        Um habitat bem planejado faz toda a diferença na qualidade de vida do seu hamster. 
                        Observe o comportamento do seu pet e faça ajustes conforme necessário. Cada hamster 
                        tem preferências individuais - alguns adoram escalar, outros preferem cavar túneis no substrato.
                    </p>
                    <p>
                        Faça mudanças graduais no ambiente para não causar estresse. Limpe a gaiola regularmente, 
                        mas mantenha sempre um pouco do substrato antigo com o cheiro familiar. Com dedicação e 
                        atenção aos detalhes, você criará um lar onde seu hamster viverá feliz e saudável por muitos anos.
                    </p>
                </div>
            </section>

            {showBackToTop && (
                <button className={styles.backToTop} onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </main>
    );
}
