/* eslint-disable no-console */
import { Comment, loadData } from "./data";
import { MyComment, MyCommentList } from "./elements";

import "./theme.css";

loadData()
    .then((comments: Comment[]) => {
        customElements.define("my-comment-list", MyCommentList);
        customElements.define("my-comment", MyComment);

        const article = document.querySelector<HTMLElement>("#article");
        if (article) {
            article.innerHTML += `<my-comment-list data-comments='${JSON.stringify(comments[0])}'></my-comment-list>`;
        }
    })
    .catch(error => console.error(error));
