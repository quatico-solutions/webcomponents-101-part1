import { createElement } from "./create-element";
import { Comment } from "../../data";

export const createComment = ({ date, title, author, content }: Comment): HTMLElement => {
    const result = createElement("div", "comment");
    result.appendChild(createHeader({ date, title, author }));
    result.appendChild(createContent(content));
    return result;
};

const createHeader = ({ date, title, author }: Partial<Comment>): HTMLElement => {
    const header = createElement("div", "header");
    header.appendChild(createElement("div", "date", date));
    header.appendChild(createElement("span", "title", title));
    header.appendChild(createElement("span", "author", ` by ${author}`));
    return header;
};

const createContent = (content: string): HTMLElement => {
    return createElement("div", "content", content);
};
