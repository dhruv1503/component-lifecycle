import { ListItem } from "./ListItem";

export const List = ({
  listItems = [],
  onDeleteClick = () => {},
  onEditClick = () => {},
  onCancelClick = () => {},
  onApplyChangeClick = () => {}
}) => {
  return (
    <ul>
      {listItems ? (
        listItems.map((item, index) => {
          console.log("from list => " ,item)
          return <ListItem
            key={item.id}
            item={item}
            onDeleteClick={() => {onDeleteClick(item.title)}}
            onEditClick={() => {onEditClick(item.title)}}
            onCancelClick={() => {onCancelClick(item.title)}}
            onApplyChangeClick={(newName) => {onApplyChangeClick([item.title,newName])}}
          />
        })
      ) : (
        <></>
      )}
    </ul>
  )
};
