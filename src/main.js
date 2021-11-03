import { render } from "./utils/render.js";
import { App } from './App.js'
import { initTodoList, addTodo, completeTodo, replayTodo, removeTodo } from "./core/useTodoList.js";

/**
 * todolist HTML element 페인팅
 */
render(App, document.querySelector('#app'));

/**
 * 초기 정보 세팅
 */
initTodoList();

/**
 * 이벤트 구분 정보
 */
const ADD_TODO = 'task';
const COMPLETE_TODO = 'todo-checkbox';
const REPLAY_TODO = 'complete-checkbox';
const REMOVE_TODO = 'remove';

/**
 * 키보드 문자열 입력 이벤트 바인딩
 */
document.addEventListener('keyup', ({key, target: {id, value}}) => {
    if (id === ADD_TODO) {
        if (key !== 'Enter') return;
        addTodo(value);
        const task = document.querySelector('#task');
        task.value = '';
    }
});

/**
 * 클릭 이벤트 바인딩
 */
document.addEventListener('click', ({target: {id, className}}) => {
    switch (className) {
        case COMPLETE_TODO:
            completeTodo(id);
            break;
        case REPLAY_TODO:
            replayTodo(id);
            break;
        case REMOVE_TODO:
            removeTodo(id);
            break;
    }
});
