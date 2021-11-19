export const DeleteButton = ({ onDelete }) => {
  return (
    <button data-testid="delete-button" onClick={onDelete}>
      Delete
    </button>
  );
};
