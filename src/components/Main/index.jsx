import Image from 'next/image'
import styles from './Main.module.css'
import {Links} from "@/src/components/Links";
import {Headline} from "@/src/components/Headline";
import {useCallback, useState} from "react";

const ITEMS = [
  {
    "href": "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    "title": "Docs",
    "description": "Find in-depth information about Next.js features and&nbsp;API."
  },
  {
    "href": "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    "title": "Deploy",
    "description": "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
  },
  {
    "href": "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    "title": "Learn",
    "description": "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  {
    "href": "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    "title": "Templates",
    "description": "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((curr) => {
      console.log("curr", curr)
      return curr.splice(0, curr.length - 1);
    })
  }, [])

  return (
    <main className={`${styles.main}`}>
      <Headline page={props.page}
                number={1234}
                array={[1, 2, 3]}
                obj={{foo: "foo", bar: "bar"}}
                bool
                comp={<code className={styles.code}>pages/{props.page}.js</code>}
                onclick={() => {
                  alert(props.page)
                }}
      >
      </Headline>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      {/* 真ん中のリンク枠部分 */}
      <Links items={items}/>

      <button onClick={handleReduce}>減らす</button>

    </main>
  )
}
