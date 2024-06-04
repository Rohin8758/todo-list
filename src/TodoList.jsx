import React, { useRef, useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";

const TodoList = (props) => {
    const [editing, setEditing] = useState('');
    const [startDate, setStartDate] = useState('')
    const [endtDate, setEndDate] = useState('')
    const inputElement = useRef();

    let date1 = new Date(startDate);
    let date2 = new Date(endtDate);

    let Difference_In_Time = date2.getTime() - date1.getTime();

    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    // console.log(date1)
    // console.log(date2);
    // console.log(Difference_In_Days);

    const updateData = () => {
        setEditing(true)
        let oldval = props.item
        const updatedValue = prompt("Please enter your new Value:", oldval)
        // console.log(editing);
        setEditing(updatedValue)
    }
    const taskcompleted = () => {
        inputElement.current.style.backgroundColor = "green"
    }

    return (
        <>
            <div className="d-flex my-3 container">
                <li className='list-item text-start' ref={inputElement}>
                    {(editing === '') ? (props.item) : (editing)}
                </li>
                <button className='btn-update mx-1'><MdEdit className='delete-icon' onClick={() => { updateData() }} /></button>
                <button className='btn-delete mx-1'
                    onClick={(e) => props.deleteItem(props.index)}><MdDelete className='delete-icon' /></button>
                <div className="task-complete d-flex align-items-center mx-3">
                    <input type="checkbox" id="check-complete" onClick={() => { taskcompleted() }} />
                    <label> TaskCompleted ?</label>
                </div>
                <div className='d-flex align-items-center mx-3 set-date'>
                    <span>Starting Date</span>
                    <input type="date" name="" id="" className='date' onChange={(e) => { setStartDate(e.target.value) }} />
                </div>
                <div className='d-flex align-items-center mx-3 set-date'>
                    <span>Ending Date</span>
                    <input type="date" name="" id="" className='date' onChange={(e) => { setEndDate(e.target.value) }} />
                    <p>Diiff : {Difference_In_Days}</p>
                </div>
            </div>
        </>
    )
}

export default TodoList;