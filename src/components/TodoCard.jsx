import React from 'react'

export default function TodoCard(props) {
    const {children, handleOnDelete, index, handleonEdit} = props
    return (
        <li className='todoItem'>
            {children}
            <div className="actionsContainer">
                <button onClick={()=>{handleonEdit(index)}}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={()=>{handleOnDelete(index)}}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}
