import React from "react";
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import styles from './app.module.css';
import Preview from "./components/preview/preview.jsx";

import data from './data.json'

const App = () => (
    <>
      <div className={styles.mainContainer}>
        <Header/>
        <Main
          name={data.user.name}
          surname={data.user.surname}
          image={data.user.image}
          title={data.user.title}
          text={data.user.text}
        />
      </div>
      <Preview
        data={data}
      />
    </>
  );

export default App;
