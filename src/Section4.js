import styles from './Section4.module.css';
import app from './app.png';
import fun from './Fun.png'
const Section4 = () => {
  return (
    <div className={styles.section4}>
      <img src={app} alt="app" className={styles.appImage} />
      <div className={styles.funSection}>
        <img src={fun} alt="fun" className={styles.funImage} />
        <div className={styles.funText}>
          <h2>Fun at is Peak</h2>
          <p>
            With Zuri Chat, it’s not just all about work. while, you work, you
            can have fun with your team mates with our games plugins as well as
            listen to fun music. Share fun times and things with co-workers and
            build the team spirit
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section4
