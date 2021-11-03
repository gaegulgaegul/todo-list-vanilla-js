import {Task} from "./Task.js";
import {ListArea} from "./ListArea.js";

/**
 * to-do list container HTML Element
 * @returns {string}
 * @constructor
 */
const TodoList = () => {
    return `
        <div class="container">
          <div class="contents">
            ${Task()}
            ${ListArea()}
          </div>
        </div>
    `;
};

export default TodoList;