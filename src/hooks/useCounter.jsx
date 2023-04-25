import {useCallback, useMemo, useState} from "react";


export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShowCount, setShowCount] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = useCallback((e) => {
    setCount(curr => curr + 1);
    e.preventDefault();
  }, []);

  const handleShowCount = useCallback(() => {
    setShowCount(curr => !curr)
  }, []);

  return {count, doubleCount, isShowCount, handleClick, handleShowCount};
}