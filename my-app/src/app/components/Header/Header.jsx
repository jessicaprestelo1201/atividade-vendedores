'use client';
import styles from './Header.module.css';
import Image from 'next/image';


export default function Header({ title, subtitle }) {
  return (
    <header className={styles.header}>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={60}
        height={60}
        priority={true}
      />
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}
