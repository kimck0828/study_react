import {useEffect} from "react";

export const useBgColor = () => {
  useEffect(() => {
    // console.log("useEffect", count)
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // console.log("useEffect　アンマウント時", count)
      document.body.style.backgroundColor = "";
    }
  }, []);
};
