import React, {useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "./TodoApp.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';



const TodoApp = () => {
  const [item, setItem] = useState("");
  const [todoItem, setTodoItem] = useState(["Apple", "Orange", "Banana"]);
  const [hideBtn, setHideBtn] = useState(false);
  const [index2, setIndex2] = useState(0);

  const addTodoItem = () => {
    setTodoItem([...todoItem, item]);
    setItem("");
  };

  const deleteItem = (index) => {
    const newTodoItem = [...todoItem];
    newTodoItem.splice(index, 1);
    setTodoItem(newTodoItem);
  };

  const editItemHandler = (index) => {
    setHideBtn(true)
    const newTodoItem = todoItem[index];
    setItem(newTodoItem);
    setIndex2(index);
  };

  const updateTodoItem = (index) => {
    const newTodoItem = [...todoItem];
    newTodoItem[index] = item;
    setTodoItem(newTodoItem);
    setHideBtn(false)
    setItem("")
  };

  const removeTodo = () => {
    setTodoItem([]);
  };
 
  return (
    <div className="container todo-container">
        <br />
      <h1 className="text-center ">Todo Application</h1>
      <div className="container">
        <br />
        <TextField id="outlined-basic" className="input-field" label="Todo Item" variant="outlined"  value={item}
          onChange={(e) => setItem(e.target.value)} sx={{ width: '100%', bgcolor: 'background.paper',mb:2 }}/>
        <br />
        {hideBtn? 
          <Button variant="contained" className="todo-btn" onClick={()=>updateTodoItem(index2)} sx={{ width: '100%',mb:2 }}>Update Todo</Button>
          :
          <Button variant="contained" className="todo-btn" onClick={addTodoItem} sx={{ width: '100%',mb:2 }}>Add Todo</Button>
        }
        <div>
          <List sx={{ width: '100%', bgcolor: 'background.paper',border:'1px solid #001a5a7c',borderRadius:"2px",mt:2 }}>
            {todoItem.map((val, index) => {
              return (
                
<>
            
                <ListItem key={index} sx={{ padding:2}} >
                  <ListItemButton sx={{ width: '100%'}} className="todo-list" >
                    
                    <ListItemText primary={val} sx={{ width: '100%'}} />

                    <IconButton edge="end" aria-label="comments" onClick={()=>{editItemHandler(index)}}>
                      <EditNoteIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="comments" onClick={()=>deleteItem(index)}>
                      <DeleteIcon />
                    </IconButton>

                    
                  </ListItemButton>
                    
                </ListItem>
            </>
              ); 
            })}
          </List>
          <br />
          <Button variant="contained" className="todo-btn" onClick={removeTodo} sx={{ width: '100%',mb:2 }}>Remove All</Button>

        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TodoApp;
