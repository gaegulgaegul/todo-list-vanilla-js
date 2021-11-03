/**
 * 외부에서 전달받은 render 정보를 페인팅한다.
 *
 * @param rootComponent
 * @param root
 */
export const render = (rootComponent, root) => {
    if (!root || !rootComponent) return;
    root.innerHTML = rootComponent();
};