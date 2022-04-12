import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import TodoForm from './todoForm'
// import TodoList from './todoList'
import TodoCategory from '../components/todoCategory'

export default function Todo({ todoData }) {
    // Icons List
    const check = <FontAwesomeIcon icon={faCircleCheck} />
    const edit = <FontAwesomeIcon icon={faPencil} />
    const dell = <FontAwesomeIcon icon={faTrash} />




    const [inputText, setText] = useState('');
    const [createTask, setTask] = useState([], () => {
        const saved = localStorage.getItem("todo");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [inputCategory, setInputCategory] = useState('Personal');
    // const [profTask, setProfTask] = useState([]);
    // const [perTask, setPerTask] = useState([]);
    const [editTask, setEditTask] = useState(null);
    const [editingText, setEditingText] = useState('');



    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 10000) + 1,
            text: inputText,
            completed: false,
            category: inputCategory,

        };
        if (inputText.length != 0) {
            setTask([...createTask, newTask]);

            setText('');
        }

    }

    const dellTaskHandler = (id) => {
        let remainingTask;
        if (window.confirm('Delete This Item ?')) {
            remainingTask = createTask.filter((element) => {
                return element.id !== id
            })
        } else {
            return createTask;
        }

        setTask(remainingTask);
    }

    const taskComplitionHandler = (id) => {
        // console.log(id);
        const elemId = createTask.map((element) => {
            if (element.id === id) {
                element.completed = !element.completed;
            }
            return element;
        })
        setTask(elemId);
    }

    const editTaskHandler = (id) => {
        setEditTask(id);
        const taskToEdit = createTask.find((element) => element.id === id)
        setEditingText(taskToEdit.text);
    }

    const editInputHandler = (event) => {
        setEditingText(event.target.value);
    }

    const submitTaskHandler = (id) => {
        const updatedTask = createTask.map((element) => {
            if (element.id === id) {
                element.text = editingText
            }
            return element;
        })

        setTask(updatedTask);
        setEditTask("")
    }
    const submitKeypressHandler = (id, event) => {
        if (event.key === 'Enter') {
            submitTaskHandler(id);
        }
    }

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(createTask));
    }, [createTask])

    return (
        <div className="todoBox">
            <TodoForm
                inputText={inputText} setText={setText}
                inputCategory={inputCategory} setInputCategory={setInputCategory}
                onsubmit={formSubmitHandler}
            />
            {/* <TodoList /> */}
            <TodoCategory
                createTask={createTask}
                setTask={setTask}
                editTask={editTask}
                editingText={editingText}
                editInputHandler={editInputHandler}
                submitKeypressHandler={submitKeypressHandler}
                submitTaskHandler={submitTaskHandler}
                taskComplitionHandler={taskComplitionHandler}
                editTaskHandler={editTaskHandler}
                dellTaskHandler={dellTaskHandler}
            />
            {/* <p className="remainingtask">There {completedTask.length} is pending task</p> */}
        </div>
    )
}
