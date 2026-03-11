import NoteForm from '../noteForm';
import React from 'react';
import NoteList from '../noteList';
import styles from './styles.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <NoteForm />
      <NoteList />
    </div>
  );
}
export default Main;
