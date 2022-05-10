/* eslint-disable no-console */
import { Comment, loadData } from "./data";
import "./elements";

import "./theme.css";

loadData()
    .then((comments: Comment[]) => {
        const article = document.querySelector<HTMLElement>("#article");
        if (article) {
            article.innerHTML += `<my-comment-list data-comments='${encodeURIComponent(
                JSON.stringify([comments[0]]) // All comments are to long to be transported by a single attribute
            )}'></my-comment-list>`;
        }
    })
    .catch(error => console.error(error));
