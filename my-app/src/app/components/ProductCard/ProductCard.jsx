import Image from 'next/image';
import styles from './ProductCard.module.css';


export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      
      <Image 
  src="/iphone15.jpg" 
  alt="Logo" 
  priority 
  width={100} 
  height={50} 
/>

    </div>
  );
}
