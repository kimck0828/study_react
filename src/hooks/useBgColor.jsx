import {useCallback, useEffect} from "react";
import {useRouter} from "next/router";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useCallback( () => {
    switch (router.pathname) {
      case "/":
        return "lightblue"
      case "/about":
        return "beige"
      default:
        return ""
    }
  }, [router.pathname]);

  useEffect(() => {
    console.log("router.pathname", router.pathname)
    document.body.style.backgroundColor = bgColor();
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [bgColor]);
};
