import { Comment } from "../../data";

export class MyCommentList extends HTMLElement {
    constructor() {
        super();
    }

    public connectedCallback(): void {
        const template = document.querySelector<HTMLTemplateElement>("#comment-list-template")?.content;
        if (template) {
            this.appendChild(document.importNode(template, true));
        }
        const comments = JSON.parse(this.getAttribute("data-comments") || "[]") as Comment;

        // Loop through each of the comments and add them to the comments section
        const section = document.querySelector("#comments-section");
        if (section) {
            [comments].forEach(({ date, title, author, content }: Comment) => {
                section.innerHTML += `
                    <my-comment 
                        data-date="${date}" 
                        data-author="${author}" 
                        data-title="${title}" 
                        data-content="${content}">
                    </my-comment>`;
            });
        }
    }
}
