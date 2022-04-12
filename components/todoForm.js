import React from 'react'
import styles from '../styles/Home.module.scss'

function TodoForm(props) {
    return (
        <div className={styles.inputDiv}>
            <form onSubmit={props.onsubmit}>
                <label className="inputLabel" htmlFor="inputField">Add Your Todo</label>
                <div className={styles.formDiv}>
                    <input className={styles.inputDiv__filed} type="text"
                        value={props.inputText} id="inputField"
                        placeholder='Enter task to do'
                        onChange={(event) => props.setText(event.target.value)}
                    />
                    <select className={styles.category}
                     value={props.inputCategory} 
                     onChange={(event) => props.setInputCategory(event.target.value)}>
                        <option value="Professional">Professional</option>
                        <option value="Personal">Personal</option>
                    </select>
                </div>
                <button className={styles.addBtn}><span className="addbtn_span">Add task</span></button>
            </form>
        </div>
    )
}

export default TodoForm
