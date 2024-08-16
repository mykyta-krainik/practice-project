import { useState } from 'react';

import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <h1 className={styles.h1}>{count}</h1>
      <button className={styles.button} type="button" onClick={handleIncrement}>Increment</button>
      <button type="button" onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
