// title, 2 buttons, click, - edit , delete

import { useState } from "react";

export const ListItem = ({
  item = { id: 0, title: "", isEditMode: false },
  onDeleteClick = () => {},
  onEditClick = () => {},
  onApplyChangeClick = () => {},
  onCancelClick = () => {},
}) => {
  const [input, setInput] = useState(item.title);
  const preventNullTitleEdit = () => {
    if (!input) {
      alert("Task title cannot be empty");
    } else {
      onApplyChangeClick(input);
    }
  };
  return (
    <li>
      {item && item.isEditMode ? (
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      ) : (
        item?.title
      )}

      {item?.isEditMode ? (
        <>
          <button onClick={preventNullTitleEdit}>Apply Changes</button>
          <button onClick={onCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={onEditClick}>Edit</button>
          <button onClick={onDeleteClick}>Delete</button>
        </>
      )}
    </li>
  );
};
