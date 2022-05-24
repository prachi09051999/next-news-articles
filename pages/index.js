import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/toolbar";

export const HomePage = function(){
  return (<section className="page-container">
    <Toolbar/>
    <div className={styles.main}>
      <h1>Next.js news Website</h1>
      <h3>Your one stop search for all the latest news articles</h3>
    </div>

  </section>)
}

export default HomePage;