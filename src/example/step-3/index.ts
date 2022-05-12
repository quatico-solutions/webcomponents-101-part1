/* eslint-disable no-console */
import { Comment, loadData } from "./data";
import "./elements";

import "./theme.css";

loadData()
    .then((comments: Comment[]) => {
        const article = document.querySelector<HTMLElement>("#article");
        if (article) {
            const element = document.createElement("my-comment-list");
            element.setAttribute("data-comments", JSON.stringify(comments));
            article.appendChild(element);
        }
    })
    .catch(error => console.error(error));
