import React from 'react';
import styles from './styles.module.css';

function SubmitBtn({ text }) {
  return (
    <input type="submit" className={styles.submitBtn} value={text} />
  );
}
export default SubmitBtn;
