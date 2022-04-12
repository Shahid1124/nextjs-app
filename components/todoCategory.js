import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil, faCircleCheck, faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Home.module.scss'


function TodoCategory(props) {
    // Icons List
    const check = <FontAwesomeIcon icon={faCircleCheck} />
    const edit = <FontAwesomeIcon icon={faPencil} />
    const dell = <FontAwesomeIcon icon={faTrash} />
    const done = <FontAwesomeIcon icon={faCheck} />
    return (
        <div className={`${styles.catParenDiv} ${styles.grid}`}>
            <div className={styles.card}>
                <h3>Professional</h3>
                <ul className={styles.taskList__ul}>
                    {props.createTask.filter(data => data.category === 'Professional').map(element => (
                        <div key={element.id} >
                            {props.editTask === element.id ? (
                                <div className="inputDiv">
                                    <input className="inputDiv__filed"
                                        type="text"
                                        onChange={props.editInputHandler}
                                        value={props.editingText}
                                        onKeyPress={(event) => props.submitKeypressHandler(element.id, event)}
                                    />
                                    <button className={`${styles.addBtn} ${styles.submitBtn}`} onClick={(event) => props.submitTaskHandler(element.id, event)}>{done}</button>
                                </div>
                            ) : (
                                <li className={element.completed ? styles.Active__task : styles.taskList__li} checked={element.completed}>
                                    <button className={styles.taskDonebtn} onClick={() => props.taskComplitionHandler(element.id)}>
                                        {check}
                                    </button><span>{element.text}</span>
                                    <button className={styles.editBtn} onClick={() => props.editTaskHandler(element.id)}>{edit}</button>
                                    <button className={styles.dellBtn} onClick={() => props.dellTaskHandler(element.id)}>{dell}</button>
                                </li>
                            )}

                        </div>
                    ))}
                </ul>
            </div>
            <div className={styles.card}>
                <h3>Personal</h3>
                <ul className={styles.taskList__ul}>
                    {props.createTask.filter(data => data.category === 'Personal').map(element => (
                        <div key={element.id} >
                            {props.editTask === element.id ? (
                                <div className="inputDiv">
                                    <input className="inputDiv__filed"
                                        type="text"
                                        onChange={props.editInputHandler}
                                        value={props.editingText}
                                        onKeyPress={(event) => props.submitKeypressHandler(element.id, event)}
                                    />
                                    <button className={`${styles.addBtn} ${styles.submitBtn}`} onClick={(event) => props.submitTaskHandler(element.id, event)}>{done}</button>
                                </div>
                            ) : (
                                <li className={element.completed ? styles.Active__task : styles.taskList__li} checked={element.completed}>
                                    <button className={styles.taskDonebtn} onClick={() => props.taskComplitionHandler(element.id)}>
                                        {check}
                                    </button><span>{element.text}</span>
                                    <button className={styles.editBtn} onClick={() => props.editTaskHandler(element.id)}>{edit}</button>
                                    <button className={styles.dellBtn} onClick={() => props.dellTaskHandler(element.id)}>{dell}</button>
                                </li>
                            )}

                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoCategory
