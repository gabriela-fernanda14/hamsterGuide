import styles from "./dicas.module.css";
import Link from "next/link";

export default function Dicas() {

    const faqs = [
        {
            categoria: "Comportamento",
            perguntas: [
                {
                    pergunta: "Por que meu hamster morde as grades da gaiola?",
                    resposta: "Esse comportamento geralmente indica tédio, estresse ou falta de espaço. Verifique se a gaiola é grande o suficiente, se há brinquedos variados e se o hamster está recebendo tempo suficiente fora da gaiola (em área segura). Também pode ser sinal de que ele precisa de mais coisas para roer."
                },
                {
                    pergunta: "É normal meu hamster dormir o dia todo?",
                    resposta: "Sim! Hamsters são animais noturnos e crepusculares, mais ativos ao amanhecer e anoitecer. É completamente normal que durmam durante o dia. Evite acordá-los para brincar - respeite o ciclo natural de sono deles."
                },
                {
                    pergunta: "Meu hamster está entesourando comida. Isso é problema?",
                    resposta: "Não, é comportamento natural! Na natureza, hamsters armazenam comida em suas tocas. Eles usam as bochechas para transportar alimentos até seus esconderijos. Verifique periodicamente a 'despensa' para remover alimentos frescos que possam estragar."
                },
                {
                    pergunta: "Por que meu hamster fica parado olhando para cima?",
                    resposta: "Hamsters têm visão limitada e dependem muito da audição. Quando ficam parados olhando para cima, estão 'escutando' o ambiente, processando sons e cheiros. É comportamento normal de atenção e vigilância."
                },
                {
                    pergunta: "Meu hamster está lavando o rosto. Ele está sujo?",
                    resposta: "Não, lavar o rosto é comportamento de higiene natural. Hamsters são animais muito limpos e se higienizam várias vezes ao dia. Esse comportamento é saudável e normal."
                }
            ]
        },
        {
            categoria: "Saúde",
            perguntas: [
                {
                    pergunta: "Como sei se meu hamster está doente?",
                    resposta: "Sinais de alerta incluem: letargia excessiva, perda de apetite, olhos lacrimejantes ou fechados, respiração difícil, diarreia, perda de pelo, caroços ou feridas. Se notar qualquer um desses sintomas, procure um veterinário especializado em animais exóticos imediatamente."
                },
                {
                    pergunta: "Meu hamster está perdendo pelo. É normal?",
                    resposta: "Pode ser normal em pequena quantidade, mas perda excessiva pode indicar ácaros, problemas de pele, estresse ou deficiências nutricionais. Se a perda for significativa ou houver áreas calvas, consulte um veterinário."
                },
                {
                    pergunta: "Com que frequência devo levar meu hamster ao veterinário?",
                    resposta: "Recomenda-se um check-up anual preventivo. Hamsters escondem sinais de doença, então exames regulares ajudam a detectar problemas precocemente. Procure veterinários especializados em animais exóticos."
                },
                {
                    pergunta: "Os dentes do meu hamster estão muito grandes. O que fazer?",
                    resposta: "Dentes crescendo demais podem indicar má oclusão (dentes desalinhados). Ofereça bastante material para roer. Se os dentes estiverem impedindo a alimentação, um veterinário precisará apará-los. Nunca tente fazer isso em casa."
                },
                {
                    pergunta: "Meu hamster está espirrando. Devo me preocupar?",
                    resposta: "Espirros ocasionais podem ser poeira do substrato. Espirros frequentes, secreção nasal, olhos lacrimejantes ou dificuldade respiratória indicam infecção respiratória - procure um veterinário. Troque para substrato com menos poeira."
                }
            ]
        },
        {
            categoria: "Alimentação",
            perguntas: [
                {
                    pergunta: "Posso dar frutas todos os dias?",
                    resposta: "Não. Frutas devem ser petiscos ocasionais (2-3 vezes por semana) em pequenas quantidades devido ao alto teor de açúcar. Ofereça pedaços do tamanho de uma unha. Legumes são opções melhores para alimentação diária."
                },
                {
                    pergunta: "Que alimentos são tóxicos para hamsters?",
                    resposta: "NUNCA ofereça: chocolate, alho, cebola, folhas de tomate, sementes de maçã, amêndoas amargas, abacate, batata crua, feijão cru, ruibarbo, ou alimentos muito açucarados/salgados/condimentados."
                },
                {
                    pergunta: "Meu hamster não está comendo a ração. O que fazer?",
                    resposta: "Ele pode estar seletivo ou escondendo comida. Verifique os esconderijos. Se realmente não comer por mais de 24h, é emergência veterinária. Tente oferecer vegetais frescos para estimular o apetite, mas procure ajuda profissional rapidamente."
                },
                {
                    pergunta: "Posso dar sementes de girassol?",
                    resposta: "Sim, mas com moderação. Sementes de girassol são ricas em gordura e podem causar obesidade. Ofereça 1-2 sementes por dia como petisco, não como alimentação principal."
                },
                {
                    pergunta: "Preciso dar suplementos vitamínicos?",
                    resposta: "Geralmente não, se a dieta for balanceada com ração de qualidade e vegetais variados. Suplementos só devem ser dados sob orientação veterinária. Excesso de vitaminas pode ser prejudicial."
                }
            ]
        },
        {
            categoria: "Convivência",
            perguntas: [
                {
                    pergunta: "Como devo pegar meu hamster?",
                    resposta: "Nunca pegue por cima (parece um predador). Coloque a mão na gaiola com a palma para cima e deixe ele subir. Ou use as duas mãos formando uma concha. Sempre apoie o corpo todo. Movimentos lentos e calmos são essenciais."
                },
                {
                    pergunta: "Posso dar banho no meu hamster?",
                    resposta: "NÃO! Hamsters não devem ser banhados com água, exceto em emergências (sob orientação veterinária). Isso remove óleos naturais essenciais da pelagem. Use banheira de areia específica para hamsters se limparem."
                },
                {
                    pergunta: "Posso colocar dois hamsters juntos?",
                    resposta: "Hamsters Sírios são SEMPRE solitários e brigam até a morte. Hamsters Anões podem viver em pares/grupos se criados juntos desde filhotes, mas sempre há risco de brigas. Tenha sempre uma gaiola extra de emergência."
                },
                {
                    pergunta: "Quanto tempo posso deixar meu hamster fora da gaiola?",
                    resposta: "30 minutos a 1 hora por dia em área totalmente segura e supervisionada é ideal. Use cercados próprios ou quartos à prova de fuga. Nunca deixe sem supervisão - hamsters são rápidos e curiosos."
                },
                {
                    pergunta: "Meu hamster me mordeu. Por quê?",
                    resposta: "Mordidas geralmente indicam medo, dor ou confusão (seus dedos cheiravam a comida). Não foram domesticados o suficiente ou foram acordados bruscamente. Lave bem o ferimento. Continue a socialização gradualmente, respeitando os limites do animal."
                }
            ]
        },
        {
            categoria: "Emergências",
            perguntas: [
                {
                    pergunta: "Meu hamster caiu. O que fazer?",
                    resposta: "Quedas podem causar fraturas internas ou externas. Coloque-o gentilmente de volta na gaiola com fácil acesso a água e comida. Observe sinais de dor, dificuldade de movimento ou respiração alterada. Procure veterinário imediatamente, mesmo que pareça normal."
                },
                {
                    pergunta: "Meu hamster está em torpor (parece morto mas está frio)?",
                    resposta: "Torpor acontece quando a temperatura fica abaixo de 15°C. Aqueça-o GRADUALMENTE: segure nas mãos, use toalha morna (não quente), mantenha em ambiente aquecido. NÃO use fontes diretas de calor. Deve acordar em 2-3 horas. Se não melhorar, vá ao veterinário."
                },
                {
                    pergunta: "Meu hamster fugiu. Como encontrá-lo?",
                    resposta: "Feche todas as portas do cômodo. Coloque comida e água em um canto. À noite (quando são ativos), deixe sementes no chão para ouvir onde estão. Use armadilhas humanas: balde com toalhas no fundo, rampa com comida. Pode levar dias para encontrar."
                },
                {
                    pergunta: "Meu hamster está com diarreia. É grave?",
                    resposta: "SIM! Diarreia em hamsters é emergência veterinária, especialmente 'cauda molhada' (wet tail). Pode desidratar e morrer rapidamente. Remova vegetais frescos, ofereça apenas ração e água. Procure veterinário IMEDIATAMENTE."
                },
                {
                    pergunta: "Meu hamster não está se movendo mas está respirando. O que fazer?",
                    resposta: "Pode ser derrame, ataque cardíaco ou torpor. Mantenha-o aquecido (temperatura corporal) e vá ao veterinário de emergência. Não force alimentação. Transporte com cuidado em caixa pequena com ventilação."
                }
            ]
        }
    ];

    const dicasPraticas = [
        {
            titulo: "Domesticação Gradual",
            dica: "Nos primeiros dias, apenas troque água/comida sem interagir. Depois, deixe sua mão na gaiola para o hamster cheirar. Ofereça petiscos da palma da mão. Paciência é fundamental - pode levar semanas."
        },
        {
            titulo: "Redução de Odor",
            dica: "Limpe o 'cantinho do banheiro' diariamente. Use substrato de boa qualidade. Boa ventilação é essencial. Troque água diariamente. Gaiolas muito pequenas tendem a cheirar mais."
        },
        {
            titulo: "Viagens e Férias",
            dica: "Para viagens curtas (3-4 dias), um cuidador confiável é ideal. Para viagens longas, considere hotéis para pets especializados. Nunca deixe o hamster sozinho por mais de 2 dias."
        },
        {
            titulo: "Enriquecimento Barato",
            dica: "Use rolos de papel higiênico como túneis, caixas de papelão para explorar, galhos limpos de árvores frutíferas, esconda comida em diferentes lugares. Criatividade > dinheiro."
        },
        {
            titulo: "Sinais de Felicidade",
            dica: "Hamster feliz: explora ativamente, usa a roda regularmente, aceita petiscos da sua mão, faz higiene frequente, tem olhos brilhantes e pelagem saudável, constrói ninhos elaborados."
        },
        {
            titulo: "Quando Procurar Veterinário",
            dica: "Procure IMEDIATAMENTE se: não come por 24h, diarreia, sangramento, queda, dificuldade respiratória, olhos fechados/inchados, mudança drástica de comportamento, perda rápida de peso."
        }
    ];

    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Dicas e Perguntas Frequentes</h1>
                    <p className={styles.heroSubtitle}>
                        Respostas para suas dúvidas mais comuns sobre cuidados com hamsters, 
                        comportamento, saúde e situações de emergência.
                    </p>
                </div>
            </section>

            <section className={styles.dicasSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>💡 Dicas Práticas</h2>
                    <div className={styles.dicasGrid}>
                        {dicasPraticas.map((item, index) => (
                            <div key={index} className={styles.dicaCard}>
                                <h3>{item.titulo}</h3>
                                <p>{item.dica}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>❓ Perguntas Frequentes</h2>
                    
                    {faqs.map((categoria, catIndex) => (
                        <div key={catIndex} className={styles.categoriaSection}>
                            <h3 className={styles.categoriaTitle}>{categoria.categoria}</h3>
                            <div className={styles.faqList}>
                                {categoria.perguntas.map((faq, faqIndex) => (
                                    <details key={faqIndex} className={styles.faqItem}>
                                        <summary className={styles.faqQuestion}>
                                            {faq.pergunta}
                                        </summary>
                                        <div className={styles.faqAnswer}>
                                            <p>{faq.resposta}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.emergencySection}>
                <div className={styles.container}>
                    <div className={styles.emergencyBox}>
                        <h2>🚨 Em Caso de Emergência</h2>
                        <p>
                            Se seu hamster apresentar sinais graves (não se move, não come por 24h, 
                            diarreia severa, sangramento, dificuldade respiratória), procure imediatamente 
                            um veterinário especializado em animais exóticos.
                        </p>
                        <p>
                            <strong>Tenha sempre à mão:</strong> contato de um veterinário de emergência, 
                            caixa de transporte adequada, e conheça os sinais de alerta específicos da 
                            espécie do seu hamster.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactBox}>
                        <h2>Ainda tem dúvidas?</h2>
                        <p>Entre em contato conosco através do formulário. Teremos prazer em ajudar!</p>
                        <Link href="/#contato" className={styles.contactButton}>
                            Ir para o Formulário de Contato
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
