import styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";
import { Toolbar } from "../../components/toolbar";

export const Feed = function({pageNumber, articles}){
  const router = useRouter();
  const prevPageLoader = () => {
    if(pageNumber > 1){
      router.push(`/feed/${pageNumber-1}`).then(() => window.scrollTo(0,0));
    }
  }
  const nextPageLoader = () => {
    if(pageNumber < 5){
      router.push(`/feed/${pageNumber+1}`).then(() => window.scrollTo(0,0));
    }
  }
  return (<section className="page-container">
    <Toolbar/>
    <div className={styles.main}>
      {articles.map((article,index) => <article key={index} className={styles.post}>
        <h2 onClick={()=> window.location.href = article.url}>{article.title}</h2>
        <p>{article.description}</p>
        {!!article.urlToImage && <img src={article.urlToImage} alt={article.title}/>}
      </article>)}
      <footer className={styles.paginator}>
        <span className={pageNumber===1?styles.disabled:styles.active} onClick={prevPageLoader}>Prev</span>
        <span>#{pageNumber}</span>
        <span className={pageNumber===5?styles.disabled:styles.active} onClick={nextPageLoader}>Next</span>
      </footer>
    </div>
    </section>)
};

export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;
  if(!pageNumber || pageNumber<1 || pageNumber > 5) {
    return {
      props:{
        articles: [],
        pageNumber: 1
      }
    }
  }
  else{
    const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,{
      headers:{
        Authorization: `Bearer ${process.env.NEXT_NEWS_PUBLIC_KEY}`,
      },
    });
    const apiJson = await apiResponse.json();
    const { articles } = apiJson;
    return {
      props:{
        articles,
        pageNumber: Number.parseInt(pageNumber)
      }
    }
  }
}
export default Feed;