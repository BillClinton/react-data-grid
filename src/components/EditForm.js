import React, { useContext } from 'react';
import useForm from 'react-hook-form';
import { GridContext } from './grid/DataGrid';
import { UserStore } from '../contexts/UserStore';
import FormErrorMessage from './FormErrorMessage';
import './Form.scss';

const UserEditForm = () => {
  const { store } = useContext(UserStore);
  const { editIndex, setEditIndex } = useContext(GridContext);

  let rec = store.data[editIndex];
  const form = useForm({ defaultValues: rec });

  const onSubmit = (data, e) => {
    e.preventDefault();
    store.update(rec.id, data);
  };

  const onCancelClick = () => {
    setEditIndex(-1);
  };

  return (
    <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <div>
        <input
          name="email"
          type="text"
          ref={form.register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address'
            }
          })}
        />
        <FormErrorMessage errors={form.errors} fieldName="email" />
      </div>

      <label htmlFor="phone">Phone</label>
      <div>
        <input
          name="phone"
          type="text"
          ref={form.register({
            required: 'Required'
          })}
        />
        <FormErrorMessage errors={form.errors} fieldName="phone" />
      </div>

      <label htmlFor="website">Website</label>
      <div>
        <input
          name="website"
          type="text"
          ref={form.register({
            required: 'Required'
          })}
        />
        <FormErrorMessage errors={form.errors} fieldName="website" />
      </div>

      <div className="buttons">
        <button className="submit">Submit</button>
        <button className="cancel" onClick={onCancelClick}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserEditForm;
