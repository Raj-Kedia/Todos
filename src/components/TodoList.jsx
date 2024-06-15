import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos} = props
    return (
        <ul className='main'>
            {todos.map((todo, todosIndex)=>{
                return (
                    <TodoCard {...props} key={todosIndex} index={todosIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
                
            })}
        </ul>
    )
}