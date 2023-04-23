import Link from "next/link";
import styles from "@/components/Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
          <Link href="/" >
            <a className={styles.link}>Index</a>
          </Link>          
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
        </header>
    )
}