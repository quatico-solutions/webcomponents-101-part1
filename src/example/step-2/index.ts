/* eslint-disable no-console */
import { Comment, loadData } from "./data";
import "./elements";

import "./theme.css";

loadData()
    .then((comments: Comment[]) => {
        customElements.define(
            "my-comment-list",
            class extends HTMLElement {
                connectedCallback() {
                    const template = document
                        .querySelector<HTMLTemplateElement>("#comment-list-template")
                        ?.content.cloneNode(true) as HTMLElement;

                    if (template) {
                        // Loop through each of the comments and add them to the comments section
                        const section = template.querySelector("#comments-section");
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
                    this.appendChild(template);
                }
            }
        );
    })
    .catch(error => console.error(error));
