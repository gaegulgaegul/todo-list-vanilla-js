
/**
 * to-do 정보가 입력될 위치 HTML element
 * @returns {string}
 * @constructor
 */
export const ListArea = () => {
    return `
        <section class="list-area">
          <div class="todo-area">
            <h1>할 일</h1>
            <ul class="todo-items"></ul>
          </div>
          <div class="complete-area">
            <h1>완료한 일</h1>
            <ul class="complete-items"></ul>
          </div>
        </section>
    `;
};