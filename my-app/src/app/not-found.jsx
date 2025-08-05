import styles from './not-found.module.css';


export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Oops! Página Não encontrada</p>
    </div>
  );
}
