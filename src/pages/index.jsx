import Head from 'next/head'
import {Main} from "@/src/components/Main";
import {Header} from "@/src/components/Header";
import style from "@/src/styles/Home.module.css";
import {useCallback, useEffect, useState} from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShowCount, setShowCount] = useState(true);
  const [array, setArray] = useState([]);

  useEffect(() => {
    // console.log("useEffect", count)
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // console.log("useEffect　アンマウント時", count)
      document.body.style.backgroundColor = "";
    }
  }, [count]);

  const handleClick = useCallback((e) => {
    setCount(curr => curr + 1);
    e.preventDefault();
  }, []);

  const handleText = useCallback((e) => {
    console.log(`text:${text}, e.target.value:${e.target.value} `)
    if (e.target.value.length <= 10) {
      setText(e.target.value);
    }
  }, []);

  const handleShowCount = useCallback(() => {
    setShowCount(curr => !curr)
  }, []);

  const handleAddText = useCallback((e) => {
    if (e.keyCode === 13 && text != "") {
      // 以下のことをやってはいけない！
      // arrayはイミュータブルなので直接変更してはいけない
      // ちなみに以下のようにしてもレンダリングは実行されない
      // const arr = array;
      // arr.push(text);
      // setArray(arr);

      if (!array.some(val => val === text)) {
        setArray(curr => {
          return [...curr, text]
        })
      }
      setText("");
    }
  }, [text]);


  console.log("レンダリング！")

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header/>
      <div className={style.index_center}>
        <h1>{isShowCount ? count : null}</h1>
        <div>
          <button
            onClick={handleClick}>ボタン
          </button>
          &nbsp;&nbsp;
          <button onClick={handleShowCount}>
            {isShowCount ? "カウント非表示" : "カウント表示"}
          </button>
        </div>
        <br/>
        <div>
          <input type={"text"} value={text} onChange={handleText} onKeyDown={handleAddText}/>
        </div>
        <ul>
          {
            array.map((item, idx) => {
              return (
                <li key={idx}>{item}</li>
              )
            })
          }
        </ul>
      </div>
      <Main page={"index"}/>
    </>
  )
}
