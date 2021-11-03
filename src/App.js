import TodoList from "./components/TodoList.js";

/**
 * todolist HTML element 설정
 * @returns {string}
 * @constructor
 */
export const App = () => `
    <div>
        ${TodoList()}
    </div>
`;