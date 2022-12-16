import '../App.css';

function List({list}) {
  return (
    <div className="List">
      {list.map((listItem) => (
        <ListItem reciepe={listItem.name}></ListItem>
      ))}
    </div>
  );
}

export default List;

function ListItem({reciepe}) {
  return (
    <div class="list-item">
      <div>
        <div class='item-primary-text'>{reciepe}</div>
      </div>
    </div>
  );
}