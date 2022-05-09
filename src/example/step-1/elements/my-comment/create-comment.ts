import { createElement } from "./create-element";
import { Comment } from "../../data";

export const createComment = ({ date, title, author, content }: Comment): HTMLElement => {
    const result = createElement("div", "comment");
    result.appendChild(createHeader({ date, title, author }));
    result.appendChild(createContent(content));
    return result;
};

const createHeader = ({ date, title, author }: Partial<Comment>): HTMLElement => {
    const result = createElement("div", "header");
    result.appendChild(createElement("div", "date", date));
    result.appendChild(createElement("span", "title", title));
    result.appendChild(createElement("span", "author", ` by ${author}`));
    return result;
};

const createContent = (content: string) => createElement("div", "content", content);
