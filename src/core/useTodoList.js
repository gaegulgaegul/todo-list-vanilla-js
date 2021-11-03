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
        renderTodo();
    };
    /**
     * to-do 정보 변경 시 html 랜더링
     */
    const renderTodo = () => {
        const todoItems = document.querySelector('.todo-items');
        while (todoItems.hasChildNodes()) {
            todoItems.removeChild(todoItems.firstChild);
        }
        todos.forEach(item => todoItems.appendChild(Todo(item)));
    };

    /**
     * 완료된 to-do 정보 상태 관리
     * @type {*[]}
     */
    let completes = [];
    const setCompletes = (newState) => {
        if (JSON.stringify(newState) === JSON.stringify(completes)) return;
        completes = newState;
        localStorage.setItem('complete', JSON.stringify(newState));
        renderComplete();
    };
    /**
     * 완료된 to-do 정보 변경 시 html 랜더링
     */
    const renderComplete = () => {
        const completeItems = document.querySelector('.complete-items');
        while (completeItems.hasChildNodes()) {
            completeItems.removeChild(completeItems.firstChild);
        }
        completes.forEach(item => completeItems.appendChild(Complete(item)));
    };

    /**
     * LocalStorage에 저장된 정보가 존재하면 추가
     */
    const initTodoList = () => {
        const todo =  localStorage.getItem('todo');
        if (todo) setTodos(JSON.parse(todo));
        const complete =  localStorage.getItem('complete');
        if (complete) setCompletes(JSON.parse(complete));
    }

    /**
     * to-do 추가
     * @param event
     */
    const addTodo = (text) => {
        if (!text) return;
        setTodos([...todos, {id: new Date().toISOString(), text}]);
        console.log("todos [] => ", todos)
    };

    /**
     * 완료된 to-do 데이터 전달
     * @param id
     */
    const completeTodo = (id) => {
        const doneTodo = todos.find(item => item.id === id);
        setTodos(todos.filter(item => item.id !== id));
        setCompletes([...completes, doneTodo]);
    };

    /**
     * 다시 수행하는 to-do 데이터 전달
     * @param id
     */
    const replayTodo = (id) => {
        const replayTodo = completes.find(item => item.id === id);
        setCompletes(completes.filter(item => item.id !== id));
        setTodos([...todos, replayTodo]);
    };

    /**
     * to-do 삭제
     * @param id
     */
    const removeTodo = (id) => {
        if (todos.some(item => item.id === id)) {
            setTodos(todos.filter(item => item.id !== id));
            return;
        }
        setCompletes(completes.filter(item => item.id !== id));
    };

    return {
        initTodoList,
        addTodo,
        completeTodo,
        replayTodo,
        removeTodo
    };
};

export const { initTodoList, addTodo, completeTodo, replayTodo, removeTodo } = useTodoList();