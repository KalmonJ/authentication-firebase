import Head from "next/head";
import Image from "next/image";
import Firestore from "../src/components/firestorage";
import Login from "../src/components/login";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Firestore />
    </div>
  );
}
