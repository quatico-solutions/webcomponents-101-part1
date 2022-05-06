export const createElement = (tag: string, className: string, content?: string) => {
    const result = document.createElement(tag);
    result.setAttribute("class", className);
    if (content) {
        result.innerHTML = content;
    }
    return result;
};
