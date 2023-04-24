import Head from 'next/head'
import {Main} from "@/src/components/Main";
import {Header} from "@/src/components/Header";
import style from "@/src/styles/Home.module.css";

export default function About({
                                count,
                                isShowCount,
                                handleClick,
                                handleShowCount,
                                text,
                                array,
                                handleText,
                                handleAddText
                              }) {

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header/>
      <div className={style.index_center}>
        <h1>{isShowCount ? count : null}</h1>
        <div>
          <button onClick={handleClick}>
            ボタン
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
      <Main page={"about"}/>
    </>
  )
}
