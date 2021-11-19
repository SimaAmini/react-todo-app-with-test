import { useState } from 'react';

export const AddForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (title) {
      onSubmit(title);
      setTitle('');
    }
  };

  return (
    <form data-testid="add-form" className="add-form" onSubmit={handleSubmit}>
      <input
        data-testid="title"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button data-testid="button" type="submit">
        Submit
      </button>
    </form>
  );
};
