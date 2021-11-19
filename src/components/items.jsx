import { Item } from './item';

export const Items = ({ list, onToggle, onDelete }) => {
  return (
    <div data-testid="items">
      {(list || []).map(item => (
        <Item
          data={item}
          key={item.id}
          onToggle={() => onToggle(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </div>
  );
};
