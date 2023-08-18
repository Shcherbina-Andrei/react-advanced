import { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button className={styles.btn} onClick={() => setCount(count + 1)}>increment</button>
      <button className={styles.red} onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};
