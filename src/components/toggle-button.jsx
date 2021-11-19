export const ToggleButton = ({ isDone, onToggle }) => {
  return (
    <button data-testid="toggle-button" onClick={onToggle}>
      {isDone ? 'unDone' : 'Done'}
    </button>
  );
};
