/* eslint-disable no-console */
import { Comment, loadData } from "./data";

import "./theme.css";

loadData()
    .then((comments: Comment[]) => console.log(`Result:`, comments))
    .catch(error => console.error(error));
