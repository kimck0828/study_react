import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export function Headline(props) {
    console.log("headline props:" , props)
    return (
        <div className={styles.description}> 
            <h1 className={styles.title}>{props.page} Page</h1>
            <p>
                Get started by editing {props.comp}
            </p>
            <div>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{' '}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                </a>
                <button onClick={props.onclick}>ボタン</button>
                {props.children}
            </div>
        </div>
    )
}
