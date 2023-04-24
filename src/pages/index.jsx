import Head from 'next/head'
import {Main} from "@/src/components/Main";
import {Header} from "@/src/components/Header";
import style from "@/src/styles/Home.module.css";
import {useState} from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  
  console.log("レンダリング！")
  function handleClick(e) {
    setCount(curr => curr + 1);
    e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header/>
      <div className={style.index_center}>
        <h1>{count}</h1><br/>
        <button
          onClick={handleClick}>ボタン
        </button>
      </div>
      <Main page={"index"}/>
    </>
  )
}
