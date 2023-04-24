import styles from './Links.module.css'
import {useState} from "react";
//
// const ITEMS = [
//   {
//     "href": "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
//     "title": "Docs",
//     "description": "Find in-depth information about Next.js features and&nbsp;API."
//   },
//   {
//     "href": "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
//     "title": "Deploy",
//     "description": "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
//   },
//   {
//     "href": "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
//     "title": "Learn",
//     "description": "Learn about Next.js in an interactive course with&nbsp;quizzes!"
//   },
//   {
//     "href": "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
//     "title": "Templates",
//     "description": "Discover and deploy boilerplate example Next.js&nbsp;projects."
//   },
// ]

export function Links(props) {
  // const [items, setItems] = useState(ITEMS);
  console.log("items links", props)
  return (
    <div className={styles.grid}>
      {
        props.items.map((item, idx) => {
          return (
            <a
              href="{item.href}"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
            >
              <h2 className={styles.title}>
                {item.title} <span>→</span>
              </h2>
              <p className={styles.description}>
                {item.description}
              </p>
            </a>
          )
        })
      }
    </div>
  )
}
