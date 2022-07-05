//jsx = js + xml

import { useState } from "react";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";


export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post author="Larissa1" title="aqui temos um teste"></Post>
          <Post author="Larissa2" title="aqui temos dois testes"></Post>
          <Post author="Larissa3" title="aqui temos tres testes"></Post>
          <Post author="Larissa4" title="aqui temos quatro testes"></Post>
        </main>
      </div>
      {/* > */}
    </div>
  );
}
