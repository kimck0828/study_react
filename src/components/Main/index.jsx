import Image from 'next/image'
import styles from './Main.module.css'
import {Links} from "@/src/components/Links";
import {Headline} from "@/src/components/Headline";

export function Main(props) {
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
      <Links/>

    </main>
  )
}
