import styles from './Header.module.css';

export default function Header({title, subtitle, totalProducts}) {
    const totalProductsExibido = totalProducts ? `📊 Total de produtos: ${totalProducts}` : "Nenhum produto adicionado";



    return (
        <div className={styles.header}>
            <h4>{title}</h4>
            <p>{subtitle}</p>
            <p>{totalProductsExibido}</p>
            <hr />
        </div>
    );
}