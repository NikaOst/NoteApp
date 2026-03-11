import React, { useState } from 'react';
import Button from '../ui/button';
import styles from './styles.module.css';
import { connect } from 'react-redux';
import { editNote, deleteNote } from '../../redux/actions';

function NoteItem({ title = '', text = '', id = '', dispatch }) {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  const handleEditClick = () => {
    const newNote = {
      id: id,
      title: newTitle,
      text: newText,
    };
    dispatch(editNote(newNote));
    setEditMode(false);
  };

  const handleDeleteClick = () => {
    dispatch(deleteNote(id));
  };

  return (
    <div className={styles.noteItem}>
      {editMode ? (
        <div>
          <div className={styles.inputs}>
            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <input value={newText} onChange={(e) => setNewText(e.target.value)} />
          </div>

          <Button text={'Confirm'} onClick={handleEditClick} />
        </div>
      ) : (
        <div>
          <div className={styles.inputs}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <div className={styles.buttons}>
            <Button text={'Edit'} onClick={() => setEditMode(true)} />
            <Button text={'Delete'} onClick={handleDeleteClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export default connect()(NoteItem);
