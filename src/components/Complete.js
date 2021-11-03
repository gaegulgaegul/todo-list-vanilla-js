
/**
 * 완료된 to-do HTML element
 * @param id
 * @param text
 * @returns {HTMLLIElement}
 * @constructor
 */
export const Complete = ({id, text}) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'complete-checkbox';
    checkbox.defaultChecked = true;
    checkbox.id = id;

    const span = document.createElement('span');
    span.title = text;
    span.innerText = text;
    span.style.textDecoration = 'line-through';

    const remove = document.createElement('button');
    remove.className = 'remove';
    remove.id = id;
    remove.innerText = '삭제';

    const div = document.createElement('div');
    div.className = "complete-item-group";
    div.appendChild(checkbox);
    div.appendChild(span);
    div.appendChild(remove);

    const li = document.createElement('li');
    li.id = id;
    li.appendChild(div);
    return li;
};