import {useCallback, useState} from "react";


export function useCounter() {
  const [count, setCount] = useState(0);
  const [isShowCount, setShowCount] = useState(true);

  const handleClick = useCallback((e) => {
    setCount(curr => curr + 1);
    e.preventDefault();
  }, []);

  const handleShowCount = useCallback(() => {
    setShowCount(curr => !curr)
  }, []);

  return [count, isShowCount, handleClick, handleShowCount];
}