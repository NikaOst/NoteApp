import React from 'react';
import { connect } from 'react-redux';
import NoteItem from '../noteItem';
import styles from './styles.module.css';

function NoteList({ todos = [] }) {
  return (
    <div className={styles.noteList}>
      {todos.map((todo, indx) => {
        return (
          <div key={indx}>
            {' '}
            <NoteItem title={todo.title} text={todo.text} />;
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
