import { ToggleButton } from './toggle-button';
import { DeleteButton } from './delete-button';

export const Item = ({ data, onToggle, onDelete }) => (
  <div data-testid="item" className="item">
    <div
      data-testid="title-display"
      id="title-display"
      style={{ textDecoration: data.isDone ? 'line-through' : 'none' }}
    >
      {data.title}
    </div>
    <div className="actions">
      <ToggleButton isDone={data.isDone} onToggle={onToggle} />
      <DeleteButton onDelete={onDelete} />
    </div>
  </div>
);
