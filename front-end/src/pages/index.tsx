import styles from './index.less';
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    console.log('object');
  });
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
