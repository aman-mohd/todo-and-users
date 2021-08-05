import React, { useState, useEffect } from 'react'
import "./Todo.css"
import TodoList from './TodoList';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

const Todos = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);

  //Adding new Items to the list
  const submitHandle = (e) => {    
    if (value && isEditing) {
      setList(
        list.map(
          (item) => {
            if (item.id === editID){
              return {...item, title:value};
            }
            setValue('');
            return item;
          }
        )
      )
    }

    else if (value) {
      e.preventDefault();
      const newItem = { id: new Date().getTime().toString(), title: value };
      setList([...list, newItem]);
      setValue('');
    }
  }

  //fetching list data from local storage everytime page relods and everytime list chnages
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  //Clearing all items of the list
  const clearList = () => {
    setList([]);
    setValue('');
  };

  // To delet individual item
  const deletItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  }

  //function to edit item entry
  const editItem = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    setIsEditing(!isEditing);
    setEditId(id);
    setValue(itemToEdit.title)
  }

  return (
    <div className="container">
      <div className="app_main">
        <h1 className="main_head">Todo App</h1>
        <form className="form_field" onSubmit={submitHandle} action="">
          <input type="text" value={value} placeholder="e.g. milk" onChange={(e) => { setValue(e.target.value) }} />
          <button type="submit">{isEditing ? "Edit" : "Add"}</button>
        </form>
        {list.length > 0 &&
          (list.map(item =>
            <TodoList
              key={item.id}
              item={item}
              deletItem={deletItem}
              editItem={editItem} 
            />)
          )
        }
        <button onClick={clearList}>Clear All!</button>
      </div>
    </div>
  )
}

export default Todos
