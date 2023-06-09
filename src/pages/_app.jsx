import '@/src/styles/globals.css'
import Head from "next/head";
import {useCounter} from "@/src/hooks/useCounter";
import {useInputArray} from "@/src/hooks/useInputArray";
import {useBgColor} from "@/src/hooks/useBgColor";

export default function App({ Component, pageProps }) {
  useBgColor();
  
  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Users/kim_ck/Desktop/Frontコーディング/nextjs/ver12/public/favicon.ico" />
      </Head>
      <Component {...pageProps} {...useCounter()} {...useInputArray()}/>
    </div>
  )
}
