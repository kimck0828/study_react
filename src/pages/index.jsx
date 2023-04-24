import Head from 'next/head'
import {Main} from "@/src/components/Main";
import {Header} from "@/src/components/Header";

export default function Index() {
  function handleClick(e) {
    console.log(e.target)
    e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header/>
      <a href={"/about"}
         onClick={handleClick}>ボタン
      </a>
      <Main page={"index"}/>
    </>
  )
}
