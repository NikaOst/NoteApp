import React from 'react';
import Button from '../ui/button';
import styles from './styles.module.css';

function NoteItem({ title = '', text = '' }) {
  return (
    <div className={styles.noteItem}>
      <h1>{title}</h1>
      <p>{text}</p>
      <div>
        <Button text={'Edit'} />
        <Button text={'Delete'} />
      </div>
    </div>
  );
}

export default NoteItem;
