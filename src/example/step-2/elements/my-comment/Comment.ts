/* eslint-disable @typescript-eslint/no-non-null-assertion */
export class Comment extends HTMLElement {
    constructor() {
        super();
        this.className = "comment";
    }

    public connectedCallback(): void {
        const template: HTMLTemplateElement | null = document.querySelector("#comment-template");
        const element = template?.content?.cloneNode(true) as HTMLElement;
        if (element) {
            element.querySelector("#date")!.innerHTML = this.getAttribute("data-date") ?? "";
            element.querySelector("#title")!.innerHTML = this.getAttribute("data-title") ?? "";
            element.querySelector("#author")!.innerHTML = `by ${this.getAttribute("data-author")}`;
            element.querySelector("#content")!.innerHTML = this.getAttribute("data-content") ?? "";

            this.appendChild(element);
        }
    }
}

customElements.define("my-comment", Comment);
