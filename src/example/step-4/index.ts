/* eslint-disable no-console */
import { html, render } from "lit";
import { Comment, loadData } from "./data";
import "./elements"; // register all custom elements

import "./theme.css";

loadData()
    .then((comments: Comment[]) => {
        const article = document.querySelector<HTMLElement>("#article");
        if (article) {
            render(
                html`
                    <my-comment-list>
                        ${comments.map(
                            ({ date, title, author, content }: Comment) =>
                                html`<my-comment
                                    .date=${date}
                                    .title=${title}
                                    .author=${author}
                                    .content=${content}
                                ></my-comment>`
                        )}
                    </my-comment-list>
                `,
                article
            );
        }
    })
    .catch(error => console.error(error));
