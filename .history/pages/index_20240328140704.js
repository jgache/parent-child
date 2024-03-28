import styles from "@/styles/Home.module.css";
import ParentToChild from "./ParentOne";
import Chold


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <ParentToChild />
        
      </main>
    </>
  );
}
