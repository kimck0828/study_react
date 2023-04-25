import styles from './Links.module.css'

export function Links(props) {
  console.log("items>", props.items)

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
