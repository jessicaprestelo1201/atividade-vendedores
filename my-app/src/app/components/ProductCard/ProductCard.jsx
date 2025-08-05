import Image from 'next/image';
import styles from './ProductCard.module.css';


export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        loading="lazy"
      />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <small>{product.description}</small>
    </div>
  );
}
