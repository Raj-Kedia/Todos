import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
function App() {

  const [todos, Settodos] = useState([])
  const [todoValue, setTodoValue] = useState("")

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newtodo){
    if(newtodo.trim()===''){ alert("Todo can't be blank")}
    else{
    const newTodolist = [...todos, newtodo.trim()]
    persistData(newTodolist)
    Settodos(newTodolist)}
  }

  function handleOnDelete(index){
    const newTodolist = todos.filter((todos, todosIndex)=>{
      return index!==todosIndex
    })
    persistData(newTodolist)
    Settodos(newTodolist)
  }

  function handleonEdit(index){
    const newTodovalue = todos[index]
    setTodoValue(newTodovalue)
    handleOnDelete(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    Settodos(localTodos)

  }, [])


  return (
    <>
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleonEdit={handleonEdit} handleOnDelete={handleOnDelete} todos={todos}/>
    </main>
    </>
  )
}

export default App
