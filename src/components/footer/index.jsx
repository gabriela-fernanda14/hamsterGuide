import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <h3>hamsterGuide</h3>
          </Link>
          <p className={styles.description}>
            Seu guia completo para cuidar do seu hamster com amor e carinho.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 hamsterGuide. Todos os direitos reservados.
          </p>
          <p className={styles.madeWith}>
            Feito com ❤️ para amantes de hamsters 🐹
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
