/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { css, html, LitElement, TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styleText from "./my-comment.css";

@customElement("my-comment")
export class MyComment extends LitElement {
    static styles = css`
        ${unsafeCSS(styleText)}
    `;

    @property({ type: String })
    public date = "";

    @property({ type: String })
    public title = "";

    @property({ type: String })
    public author = "";

    @property({ type: String })
    public content = "";

    public render(): TemplateResult {
        return html`<div class="header">
                <span id="date" class="date">${this.date}</span>
                <span id="title" class="title">${this.title}</span>
                <span id="author" class="author">by ${this.author}</span>
            </div>
            <div id="content" class="content">${this.content}</div>`;
    }
}
