import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Tasks from "./components/Task";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Timer />
        <Tasks />
      </main>
    </div>
  );
}

export default App;
