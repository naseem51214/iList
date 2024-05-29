import React,{useState,useEffect} from "react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";

import { v4 as uuidv4 } from 'uuid';
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

export default function TodoList() {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [showFinished, setShowFinished] = useState(false)

    const saveToLocalStorage = () => {
      localStorage.setItem("todos",JSON.stringify(todos))
    }

    useEffect(() => {
      let todoString = localStorage.getItem("todos")
      if(todoString){

        let todos = JSON.parse(localStorage.getItem("todos")); 
        setTodos(todos)
      }
    }, [])
    
    

    const handleEdit = (e,id)=>{
        let t=todos.filter(i=>i.id===id)
        setTodo(t[0].todo)

        let newTodos = todos.filter(item=>{
          return item.id!=id;
        });
        setTodos(newTodos)
        saveToLocalStorage();

    }

    const handleDelete = (e,id)=>{

      let newTodos = todos.filter(item=>{
        return item.id!=id;
      });
      setTodos(newTodos)
      saveToLocalStorage()

    }
    const handleAdd = ()=>{
        setTodos([...todos,{id: uuidv4(), todo, isCompleted :false}]);
        setTodo("");  
        saveToLocalStorage()

    }
    const handleChange = (e)=>{
       setTodo(e.target.value) 

    }
    const handleCheck = (e) => {
      let id = e.target.name;
  
      let index = todos.findIndex(item=>{
        return item.id=== id;
        
      })

     
      
      
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos)
      saveToLocalStorage()
    }
    
    const toggleFinished = () => {
        setShowFinished(!showFinished)
    }

  return ( 
    <>
    <div className="md:container mx-3 md:mx-auto my-5 p-5 rounded-xl bg-red-200 min-h-[80vh]  md:w-1/2">
      <h1 className="font-bold text-center text-xl">iList - Manage your todos at one place</h1>
      <div className="addTodo my-5 flex flex-col gap-5">
        <h2 className="text-lg font-bold">Add to ToDo</h2>
        <div className="flex justify-end mx-2 gap-1">
        <input onChange={handleChange} value={todo} type="text" className="w-full rounded-lg px-5 py-1 " />
        
          <button onClick={handleAdd} disabled={todo.length<1} className="  disabled:bg-violet-700 bg-green-700 hover:bg-green-800 p-4 py-2 w-18 text-white text-sm font-bold rounded-full">
          Add
        </button>
        </div>
      </div>
      <input onChange={toggleFinished} type="checkbox" checked={showFinished} />
      <label className="mx-2" htmlFor="show">Show finished</label> 

      <div className="h-[1px] bg-black opacity-15 w-full mx-auto m-3"></div>
      <h1 className="text-lg font-bold">Your Todo List</h1>
      <div className="todos">
        {
            todos.length==0 && <div className="m-5">No Todos to display</div>
        }
        {todos.map(items=>{

        return ( (showFinished || !items.isCompleted) &&
        <div key={items.id} className="todo flex md:w-1/2 justify-between my-3">
          <div className="flex gap-5">

            <input name={items.id} onChange={handleCheck} type="checkbox" checked={todo.isCompleted} />
            <div className={items.isCompleted? "line-through":""}>
            {items.todo}
            </div>
          </div>
          <div className="buttons flex h-full">
            <button
              onClick={(e)=>{handleEdit(e, items.id)}}
              className="bg-green-700 hover:bg-green-800 p-3 py-1 mx-2 text-white text-sm font-bold rounded-md"
              >
               <TbEdit />
            </button>
            <button
              onClick={(e)=>{handleDelete(e,items.id)}}
              className="bg-green-700 hover:bg-green-800 p-3 py-1 mx-2 text-white text-sm font-bold rounded-md"
              >
              <MdDelete />
            </button>
          </div>
        </div>
        )})}
      </div>
      
    </div>
</>
  );
}
