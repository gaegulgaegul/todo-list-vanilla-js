import {Task} from "./Task.js";
import {ListArea} from "./ListArea.js";

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