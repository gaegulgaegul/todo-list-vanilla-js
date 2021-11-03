import { Todo } from "../components/Todo.js";
import { Complete } from "../components/Complete.js";

/**
 * todolist custom hooks
 * @returns {{completeTodo: completeTodo, removeTodo: (function(*): (undefined)), replayTodo: replayTodo, initTodoList: initTodoList, addTodo: (function(*=): (undefined))}}
 */
const useTodoList = () => {
    /**
     * to-do 정보 상태 관리
     * @type {*[]}
     */
    let todos = [];
    const setTodos = (newState) => {
        if (JSON.stringify(newState) === JSON.stringify(todos)) return;
        todos = newState;
        localStorage.setItem('todo', JSON.stringify(newState));
        render();
    };
    /**
     * to-do 정보 변경 시 html 랜더링
     */
    const render = () => {
        const todoItems = document.querySelector('.todo-items');
        while (todoItems.hasChildNodes()) {
            todoItems.removeChild(todoItems.firstChild);
        }
        todos.filter(item => !item.finish).forEach(item => todoItems.appendChild(Todo(item)));

        const completeItems = document.querySelector('.complete-items');
        while (completeItems.hasChildNodes()) {
            completeItems.removeChild(completeItems.firstChild);
        }
        todos.filter(item => item.finish).forEach(item => completeItems.appendChild(Complete(item)));
    };

    /**
     * LocalStorage에 저장된 정보가 존재하면 추가
     */
    const initTodoList = () => {
        const todo =  localStorage.getItem('todo');
        if (todo) setTodos(JSON.parse(todo));
    }

    /**
     * to-do 추가
     * @param event
     */
    const addTodo = (text) => {
        if (!text) return;
        setTodos([...todos, { id: new Date().toISOString(), text, finish: false }]);
    };

    /**
     * 완료된 to-do 데이터 전달
     * @param id
     */
    const completeTodo = (id) => setTodos(todos.map(item => item.id === id ? ({ ...item, finish: true }) : item));

    /**
     * 다시 수행하는 to-do 데이터 전달
     * @param id
     */
    const replayTodo = (id) => setTodos(todos.map(item => item.id === id ? ({ ...item, finish: false }) : item));;

    /**
     * to-do 삭제
     * @param id
     */
    const removeTodo = (id) => setTodos(todos.filter(item => item.id !== id));

    return {
        initTodoList,
        addTodo,
        completeTodo,
        replayTodo,
        removeTodo
    };
};

export const { initTodoList, addTodo, completeTodo, replayTodo, removeTodo } = useTodoList();