import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h1>hamsterGuide</h1>
        </Link>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/especies" className={styles.navLink}>
                Espécies
              </Link>
            </li>
            <li>
              <Link href="/cuidados" className={styles.navLink}>
                Cuidados
              </Link>
            </li>
            <li>
              <Link href="/habitat" className={styles.navLink}>
                Habitat
              </Link>
            </li>
            <li>
              <Link href="/dicas" className={styles.navLink}>
                Dicas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;