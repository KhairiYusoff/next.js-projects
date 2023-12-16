import Image from "next/image";
import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <main className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Menu />
      </div>
    </main>
  );
}
