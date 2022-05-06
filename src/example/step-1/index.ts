/* eslint-disable no-console */
import { Comment, loadData } from "./data";
import { createComment } from "./elements";

import "./theme.css";

loadData()
    .then((comments: Comment[]) => {
        // Loop through each of the comments and add them to the comments section
        const section = document.querySelector("#comments-section");
        comments.forEach(({ date, title, author, content }: Comment) =>
            section?.appendChild(createComment({ date, title, author, content }))
        );
    })
    .catch(error => console.error(error));
