import Head from 'next/head'
import {Main} from "@/src/components/Main";
import {Header} from "@/src/components/Header";
import style from "@/src/styles/Home.module.css";
import {useCallback, useEffect, useState} from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect", count)
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("useEffect　アンマウント時", count)
      document.body.style.backgroundColor = "";
    }
  }, [count]);
  
  const handleClick = useCallback((e) => {
    setCount(curr => curr + 1);
    // setCount(count+1)
    e.preventDefault();
  },[count]);

  console.log("レンダリング！")
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
