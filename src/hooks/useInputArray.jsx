import {useCallback, useState} from "react";

export function useInputArray() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);


  const handleText = useCallback((e) => {
    console.log(`text:${text}, e.target.value:${e.target.value} `)
    if (e.target.value.length <= 10) {
      setText(e.target.value);
    }
  }, []);

  const handleAddText = useCallback((e) => {
    if (e.keyCode === 13 && text !== "") {
      // 以下のことをやってはいけない！
      // arrayはイミュータブルなので直接変更してはいけない
      // ちなみに以下のようにしてもレンダリングは実行されない
      // const arr = array;
      // arr.push(text);
      // setArray(arr);

      if (!array.some(val => val === text)) {
        setArray(curr => [...curr, text])
        setText("");
      }
    }
  }, [text]);

  return [text, array, handleText, handleAddText];
}