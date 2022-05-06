/* eslint-disable @typescript-eslint/no-non-null-assertion */

import styleText from "./my-comment.css";

export class MyComment extends HTMLElement {
    constructor() {
        super();
    }

    public connectedCallback(): void {
        const template: HTMLTemplateElement | null = document.querySelector("#comment-template");
        const element = template?.content?.cloneNode(true) as HTMLElement;
        if (element) {
            element.querySelector("#date")!.innerHTML = this.getAttribute("data-date") ?? "";
            element.querySelector("#title")!.innerHTML = this.getAttribute("data-title") ?? "";
            element.querySelector("#author")!.innerHTML = `by ${this.getAttribute("data-author")}`;
            element.querySelector("#content")!.innerHTML = this.getAttribute("data-content") ?? "";

            const style = document.createElement("style");
            style.innerHTML = styleText;

            const shadow = this.attachShadow({ mode: "open" });
            shadow.appendChild(style);
            shadow.appendChild(element);
        }
    }
}
