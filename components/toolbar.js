import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";
export const Toolbar = () => {
  const router = useRouter();
  return (<nav className={styles.main}>
    <div onClick={()=>router.push('/')}>Home</div>
    <div onClick={()=>router.push('/feed/1')}>Feed</div>
    <div onClick={()=>router.push('/author')}>Author</div>
    <div onClick={()=>window.location.href = "https://codesandbox.io/u/prachitripathi09051999"}>Sandbox</div>
  </nav>)
}