import styles from "../styles/Author.module.css";
import { Toolbar } from "../components/toolbar";
export const Author = function({author}){
  console.log(author);
  return (<section className="page-container">
    <Toolbar/>
    <div className={styles.main}><h1>Author</h1>
      <div className={styles.author}>
        <h3>{author.name}</h3>
        <h6>{author.position}</h6>
        <img src={author.image} alt="Prachi Tripathi"/>
        <p>{author.description}</p>
      </div>
    </div>
  </section>)
}

export const getServerSideProps = async pageContext=> {
  // const response = await fetch('https://github.com/prachi09051999/next-news-articles/blob/main/author.json');
  const response = await fetch("https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth")
  const author = await response.json();
  return {
    props:{
      author
    }
  }
}

export default Author;