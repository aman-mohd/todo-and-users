import React from 'react'

const TodoList = ({item, deletItem, editItem}) => {
  // console.log(item);
  return (
    <div className="item_add_edit">
          {<p>{item.title}</p>}
          <div className="add_rem_btn">
          <button onClick={()=>deletItem(item.id)}>Delet</button>
          <button onClick={()=>editItem(item.id)}>Edit</button>
          </div>
    </div>
  )
}

export default TodoList;