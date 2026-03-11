import React from 'react';
import styles from './styles.module.css';
import { connect } from 'react-redux';
import SubmitBtn from '../ui/submit';
import { useForm } from 'react-hook-form';
import { addNote } from '../../redux/actions';

function NoteForm({ dispatch }) {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onChange',
  });

  const addNewNote = (data) => {
    const note = {
      title: data.title,
      text: data.text,
    };
    dispatch(addNote(note));
    reset();
  };

  return (
    <form className={styles.noteForm} onSubmit={handleSubmit(addNewNote)}>
      <input
        {...register('title', { required: 'Поля не могут быть пустыми' })}
        type="text"
        placeholder="Title note..."
      />
      <textarea
        {...register('text', { required: 'Поля не могут быть пустыми' })}
        name="text"
        id="text-area"
        placeholder="Some text..."></textarea>
      <SubmitBtn text={'Add Note'} />
    </form>
  );
}
export default connect()(NoteForm);
