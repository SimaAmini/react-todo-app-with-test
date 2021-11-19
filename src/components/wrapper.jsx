import { useState } from 'react';
import { AddForm } from './add-form';
import { Items } from './items';
import { uid } from 'uid';

export const Wrapper = () => {
  const [list, setList] = useState([]);

  const add = title => {
    setList(prev => [...prev, { id: uid(), title, isDone: false }]);
  };

  const toggle = id => {
    const clone = [...list];
    const index = clone.findIndex(c => c.id === id);
    if (index === -1) return;
    clone[index].isDone = !clone[index].isDone;
    setList(clone);
  };

  const remove = id => {
    const clone = [...list];
    const filtered = clone.filter(c => c.id !== id);
    setList(filtered);
  };

  return (
    <div data-testid="wrapper" className="wrapper">
      <AddForm onSubmit={add} />
      <Items list={list} onToggle={toggle} onDelete={remove} />
    </div>
  );
};
