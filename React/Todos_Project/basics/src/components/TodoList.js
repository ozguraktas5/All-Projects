import React from 'react'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckBox from './CheckBox'
const TodoList = ({list, remove}) => {
  return (
    <>
        {list?.length > 0 ? (
            <ul className='todo-list'>
                {list.map((entry, index) => (
                    <div className='todo'>
                        <li key={index}>{entry}</li>
                        <CheckBox />
                        <button className='delete-button' onClick={() => {remove(entry);}}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                ))}
            </ul>
        ) : (
                <div className='empty'>
                    <p>Empty</p>
                </div>
            )}
    </>
  );
};

export default TodoList