import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoInput from './TodoInput';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText])
    }else{
      alert("Please Enter Valid Todo Item")
    }
  }

  const deleteTodo = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (
    <>
      <div className='container'>
        <TodoInput addList={addList} />
        <h1 className='heading'>TODO List Table:</h1>
        {
          listTodo.map((item, i) => {
            return (
              <>
                {/* {console.log(i)} */}
                <TodoList key={i} index={i} item={item} deleteItem={deleteTodo} />
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;