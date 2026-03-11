import React from 'react';
import styles from './styles.module.css';

function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}
export default Button;
