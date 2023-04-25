import Link from "next/link";
import styles from "./Header.module.css"

const NAVI_ITEMS = [
  {"href" : "/", "label" : "Index"},
  {"href" : "/about", "label" : "About"},
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {
        NAVI_ITEMS.map(one => {
          return (
            <Link href={one.href} key={one.href}>
              <a className={styles.link} >{one.label}</a>
            </Link>
          )
        })
      }
    </header>
  )
}