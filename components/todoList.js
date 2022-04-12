import React from 'react'
import styles from '../styles/Home.module.scss'

function TodoList() {
    return (
        <div className="taskList">
            <ul className={styles.taskList__ul}>
                {createTask.map((element) => {
                    return (
                        <div key={element.id} >
                            {editTask === element.id ? (
                                <div className="inputDiv">
                                    <input className="inputDiv__filed"
                                        type="text"
                                        onChange={editInputHandler}
                                        value={editingText}
                                        onKeyPress={(event) => submitKeypressHandler(element.id, event)}
                                    />
                                    <button className="addBtn submitBtn" onClick={(event) => submitTaskHandler(element.id, event)}><i className="fas fa-check" ></i></button>
                                </div>
                            ) : (
                                <div className={(element.category == 'Professional') ? 'Professional-cat' : 'Personal-cat'}>
                                    <li className={element.completed ? "Active--task" : "taskList__li"} checked={element.completed}>
                                        <button className='taskDonebtn' onClick={() => taskComplitionHandler(element.id)}>
                                            {check}
                                        </button><span>{element.text}</span>
                                        <button className="editBtn" onClick={() => editTaskHandler(element.id)}>{edit}</button>
                                        <button className="dellBtn" onClick={() => dellTaskHandler(element.id)}>{dell}</button>
                                    </li>
                                </div>
                            )}

                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList
