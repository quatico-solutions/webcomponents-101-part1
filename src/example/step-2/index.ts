/* eslint-disable no-console */
import { Comment, loadData } from "./data";
import { MyComment } from "./elements";

import "./theme.css";

loadData()
    .then((comments: Comment[]) => {
        customElements.define(
            "my-comment-list",
            class extends HTMLElement {
                constructor() {
                    super();
                }

                connectedCallback() {
                    const template = document.querySelector<HTMLTemplateElement>("#comment-list-template")?.content;
                    if (template) {
                        this.appendChild(document.importNode(template, true));
                    }

                    // Loop through each of the comments and add them to the comments section
                    const section = document.querySelector("#comments-section");
                    if (section) {
                        comments.forEach(({ date, title, author, content }: Comment) => {
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
        );
        customElements.define("my-comment", MyComment);
    })
    .catch(error => console.error(error));
