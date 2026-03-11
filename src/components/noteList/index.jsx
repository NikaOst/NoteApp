import React from 'react';
import { connect } from 'react-redux';
import NoteItem from '../noteItem';
import styles from './styles.module.css';

function NoteList({ todos = [] }) {
  return (
    <div className={styles.noteList}>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <NoteItem title={todo.title} text={todo.text} id={todo.id} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(NoteList);
