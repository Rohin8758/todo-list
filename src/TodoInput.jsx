import React, { useState } from 'react'

const TodoInput = (props) => {
    const [inputText, setinputText] = useState('');
    return (
        <>
            <div className="container input-todo my-5">
                <div className='text-start input-label my-3'>
                    <label htmlFor="input">Enter Task :</label>
                </div>
                <input type="text" className='input' placeholder='Enter Your Todo'
                    onChange={(e) => { setinputText(e.target.value) }}
                    value={inputText} />
                <button className='mx-1'
                    onClick={() => { props.addList(inputText)
                    setinputText("") }}>Add</button>
            </div>
        </>
    )
}

export default TodoInput;